import { createSlice } from '@reduxjs/toolkit';

interface ISelectedCategoryState {
  category: string;
}

const initialState: ISelectedCategoryState = {
  category: 'Ordinary_Drink',
};

export const selectedCategorySlice = createSlice({
  name: 'selectedCategory',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setCategory } = selectedCategorySlice.actions;

export default selectedCategorySlice.reducer;