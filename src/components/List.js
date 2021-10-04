import React from 'react';


function DoneImg(props){

    if(props.done){
        return (<img alt='done' src='./assets/done.png'></img>)
    }else{
        return (<img alt='undone' src='./assets/undone.png'></img>)
    }
}


function List(props){

    return(
        <ul>
            {props.items.map((item)=>{
                return <li className={item.done ? "done item" : "item"} key={item.id}>
                    {item.text}
                    <div>
                        <button className='btn' onClick={()=>{props.onDone(item)}}><DoneImg done={item.done}></DoneImg></button>
                        <button className='btn' onClick={()=>{ props.onItemDeleted(item)}}><img alt='delete' src='./assets/trash.png'></img></button>
                    </div>
                    </li>})}
        </ul>
    );

}

export default List;