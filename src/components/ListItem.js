import React from 'react';
import Card from './Card';


function DoneImg(props){

    if(props.done){
        return (<img className='icon' alt='done' src='./assets/done.png'></img>)
    }else{
        return (<img className='icon' alt='undone' src='./assets/undone.png'></img>)
    }
}


function ListItem(props){

    return(
                    <li>
                   <Card className={props.item.done ? "done item" : "item"}>
                    {props.item.text}
                    <div className='btn-group'>
                        <button className='btn' onClick={()=>{props.onDone(props.item)}}><DoneImg done={props.item.done}></DoneImg></button>
                        <button className='btn' onClick={()=>{ props.onItemDeleted(props.item)}}><img className='icon' alt='delete' src='./assets/trash.png'></img></button>
                    </div>
                    </Card>
                    </li>
    
    );

}

export default ListItem;