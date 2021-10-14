import React, { useState } from 'react'
import './Todo.css';
import List from './components/List.js';
import TodoForm from './components/TodoForm.js';
import Modal from './components/Modal';
import Lottie from 'react-lottie';
import animationData from './components/animation/73296-time-management.json'

import { createStore } from 'redux';
import { Provider } from 'react-redux';


import listReducer from './reducers/listReducer';


const SAVED_ITEMS = 'savedItems';

//PersistState
function persistState(state){
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(state))
}

function loadState(){
    const actualState = localStorage.getItem(SAVED_ITEMS);

    if (actualState){
        return JSON.parse(actualState)
    }else{
        return [];
    }
}

//store
const store = createStore(listReducer, loadState());

store.subscribe(()=>{
    persistState(store.getState())
})

function App(){

    //useState

    const [showModal, setShowModal] = useState(false);

    const [animationState] = useState({isStopped: false, isPaused: false});



    //animation
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    
      function onHideModal(){
          setShowModal(false);
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
                    

                    <Modal show={showModal} onHideModal={onHideModal}>  <TodoForm onHideModal={onHideModal} /> </Modal>
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
