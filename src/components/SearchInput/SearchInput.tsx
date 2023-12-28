import { useState, useRef, useEffect } from 'react';
import SearchHistory from 'components/SearchHistory/SearchHistory';
import s from './SearchInput.module.scss'

interface Props {
    handleSearchChange: (name: string) => void;
    handleSearchHistory: (name: string) => void;
}

const SearchInput: React.FC<Props> = ({
    handleSearchChange,
    handleSearchHistory,
}) => {

    const [localValue, setLocalValue] = useState('');
    const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
    const searchHistoryRef = useRef<HTMLDivElement>(null);


    const handleInputFocus = () => {
        setIsSearchFocused(true);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchHistoryRef.current && !searchHistoryRef.current.contains(event.target as Node)) {
                setIsSearchFocused(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);



    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (localValue === '') {
            return alert('Field is empty')
        }
        handleSearchChange(localValue)
        handleSearchHistory(localValue)
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalValue(e.target.value);
    };

    return (
        <>
            <form className={s.form} onSubmit={handleSubmit}>
                <input
                    className={s.cocktailInput}
                    type='text'
                    placeholder='Search'
                    value={localValue}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}

                />
                <button className='cocktailButton' type='submit'>Find</button>

            </form>
            {isSearchFocused && (
                <div ref={searchHistoryRef}>
                    <SearchHistory
                        setLocalValue={setLocalValue}
                        handleSearchChange={handleSearchChange}
                    />
                </div>
            )}
        </>
    );
};

export default SearchInput;
