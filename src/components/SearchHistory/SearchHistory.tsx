import s from './SearchHistory.module.scss';
import { useAppSelector, useAppDispatch, } from 'hooks/hooks';
import { removeSearchHistory } from 'redux/slicers/searchCocktailSlice';
import { useCallback } from 'react'

interface Props {
    setLocalValue: (value: string) => void
    handleSearchChange: (value: string) => void
}

const SearchHistory: React.FC<Props> = ({ setLocalValue, handleSearchChange }) => {

    const { searchHistory } = useAppSelector(state => state.searchCocktailSlice);
    const dispatch = useAppDispatch();

    const deleteSearchItem = useCallback(
        (e: React.MouseEvent<HTMLSpanElement>, id: string) => {
            e.stopPropagation();
            dispatch(removeSearchHistory(id));
        },
        [dispatch]
    );

    const searchByHistory = useCallback(
        (value: string) => {
            handleSearchChange(value);
            setLocalValue(value);
        },
        [handleSearchChange, setLocalValue]
    );



    return (
        <div className={s.searchHistory}>
            <div className={s.searchList}>
                {searchHistory.length > 0 ? (
                    <ul>
                        {searchHistory.map((el, index) => (
                            <li
                                key={el.id}
                                className={s.searchItem}
                                onClick={() => searchByHistory(el.value)}
                            >
                                <p className={s.searchValue}>{`${index + 1}) ${el.value}`}</p>
                                <span className={s.searchDelete} onClick={(e) => deleteSearchItem(e, el.id)}>
                                    x
                                </span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className={s.searchEmpty}>No search history yet.</p>
                )}
            </div>
        </div>
    );
};

export default SearchHistory;