import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { getPost, unloadPost } from '../modules/sample';

const ListItemBlock=styled.div`
    display:flex;
    .content{
        h2{
            margin:0;
            a{
                color:black;
            }
        }
        p{
            margin:0;
            line-height:1.5;
            margin-top:0.5rem;
            white-space:normal;
        }
    }
    &+&{
        margin-top:3rem;
    }
`;



const ListItem = ({item, category, onClick}) => {
    
    // useEffect(()=>{
        
    //     return ()=>{
    //         // dispatch(unloadPost());
    //     }
    // },[posts])

    return(
        <ListItemBlock onClick={onClick}>
            {category==='posts' && (
                <div className="content">
                    <h2>
                        
                        title: {item.title}
                    </h2>
                    <p>{item.id}<br/>
                    {item.body}</p>
                </div>
            )} 
            {category==='users' && (
                <div className='content'>
                    <h2>
                        id: {item.id}<br/>
                        name: {item.name}
                    </h2>
                    <p>
                    
                    username: {item.username}<br/>
                    email: {item.email}<br/>
                    website: {item.website}<br/>
                    phone: {item.phone}<br/>
                    addressStreet: {[item.address.street]}<br/>
                    addressSuite: {item.address.suite}<br/>
                    
                    addressCity: {item.address.city}<br/>
                    addressZipcode: {item.address.zipcode}<br/>
                    addressGeoLat: {item.address.geo.lat}<br/>
                    addressGeoLng: {item.address.geo.lng}<br/>
                    companyName: {item.company.name}<br/>
                    companyCatchPhrase: {item.company.catchPhrase}<br/>
                    companyBs: {item.company.bs}<br/>
                    </p>
                </div>
            )}
        </ListItemBlock>
    )
}

export default ListItem;