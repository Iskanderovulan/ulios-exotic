import React from 'react';

interface ListProps<T> {
    items: T[],
    renderItem: (item: T) => React.ReactNode
}

const List = <T,>({ items, renderItem }: ListProps<T>) => {
    return (
        <>
            {items?.map(renderItem)}
        </>
    );
};

export default List;