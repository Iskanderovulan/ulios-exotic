import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICocktail,IDetails } from 'interfaces/interfaces';

export const cocktailApi = createApi({
  reducerPath: 'cocktailApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1/' }),
  endpoints: (builder) => ({
    getCocktailsByCategory: builder.query<{ drinks: ICocktail[] }, string>({
      query: (category) => `filter.php?c=${category}`,
    }),
    getCategories:builder.query({
      query:()=>'list.php?c=list'
    }),
    getCocktailDetails: builder.query<{ drinks: IDetails[] }, string | undefined>({
      query: (cocktailId) => cocktailId?`random.php`:`lookup.php?i=${cocktailId}`,
    }),
    searchCocktailsByName: builder.query<{ drinks: IDetails[] }, string>({
      query: (name) => `search.php?s=${name}`,
    }),
    getCocktailsBySymbol: builder.query<{ drinks: IDetails[] }, string | undefined>({
      query: (symbol) => `search.php?f=${symbol}`,
    }),
  }),
});
// use[EndpointName]Query

export const 
{
   useGetCocktailsByCategoryQuery,
   useGetCategoriesQuery,
   useGetCocktailDetailsQuery  ,
   useSearchCocktailsByNameQuery,
   useGetCocktailsBySymbolQuery
  } = cocktailApi;