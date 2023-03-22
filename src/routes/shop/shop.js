import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categories-preview/categories-preview'
import Category from '../category/category'
import { getCategories } from '../../utils/firebase/firebase'
import { setCategories } from '../../store/categories/categories.slice';

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getData = async () => {
            const categories = await getCategories();
            dispatch(setCategories(categories));
        };
    
        getData();
    }, [dispatch]);
    
    // App: <Route path='shop/*' element={<Shop />} />    
    //
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    );
}

export default Shop