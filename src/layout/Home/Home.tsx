import React from 'react';
import s from './Home.module.scss'
import Item from 'components/Item/Item';
import List from 'components/List/List';
import CategorySelect from 'components/CategorySelect/CategorySelect';
import { useAppSelector, useAppDispatch } from 'hooks/hooks';
import { useGetCocktailsByCategoryQuery } from 'redux/api/cocktailApi';
import { setCategory } from 'redux/slicers/selectedCategorySlice';
import { ICocktail } from 'interfaces/interfaces';
import Loading from 'components/Loading/Loading';
import Error from 'components/Error/Error';


const Home: React.FC = () => {
    const selectedCategory = useAppSelector(state => state.selectedCategorySlice.category);
    const dispatch = useAppDispatch();
    const { data, error, isLoading } = useGetCocktailsByCategoryQuery(selectedCategory);


    const handleCategoryChange = (category: string) => {
        dispatch(setCategory(category));
    };


    return (
        <>
            <Loading isLoading={isLoading} />
            <Error error={error} />
            <section id={s.home} className={s.home}>
                <div className="container">
                    <CategorySelect
                        onCategoryChange={handleCategoryChange}
                        selectedCategory={selectedCategory} />
                    <div className='row gy-4 row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1'>
                        <List
                            items={data?.drinks ?? []}
                            renderItem={
                                (item: ICocktail) => <Item item={item} key={item.idDrink} />
                            }
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
