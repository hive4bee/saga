import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import ListItem from './ListItem'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { startLoading, finishLoading } from '../modules/loading'

const ListBlock=styled.div`
    box-sizing:border-box;
    padding-bottom:3rem;
    width:768px;
    margin:0 auto;
    margin-top:2rem;

`


const List=({category})=>{
    const [items, setItems]=useState(null);
    // const [loading, setLoading]=useState(false)
    useEffect(()=>{
        let fetchData= async() =>{
            //setLoading(true)
            //dispatch(startLoading('post'))
            try{
                const response = await axios.get(`http://jsonplaceholder.typicode.com/${category}`)
                console.log(response.data)
                setItems(response.data)
            }catch(e){
                console.log(e)
            }
            //setLoading(false)
            //dispatch(finishLoading('post'))
        }
        fetchData()
    }, [category]);

    // if(loading){
    //     return <ListBlock>대기중..........</ListBlock>
    // }
    // if(!items){
    //     return null
    // }
    return(
        <ListBlock>
            {!items&&(
                <div>대기중...........</div>
            )}
            {items && items.map(item => (
                <ListItem key={item.id} item={item} category={category}/>
            ))}
        </ListBlock>
    )
}

export default List;