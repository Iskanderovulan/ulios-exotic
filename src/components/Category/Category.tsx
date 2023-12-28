import { ICategory } from 'interfaces/interfaces';

interface Props {
    item: ICategory
}

const Category: React.FC<Props> = ({ item }) => {
    return (
        <>
            <option value={item.strCategory}>
                {item.strCategory}
            </option>
        </>
    );
};

export default Category;