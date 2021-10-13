import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from './ListItem';



function List(props){

    const items = useSelector(state=>state);

    return(
        <ul className='tasks'>
            { items.map((item)=>{return <ListItem key={item.id} item={item}></ListItem>})}
        </ul>
    );

}

export default List;