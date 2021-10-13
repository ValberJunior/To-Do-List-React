import React, { useEffect, useState } from 'react'
import './Todo.css';
import List from './components/List.js';
import TodoForm from './components/TodoForm.js';
// import Item from './components/Item.js';
import Modal from './components/Modal';
import Lottie from 'react-lottie';
import animationData from './components/animation/73296-time-management.json'

import { createStore } from 'redux';
import { Provider } from 'react-redux';


import listReducer from './reducers/listReducer';


const store = createStore(listReducer);

const SAVED_ITEMS = 'savedItems';

function App(){

    //useState

    const [showModal, setShowModal] = useState(false);

    const [animationState, setAnimationState] = useState({isStopped: false, isPaused: false});

    //useEffect

    // //reload page
    // useEffect(()=>{
    //     let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
    //     if(savedItems){
    //         setItems(savedItems);
    //     }
    // },[]);

    // //When the list is updated
    // useEffect(()=>{
    //     localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
    // },[items]);

    //animation
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    
    function onHideModal(event){

        let target = event.target;

        if(target.id === 'modal'){
            setShowModal(false);
        }
        console.log(target);

    }

    return(
        <div className='content'>

            <Provider store={store}>
                <header className='header'><h1 className='title'>Task List</h1><button className='btn' onClick={()=>{ setShowModal(true)}}><img className='icon' alt='add' src='./assets/add.png'></img></button></header>
                

                    <div className='container'>
                    
                    <List/>

                    <Lottie options={defaultOptions}
                    height={700}
                    width={600}
                    isStopped={animationState.isStopped}
                    isPaused={animationState.isPaused}/>
                    

                    <Modal show={showModal} onHideModal={onHideModal}>  <TodoForm onHideModal={onHideModal}> </TodoForm> </Modal>
                    </div>
           

                    <footer className="footer">

                        <a href="https://github.com/ValberJunior"><img className='icon' alt='github' src='./assets/github.png'/></a>
                        <a href="https://www.linkedin.com/in/valber-junior-238217b4/"><img className='icon' alt='linkedin' src='./assets/linkedin.png'/></a>

                    </footer>
            </Provider>

        </div>
    );

}


export default App;
