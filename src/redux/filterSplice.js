import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const filterState = { filter: '' };

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'filter',
  storage,
};

export const { setFilter } = filterSlice.actions;
// export const filterReducer = filterSlice.reducer;
export const filterReducer = persistReducer(persistConfig, filterSlice.reducer);
