import Symbols from 'components/Symbols/Symbols';
import s from './Pagination.module.scss';
import { useGetCocktailsBySymbolQuery } from 'redux/api/cocktailApi';
import { useParams } from 'react-router-dom';
import { IDetails } from 'interfaces/interfaces';
import List from 'components/List/List';
import Item from 'components/Item/Item';
import Loading from 'components/Loading/Loading';
import Error from 'components/Error/Error';

const Pagination = () => {
    const { symbol } = useParams()
    const { data, error, isLoading } = useGetCocktailsBySymbolQuery(symbol)
    return (
        <>
            <Loading isLoading={isLoading} />
            <Error error={error} />
            <section id={s.pagination} className={s.pagination}>
                <div className="container">
                    <Symbols />
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

export default Pagination;