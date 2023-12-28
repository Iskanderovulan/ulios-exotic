import { NavLink } from 'react-router-dom';
import s from './LinkItem.module.scss'
import { INav } from 'interfaces/interfaces';

interface Props {
    item: INav
}

interface IActive {
    isActive: boolean
}

const LinkItem: React.FC<Props> = ({ item }) => {
    const active = ({ isActive }: IActive) => (isActive ? `${s.linkItem} ${s.active}` : s.linkItem)
    return (
        <li>
            <NavLink className={active} to={`/${item.url}`}>{item.title}</NavLink>
        </li>
    );
};

export default LinkItem;