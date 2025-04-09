import { configureStore } from '@reduxjs/toolkit';
import styleReducer from './styleSlice';
import mainReducer from './mainSlice';
import authSlice from './authSlice';
import openAiSlice from './openAiSlice';

import usersSlice from './users/usersSlice';
import activitiesSlice from './activities/activitiesSlice';
import categoriesSlice from './categories/categoriesSlice';
import contactsSlice from './contacts/contactsSlice';
import leadsSlice from './leads/leadsSlice';
import notesSlice from './notes/notesSlice';
import rolesSlice from './roles/rolesSlice';
import permissionsSlice from './permissions/permissionsSlice';
import branchesSlice from './branches/branchesSlice';

export const store = configureStore({
  reducer: {
    style: styleReducer,
    main: mainReducer,
    auth: authSlice,
    openAi: openAiSlice,

    users: usersSlice,
    activities: activitiesSlice,
    categories: categoriesSlice,
    contacts: contactsSlice,
    leads: leadsSlice,
    notes: notesSlice,
    roles: rolesSlice,
    permissions: permissionsSlice,
    branches: branchesSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
