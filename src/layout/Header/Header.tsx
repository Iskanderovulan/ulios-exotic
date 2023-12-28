import s from './Header.module.scss'
import { NavLink } from 'react-router-dom';
import { linksJson, socialJson } from 'utils/constants';
import List from 'components/List/List';
import LinkItem from 'components/LinkItem/LinkItem';
import SocialItem from 'components/SocialItem/SocialItem';
import { ISocial, INav } from 'interfaces/interfaces';


const Header = () => {

    return (
        <header className={s.header}>
            <div className="container">
                <div className={`${s.header__nav}`}>
                    <ul className={`${s.header__box} ${s.header__first}`}>
                        <List
                            items={linksJson}
                            renderItem={
                                (item: INav) => <LinkItem item={item} key={item.id} />
                            }
                        />
                    </ul>
                    <div className={`${s.header__box} ${s.header__second}`}>
                        <h1><NavLink to='/'>cocktail bar</NavLink></h1>
                    </div>
                    <ul className={`${s.header__box} ${s.header__third}`}>
                        <List
                            items={socialJson}
                            renderItem={
                                (item: ISocial) => <SocialItem item={item} key={item.id} />
                            }
                        />
                    </ul>

                </div>

            </div>
        </header>
    );
};

export default Header;