const db = require('../models');
const Users = db.users;

const Activities = db.activities;

const Categories = db.categories;

const Contacts = db.contacts;

const Leads = db.leads;

const Notes = db.notes;

const Branches = db.branches;

const ActivitiesData = [
  {
    description: 'Initial meeting with Acme Corp',

    start_date: new Date('2023-10-01T09:00:00Z'),

    end_date: new Date('2023-10-01T10:00:00Z'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    description: 'Follow-up call with Beta LLC',

    start_date: new Date('2023-10-02T11:00:00Z'),

    end_date: new Date('2023-10-02T11:30:00Z'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    description: 'Presentation for Gamma Inc',

    start_date: new Date('2023-10-03T14:00:00Z'),

    end_date: new Date('2023-10-03T15:00:00Z'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const CategoriesData = [
  {
    name: 'Corporate',

    // type code here for "relation_one" field
  },

  {
    name: 'Small Business',

    // type code here for "relation_one" field
  },

  {
    name: 'Enterprise',

    // type code here for "relation_one" field
  },
];

const ContactsData = [
  {
    first_name: 'John',

    last_name: 'Doe',

    email: 'john.doe@acmecorp.com',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    first_name: 'Alice',

    last_name: 'Smith',

    email: 'alice.smith@betallc.com',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    first_name: 'Michael',

    last_name: 'Jones',

    email: 'michael.jones@gammainc.com',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const LeadsData = [
  {
    name: 'Acme Corp',

    status: 'New',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Beta LLC',

    status: 'Lost',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Gamma Inc',

    status: 'Contacted',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const NotesData = [
  {
    content: 'Acme Corp is interested in our premium package.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'Beta LLC needs a follow-up on pricing.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'Gamma Inc requested a demo next week.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const BranchesData = [
  {
    name: 'Downtown Office',
  },

  {
    name: 'Uptown Office',
  },

  {
    name: 'Suburban Office',
  },
];

// Similar logic for "relation_many"

async function associateUserWithBranch() {
  const relatedBranch0 = await Branches.findOne({
    offset: Math.floor(Math.random() * (await Branches.count())),
  });
  const User0 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (User0?.setBranch) {
    await User0.setBranch(relatedBranch0);
  }

  const relatedBranch1 = await Branches.findOne({
    offset: Math.floor(Math.random() * (await Branches.count())),
  });
  const User1 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (User1?.setBranch) {
    await User1.setBranch(relatedBranch1);
  }

  const relatedBranch2 = await Branches.findOne({
    offset: Math.floor(Math.random() * (await Branches.count())),
  });
  const User2 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (User2?.setBranch) {
    await User2.setBranch(relatedBranch2);
  }
}

async function associateActivityWithLead() {
  const relatedLead0 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Activity0 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Activity0?.setLead) {
    await Activity0.setLead(relatedLead0);
  }

  const relatedLead1 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Activity1 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Activity1?.setLead) {
    await Activity1.setLead(relatedLead1);
  }

  const relatedLead2 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Activity2 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Activity2?.setLead) {
    await Activity2.setLead(relatedLead2);
  }
}

async function associateActivityWithBranch() {
  const relatedBranch0 = await Branches.findOne({
    offset: Math.floor(Math.random() * (await Branches.count())),
  });
  const Activity0 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Activity0?.setBranch) {
    await Activity0.setBranch(relatedBranch0);
  }

  const relatedBranch1 = await Branches.findOne({
    offset: Math.floor(Math.random() * (await Branches.count())),
  });
  const Activity1 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Activity1?.setBranch) {
    await Activity1.setBranch(relatedBranch1);
  }

  const relatedBranch2 = await Branches.findOne({
    offset: Math.floor(Math.random() * (await Branches.count())),
  });
  const Activity2 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Activity2?.setBranch) {
    await Activity2.setBranch(relatedBranch2);
  }
}

async function associateCategoryWithBranch() {
  const relatedBranch0 = await Branches.findOne({
    offset: Math.floor(Math.random() * (await Branches.count())),
  });
  const Category0 = await Categories.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Category0?.setBranch) {
    await Category0.setBranch(relatedBranch0);
  }

  const relatedBranch1 = await Branches.findOne({
    offset: Math.floor(Math.random() * (await Branches.count())),
  });
  const Category1 = await Categories.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Category1?.setBranch) {
    await Category1.setBranch(relatedBranch1);
  }

  const relatedBranch2 = await Branches.findOne({
    offset: Math.floor(Math.random() * (await Branches.count())),
  });
  const Category2 = await Categories.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Category2?.setBranch) {
    await Category2.setBranch(relatedBranch2);
  }
}

async function associateContactWithLead() {
  const relatedLead0 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Contact0 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Contact0?.setLead) {
    await Contact0.setLead(relatedLead0);
  }

  const relatedLead1 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Contact1 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Contact1?.setLead) {
    await Contact1.setLead(relatedLead1);
  }

  const relatedLead2 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Contact2 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Contact2?.setLead) {
    await Contact2.setLead(relatedLead2);
  }
}

async function associateContactWithBranch() {
  const relatedBranch0 = await Branches.findOne({
    offset: Math.floor(Math.random() * (await Branches.count())),
  });
  const Contact0 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Contact0?.setBranch) {
    await Contact0.setBranch(relatedBranch0);
  }

  const relatedBranch1 = await Branches.findOne({
    offset: Math.floor(Math.random() * (await Branches.count())),
  });
  const Contact1 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Contact1?.setBranch) {
    await Contact1.setBranch(relatedBranch1);
  }

  const relatedBranch2 = await Branches.findOne({
    offset: Math.floor(Math.random() * (await Branches.count())),
  });
  const Contact2 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Contact2?.setBranch) {
    await Contact2.setBranch(relatedBranch2);
  }
}

async function associateLeadWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Lead0 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Lead0?.setCategory) {
    await Lead0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Lead1 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Lead1?.setCategory) {
    await Lead1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Lead2 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Lead2?.setCategory) {
    await Lead2.setCategory(relatedCategory2);
  }
}

async function associateLeadWithOwner() {
  const relatedOwner0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead0 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Lead0?.setOwner) {
    await Lead0.setOwner(relatedOwner0);
  }

  const relatedOwner1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead1 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Lead1?.setOwner) {
    await Lead1.setOwner(relatedOwner1);
  }

  const relatedOwner2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead2 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Lead2?.setOwner) {
    await Lead2.setOwner(relatedOwner2);
  }
}

async function associateLeadWithBranch() {
  const relatedBranch0 = await Branches.findOne({
    offset: Math.floor(Math.random() * (await Branches.count())),
  });
  const Lead0 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Lead0?.setBranch) {
    await Lead0.setBranch(relatedBranch0);
  }

  const relatedBranch1 = await Branches.findOne({
    offset: Math.floor(Math.random() * (await Branches.count())),
  });
  const Lead1 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Lead1?.setBranch) {
    await Lead1.setBranch(relatedBranch1);
  }

  const relatedBranch2 = await Branches.findOne({
    offset: Math.floor(Math.random() * (await Branches.count())),
  });
  const Lead2 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Lead2?.setBranch) {
    await Lead2.setBranch(relatedBranch2);
  }
}

async function associateLeadWithBranch() {
  const relatedBranch0 = await Branches.findOne({
    offset: Math.floor(Math.random() * (await Branches.count())),
  });
  const Lead0 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Lead0?.setBranch) {
    await Lead0.setBranch(relatedBranch0);
  }

  const relatedBranch1 = await Branches.findOne({
    offset: Math.floor(Math.random() * (await Branches.count())),
  });
  const Lead1 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Lead1?.setBranch) {
    await Lead1.setBranch(relatedBranch1);
  }

  const relatedBranch2 = await Branches.findOne({
    offset: Math.floor(Math.random() * (await Branches.count())),
  });
  const Lead2 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Lead2?.setBranch) {
    await Lead2.setBranch(relatedBranch2);
  }
}

async function associateNoteWithLead() {
  const relatedLead0 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Note0 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Note0?.setLead) {
    await Note0.setLead(relatedLead0);
  }

  const relatedLead1 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Note1 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Note1?.setLead) {
    await Note1.setLead(relatedLead1);
  }

  const relatedLead2 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Note2 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Note2?.setLead) {
    await Note2.setLead(relatedLead2);
  }
}

async function associateNoteWithBranch() {
  const relatedBranch0 = await Branches.findOne({
    offset: Math.floor(Math.random() * (await Branches.count())),
  });
  const Note0 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Note0?.setBranch) {
    await Note0.setBranch(relatedBranch0);
  }

  const relatedBranch1 = await Branches.findOne({
    offset: Math.floor(Math.random() * (await Branches.count())),
  });
  const Note1 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Note1?.setBranch) {
    await Note1.setBranch(relatedBranch1);
  }

  const relatedBranch2 = await Branches.findOne({
    offset: Math.floor(Math.random() * (await Branches.count())),
  });
  const Note2 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Note2?.setBranch) {
    await Note2.setBranch(relatedBranch2);
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Activities.bulkCreate(ActivitiesData);

    await Categories.bulkCreate(CategoriesData);

    await Contacts.bulkCreate(ContactsData);

    await Leads.bulkCreate(LeadsData);

    await Notes.bulkCreate(NotesData);

    await Branches.bulkCreate(BranchesData);

    await Promise.all([
      // Similar logic for "relation_many"

      await associateUserWithBranch(),

      await associateActivityWithLead(),

      await associateActivityWithBranch(),

      await associateCategoryWithBranch(),

      await associateContactWithLead(),

      await associateContactWithBranch(),

      await associateLeadWithCategory(),

      await associateLeadWithOwner(),

      await associateLeadWithBranch(),

      await associateLeadWithBranch(),

      await associateNoteWithLead(),

      await associateNoteWithBranch(),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('activities', null, {});

    await queryInterface.bulkDelete('categories', null, {});

    await queryInterface.bulkDelete('contacts', null, {});

    await queryInterface.bulkDelete('leads', null, {});

    await queryInterface.bulkDelete('notes', null, {});

    await queryInterface.bulkDelete('branches', null, {});
  },
};
