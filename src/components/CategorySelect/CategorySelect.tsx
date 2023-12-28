import React, { ChangeEvent } from 'react';
import { useGetCategoriesQuery } from 'redux/api/cocktailApi';
import List from 'components/List/List';
import Category from 'components/Category/Category';
import { ICategory } from 'interfaces/interfaces';
import s from './CategorySelect.module.scss'

interface Props {
  onCategoryChange: (category: string) => void;
  selectedCategory: string
}

const CategorySelect: React.FC<Props> = ({ onCategoryChange, selectedCategory }) => {
  const { data, isLoading, error } = useGetCategoriesQuery(null);

  if (isLoading) {
    return <p>Loading categories...</p>;
  };
  if (error) {
    const errorMessage = 'message' in error ? error.message : 'An error occurred';
    return <p>Error: {errorMessage}</p>;
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onCategoryChange(event.target.value);
  };

  return (
    <div className={s.cocktailSelectWrapper}>
      <select className={s.cocktailSelect} defaultValue={selectedCategory} onChange={handleChange} >
        <List
          items={data?.drinks ?? []}
          renderItem={
            (item: ICategory) => <Category item={item} key={item.strCategory} />
          }
        />
      </ select>
    </div>
  );
};

export default CategorySelect;
