import React from 'react';
import styled, {css} from 'styled-components'

const categories=[
    {
        name:'posts',
        text:'포스트'
    },
    {
        name:'users',
        text:'사용자'
    }
]

const CategoriesBlock=styled.div`
    display:flex;
    padding:1rem;
    width:768px;
    margin:0 auto;
    @media screen and (max-width: 768px){
        width:100%;
        overflow-x:auto;
    }
`;

const Category = styled.div`
    font-size:1.125rem;
    cursor:pointer;
    white-space:pre;
    text-decoration:none;
    color:inherit;
    padding-bottom:0.25rem;
    &:hover{
        color:#495057;
    }
    ${props => props.active && css`
        font-weight:600;
        border-bottom:2px solid #22b8cf;
        color:#22b8cf;
        &:hover{
            color:#3bc9db;
        }
    `}
    & + & {
        margin-left:1rem;
    }
`;

const Categories = ({category, onSelect}) =>{
    return(
        <CategoriesBlock>
            {categories.map(c => (
                <Category key={c.name} active={c.name===category} onClick={() => onSelect(c.name)} >{c.text}</Category>
            ))}
        </CategoriesBlock>
    )
}
export default Categories;