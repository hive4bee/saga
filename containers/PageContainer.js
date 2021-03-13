import List from '../components/List';
import Categories from '../components/Categories';
import { useCallback, useState } from 'react';
import styled from 'styled-components';

const PageContainer = () =>{
    const [category, setCategory] = useState("users")
    const onSelect = useCallback(category => setCategory(category), []);

    return(
        <>
            <Categories category={category} onSelect={onSelect}/>
            <List category={category}/>
        </>
    )
}
export default PageContainer;