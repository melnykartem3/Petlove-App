import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import usersReducer from './users/slice.js';
import friendsReducer from './friends/slice.js';
import citiesReducer from './cities/slice.js';
import newsReducer from './news/slice.js';
import noticesReducer from './notices/slice.js';

const usersPersistConfig = {
  key: 'users',
  storage,
  whitelist: ['token'],
};

const persistedUsersReducers = persistReducer(usersPersistConfig, usersReducer);

export const store = configureStore({
  reducer: {
    users: persistedUsersReducers,
    friends: friendsReducer,
    news: newsReducer,
    notices: noticesReducer,
    cities: citiesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
