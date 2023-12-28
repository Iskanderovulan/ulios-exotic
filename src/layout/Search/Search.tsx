import SearchInput from 'components/SearchInput/SearchInput';
import s from './Search.module.scss'
import { useSearchCocktailsByNameQuery } from 'redux/api/cocktailApi';
import { useAppSelector, useAppDispatch } from 'hooks/hooks';
import Loading from 'components/Loading/Loading';
import Error from 'components/Error/Error';
import Item from 'components/Item/Item';
import List from 'components/List/List';
import { setValue } from 'redux/slicers/searchCocktailSlice';
import { IDetails } from 'interfaces/interfaces';
import { setSearchHistory } from 'redux/slicers/searchCocktailSlice';



const Search = () => {

    const { value } = useAppSelector(state => state.searchCocktailSlice);
    const dispatch = useAppDispatch();
    const { data, error, isLoading } = useSearchCocktailsByNameQuery(value);



    const handleSearchChange = (value: string) => {
        dispatch(setValue(value));
    };

    const handleSearchHistory = (value: string) => {
        dispatch(setSearchHistory(value));
    };



    return (
        <>
            <Loading isLoading={isLoading} />
            <Error error={error} />

            <section id={s.search} className={s.search}>
                <div className="container">

                    <SearchInput
                        handleSearchChange={handleSearchChange}
                        handleSearchHistory={handleSearchHistory}
                    />



                    {!data?.drinks && <div>No cocktails found</div>}
                    <div className='row gy-4 row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1'>
                        <List
                            items={data?.drinks ?? []}
                            renderItem={
                                (item: IDetails) => <Item item={item} key={item.idDrink} />
                            }
                        />
                    </div>
                </div>
            </section>

        </>
    );
};

export default Search;