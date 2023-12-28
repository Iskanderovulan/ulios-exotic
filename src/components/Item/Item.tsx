import s from './Item.module.scss';
import { ICocktail } from 'interfaces/interfaces';
import { useNavigate, useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface Props {
    item: ICocktail
}

const Item: React.FC<Props> = ({ item }) => {

    const navigate = useNavigate()
    const location = useLocation()

    const navigateToDetails = () => {
        if (location.pathname === '/') {
            return navigate(`/details/${item.idDrink}`)
        }
        navigate(`${location.pathname}/details/${item.idDrink}`)
    }

    return (
        <div
            className='col'
            onClick={navigateToDetails}
        >
            <div className={s.item__box}>
                <LazyLoadImage
                    alt={item.strDrink}
                    effect="blur"
                    height='300px'
                    src={item.strDrinkThumb}
                />
                <p>{item.strDrink}</p>
            </div>
        </div>
    );
};

export default Item;