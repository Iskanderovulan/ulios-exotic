import s from './DetailsFirst.module.scss'
import { IDetails } from 'interfaces/interfaces';
import { LazyLoadImage } from 'react-lazy-load-image-component';


interface Props {
    item: IDetails | undefined
}

const DetailsFirst: React.FC<Props> = ({ item }) => {
    if (!item) {
        return null;
    }
    return (
        <div className='col'>
            <div className={s.detailsFirst}>
                <LazyLoadImage
                    width='100%'
                    alt={item.strDrink}
                    effect="blur"
                    src={item.strDrinkThumb}
                />
                <p>{item.strDrink}</p>
            </div>
        </div>
    );
};

export default DetailsFirst;