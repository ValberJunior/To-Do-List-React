import React from 'react';
import { useDispatch } from 'react-redux';
import Card from './Card';
import { deleteItem, changeDone } from '../actions/listAction'


function DoneImg(props){

    if(props.done){
        return (<img className='icon' alt='done' src='./assets/done.png'></img>)
    }else{
        return (<img className='icon' alt='undone' src='./assets/undone.png'></img>)
    }
}


function ListItem(props){

    const dispatch = useDispatch();

    return(
                    <li>
                   <Card className={props.item.done ? "done item" : "item"}>
                    {props.item.text}
                    <div className='btn-group'>
                        <button className='btn' onClick={()=>{dispatch(changeDone(props.item.id))}}><DoneImg done={props.item.done}></DoneImg></button>
                        <button className='btn' onClick={()=>{dispatch(deleteItem(props.item.id))}}><img className='icon' alt='delete' src='./assets/trash.png'></img></button>
                    </div>
                    </Card>
                    </li>
    
    );

}

export default ListItem;