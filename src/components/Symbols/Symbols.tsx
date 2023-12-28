import s from './Symbols.module.scss'
import List from 'components/List/List';
import { letters } from 'utils/constants';
import Symbol from 'components/Symbol/Symbol';

const Symbols = () => {
    return (
        <div className={s.symbols}>
            <List
                items={letters}
                renderItem={
                    (item: string) => <Symbol item={item} key={item} />
                }
            />
        </div>
    );
};

export default Symbols;