import { createSlice } from '@reduxjs/toolkit';

interface ISearchCocktail {
  value: string;
  searchHistory: {id:string,value:string}[]; 
}

const initialState: ISearchCocktail = {
  value: '',
  searchHistory: [],
};


export const searchCocktailSlice = createSlice({
  name: 'searchCocktail',
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    setSearchHistory: (state, action) => {
      const item = {
        id: new Date().toISOString(),
        value: action.payload,
      };

      const alreadyExists = state.searchHistory.some((el) => el.value === item.value);
      if (!alreadyExists) {
          state.searchHistory=[item,...state.searchHistory]
        }
    },
    removeSearchHistory: (state, action) => {
      state.searchHistory = state.searchHistory.filter(item => item.id !== action.payload);
    },
  },  
});

export const { setValue,setSearchHistory,removeSearchHistory } = searchCocktailSlice.actions;

export default searchCocktailSlice.reducer;