import React, { useEffect, useState } from 'react'
import './Todo.css';
import List from './components/List.js';
import TodoForm from './components/TodoForm.js';
import Item from './components/Item.js';
import Modal from './components/Modal';
import Lottie from 'react-lottie';
import animationData from './components/animation/73296-time-management.json'

const SAVED_ITEMS = 'savedItems';

function Todo(){

    //useState
   
    const [items, setItems] = useState([]);

    const [showModal, setShowModal] = useState(false);

    const [animationState, setAnimationState] = useState({isStopped: false, isPaused: false});

    //useEffect

    //reload page
    useEffect(()=>{
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
        if(savedItems){
            setItems(savedItems);
        }
    },[]);

    //When the list is updated
    useEffect(()=>{
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
    },[items]);

    //animation
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    function onAddItem(text){
        let it = new Item(text);
        it.id = items.length + Math.random() * 1000;
        setItems([...items, it]);
        setShowModal(false);
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

    function onHideModal(event){

        let target = event.target;

        if(target.id === 'modal'){
            setShowModal(false);
        }
        console.log(target);

    }

    return(
        <div className='content'>
            <header className='header'><h1 className='title'>Task List</h1><button className='btn' onClick={()=>{ setShowModal(true)}}><img className='icon' alt='add' src='./assets/add.png'></img></button>
            </header>

                <div className='container'>
                
                <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>

                <Lottie options={defaultOptions}
                height={700}
                width={600}
                isStopped={animationState.isStopped}
                isPaused={animationState.isPaused}/>
                

                <Modal show={showModal} onHideModal={onHideModal}>  <TodoForm onAddItem={onAddItem}></TodoForm> </Modal>
                </div>
        
        <footer className="footer">

            <a href="https://github.com/ValberJunior"><img className='icon' alt='github' src='./assets/github.png'/></a>
            <a href="https://www.linkedin.com/in/valber-junior-238217b4/"><img className='icon' alt='linkedin' src='./assets/linkedin.png'/></a>

        </footer>
        </div>
    );

}


export default Todo;
