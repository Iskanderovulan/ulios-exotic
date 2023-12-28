import DetailsFirst from "components/DetailsFirst/DetailsFirst";
import DetailsSecond from "components/DetailsSecond/DetailsSecond";
import { useParams } from "react-router-dom";
import { useCallback, useMemo } from 'react'

import { useGetCocktailDetailsQuery } from "redux/api/cocktailApi";
import s from './Details.module.scss'
import Error from "components/Error/Error";
import Loading from "components/Loading/Loading";


const Details = () => {
    const { id } = useParams()
    const { data, error, isLoading, refetch } = useGetCocktailDetailsQuery(id);

    const generateValue = useCallback((str: string) => {
        if (data) {
            return Object.entries(data.drinks[0])
                .filter(([key, value]) => key.startsWith(str) && value)
                .map(([_, value]) => value)
        }
        return [];
    }, [data])

    const ingredients = useMemo(() => generateValue('strIngredient'), [generateValue])


    const getRandomCocktail = () => {
        refetch()
    }

    return (
        <>
            <Loading isLoading={isLoading} />
            <Error error={error} />
            <section id={s.details} className={s.details}>
                <div className="container">
                    {id === 'random'
                        && <button
                            className='cocktailButton'
                            onClick={getRandomCocktail}>
                            random cocktail
                        </button>}
                    <div className="row gy-4 row-cols-lg-2 row-cols-md-1 row-cols-sm-1 row-cols-1">
                        <DetailsFirst item={data?.drinks[0]} />
                        <DetailsSecond ingredients={ingredients} />
                    </div>
                </div>
            </section>
        </>

    );
};

export default Details;