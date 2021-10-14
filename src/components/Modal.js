import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from './animation/25548-girl-on-the-tablet.json';


function Modal(props){

    const [animationState] = useState({isStopped: false, isPaused: false});

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      
      function hideModal(event){

        let target = event.target;

        if(target.id === 'modal'){
           props.onHideModal();
        }
        console.log(target);

    }

    return(
        <div id='modal' onClick={hideModal} className={props.show ? "modal" : "modal hideModal"}>
           
            <div>
                <Lottie options={defaultOptions}
                height={700}
                width={600}
                isStopped={animationState.isStopped}
                isPaused={animationState.isPaused}/>
            </div>
            <div>
            <h2 className='title'>Add a task <br/>to your list</h2>
            {props.children}
            </div>
    

        </div>
    );

}

export default Modal;