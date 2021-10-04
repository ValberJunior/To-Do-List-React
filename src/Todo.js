import React, { useEffect, useState } from 'react'
import './Todo.css';
import List from './components/List.js';
import TodoForm from './components/TodoForm.js';
import Item from './components/Item.js';

const SAVED_ITEMS = 'savedItems';

function Todo(){

    //useState
   
    const [items, setItems] = useState([]);

    //useEffect

    //reload page
    useEffect(()=>{
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
        if(savedItems){
            setItems(savedItems);
        }
    },[]);

    //Quando a lista é atualizada
    useEffect(()=>{
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
    },[items]);

    function onAddItem(text){
        let it = new Item(text);
        it.id = items.length + Math.random() * 1000;
        setItems([...items, it]);
    }
  
    function onItemDeleted(item){

        let filteredItems = items.filter(it => it.id!==item.id);
        
        setItems(filteredItems);
    }

    function onDone(item){
        let updatedItems = items.map(it =>{
            if(it.id === item.id){
                it.done = !it.done;
            }
            return it;
        })

        setItems(updatedItems);
    }

    return(
        <div className='container'>
        <header className='header'><h1>Todo</h1><button className='btn'><img className='icon' alt='add' src='./assets/add.png'></img></button></header>
        
        {/* <TodoForm onAddItem={onAddItem}></TodoForm> */}

        <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>


        </div>
    );

}


export default Todo;
