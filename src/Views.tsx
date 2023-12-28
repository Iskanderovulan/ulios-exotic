import Details from 'layout/Details/Details';
import Home from 'layout/Home/Home';
import Layout from 'layout/Layout/Layout';
import Pagination from 'layout/Pagination/Pagination';
import Search from 'layout/Search/Search';
import { Routes, Route } from 'react-router-dom'


const Views = () => {



    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/search' element={<Search />} />
                <Route path='/pagination/:symbol' element={<Pagination />} />
                <Route path='/details/:id' element={<Details />} />
                <Route path='/search/details/:id' element={<Details />} />
                <Route path='/pagination/:symbol/details/:id' element={<Details />} />
            </Route>
        </Routes>
    );
};

export default Views;