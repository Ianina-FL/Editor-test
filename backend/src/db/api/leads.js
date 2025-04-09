const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class LeadsDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const leads = await db.leads.create(
      {
        id: data.id || undefined,

        name: data.name || null,
        status: data.status || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await leads.setCategory(data.category || null, {
      transaction,
    });

    await leads.setOwner(data.owner || null, {
      transaction,
    });

    await leads.setBranch(data.branch || null, {
      transaction,
    });

    await leads.setBranches(data.branches || null, {
      transaction,
    });

    return leads;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const leadsData = data.map((item, index) => ({
      id: item.id || undefined,

      name: item.name || null,
      status: item.status || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const leads = await db.leads.bulkCreate(leadsData, { transaction });

    // For each item created, replace relation files

    return leads;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;
    const globalAccess = currentUser.app_role?.globalAccess;

    const leads = await db.leads.findByPk(id, {}, { transaction });

    const updatePayload = {};

    if (data.name !== undefined) updatePayload.name = data.name;

    if (data.status !== undefined) updatePayload.status = data.status;

    updatePayload.updatedById = currentUser.id;

    await leads.update(updatePayload, { transaction });

    if (data.category !== undefined) {
      await leads.setCategory(
        data.category,

        { transaction },
      );
    }

    if (data.owner !== undefined) {
      await leads.setOwner(
        data.owner,

        { transaction },
      );
    }

    if (data.branch !== undefined) {
      await leads.setBranch(
        data.branch,

        { transaction },
      );
    }

    if (data.branches !== undefined) {
      await leads.setBranches(
        data.branches,

        { transaction },
      );
    }

    return leads;
  }

  static async deleteByIds(ids, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const leads = await db.leads.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
      transaction,
    });

    await db.sequelize.transaction(async (transaction) => {
      for (const record of leads) {
        await record.update({ deletedBy: currentUser.id }, { transaction });
      }
      for (const record of leads) {
        await record.destroy({ transaction });
      }
    });

    return leads;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const leads = await db.leads.findByPk(id, options);

    await leads.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await leads.destroy({
      transaction,
    });

    return leads;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const leads = await db.leads.findOne({ where }, { transaction });

    if (!leads) {
      return leads;
    }

    const output = leads.get({ plain: true });

    output.activities_lead = await leads.getActivities_lead({
      transaction,
    });

    output.contacts_lead = await leads.getContacts_lead({
      transaction,
    });

    output.notes_lead = await leads.getNotes_lead({
      transaction,
    });

    output.category = await leads.getCategory({
      transaction,
    });

    output.owner = await leads.getOwner({
      transaction,
    });

    output.branch = await leads.getBranch({
      transaction,
    });

    output.branches = await leads.getBranches({
      transaction,
    });

    return output;
  }

  static async findAll(filter, globalAccess, options) {
    const limit = filter.limit || 0;
    let offset = 0;
    let where = {};
    const currentPage = +filter.page;

    const user = (options && options.currentUser) || null;
    const userBranches = (user && user.branches?.id) || null;

    if (userBranches) {
      if (options?.currentUser?.branchesId) {
        where.branchesId = options.currentUser.branchesId;
      }
    }

    offset = currentPage * limit;

    const orderBy = null;

    const transaction = (options && options.transaction) || undefined;

    let include = [
      {
        model: db.categories,
        as: 'category',

        where: filter.category
          ? {
              [Op.or]: [
                {
                  id: {
                    [Op.in]: filter.category
                      .split('|')
                      .map((term) => Utils.uuid(term)),
                  },
                },
                {
                  name: {
                    [Op.or]: filter.category
                      .split('|')
                      .map((term) => ({ [Op.iLike]: `%${term}%` })),
                  },
                },
              ],
            }
          : {},
      },

      {
        model: db.users,
        as: 'owner',

        where: filter.owner
          ? {
              [Op.or]: [
                {
                  id: {
                    [Op.in]: filter.owner
                      .split('|')
                      .map((term) => Utils.uuid(term)),
                  },
                },
                {
                  firstName: {
                    [Op.or]: filter.owner
                      .split('|')
                      .map((term) => ({ [Op.iLike]: `%${term}%` })),
                  },
                },
              ],
            }
          : {},
      },

      {
        model: db.branches,
        as: 'branch',
      },

      {
        model: db.branches,
        as: 'branches',
      },
    ];

    if (filter) {
      if (filter.id) {
        where = {
          ...where,
          ['id']: Utils.uuid(filter.id),
        };
      }

      if (filter.name) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('leads', 'name', filter.name),
        };
      }

      if (filter.active !== undefined) {
        where = {
          ...where,
          active: filter.active === true || filter.active === 'true',
        };
      }

      if (filter.status) {
        where = {
          ...where,
          status: filter.status,
        };
      }

      if (filter.branch) {
        const listItems = filter.branch.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          branchId: { [Op.or]: listItems },
        };
      }

      if (filter.branches) {
        const listItems = filter.branches.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          branchesId: { [Op.or]: listItems },
        };
      }

      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.lte]: end,
            },
          };
        }
      }
    }

    if (globalAccess) {
      delete where.branchesId;
    }

    const queryOptions = {
      where,
      include,
      distinct: true,
      order:
        filter.field && filter.sort
          ? [[filter.field, filter.sort]]
          : [['createdAt', 'desc']],
      transaction: options?.transaction,
      logging: console.log,
    };

    if (!options?.countOnly) {
      queryOptions.limit = limit ? Number(limit) : undefined;
      queryOptions.offset = offset ? Number(offset) : undefined;
    }

    try {
      const { rows, count } = await db.leads.findAndCountAll(queryOptions);

      return {
        rows: options?.countOnly ? [] : rows,
        count: count,
      };
    } catch (error) {
      console.error('Error executing query:', error);
      throw error;
    }
  }

  static async findAllAutocomplete(
    query,
    limit,
    offset,
    globalAccess,
    organizationId,
  ) {
    let where = {};

    if (!globalAccess && organizationId) {
      where.organizationId = organizationId;
    }

    if (query) {
      where = {
        [Op.or]: [
          { ['id']: Utils.uuid(query) },
          Utils.ilike('leads', 'name', query),
        ],
      };
    }

    const records = await db.leads.findAll({
      attributes: ['id', 'name'],
      where,
      limit: limit ? Number(limit) : undefined,
      offset: offset ? Number(offset) : undefined,
      orderBy: [['name', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.name,
    }));
  }
};
