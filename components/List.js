import React, {useState, useEffect, useCallback} from 'react';
import styled from "styled-components";
import ListItem from './ListItem'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { startLoading, finishLoading } from '../modules/loading'
import { getPost, unloadPost } from '../modules/sample';

const ListBlock=styled.div`
    box-sizing:border-box;
    padding-bottom:3rem;
    width:768px;
    margin:0 auto;
    margin-top:2rem;

`


const List=({category})=>{
    const dispatch = useDispatch();
    const {posts} = useSelector(state=>({
        posts: state.posts
    }));
    const [id, setId]=useState("");
    const onClick= useCallback((id)=>{
        console.log(id);
        setId(id);
    },[id])
    useEffect(()=>{
        dispatch(getPost(id))
        console.log(posts)
    },[id])
    const [items, setItems]=useState();
    // const [loading, setLoading]=useState(false)
    useEffect(()=>{
        const fetchData= async() =>{
            //setLoading(true)
            //dispatch(startLoading('post'))
            try{
                const response = await axios.get(`http://jsonplaceholder.typicode.com/${category}`)
                //console.log(response.data)
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
                <ListItem key={item.id} item={item} category={category} onClick={()=>onClick(item.id)}/>
            ))}
        </ListBlock>
    )
}

export default List;