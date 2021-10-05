import React from 'react';
import ListItem from './ListItem';




function List(props){

    return(
        <ul className='tasks'>
            {props.items.map((item)=>{return <ListItem key={item.id} item={item} onDone={props.onDone} onItemDeleted={props.onItemDeleted}></ListItem>})}
        </ul>
    );

}

export default List;