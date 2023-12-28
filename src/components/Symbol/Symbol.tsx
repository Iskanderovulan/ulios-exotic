import s from './Symbol.module.scss'
import { Link } from 'react-router-dom';

interface Props {
    item: string
}

const Symbol: React.FC<Props> = ({ item }) => {
    return (
        <Link className={s.symbol} to={`/pagination/${item}`}>
            {item}
        </Link>
    );
};

export default Symbol;