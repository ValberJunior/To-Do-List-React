import React, { useState } from 'react';
// import Card from './Card';
import Lottie from 'react-lottie';
import animationData from './animation/25548-girl-on-the-tablet.json';


function Modal(props){

    const [show, setShow] = useState(true);
    const [animationState, setAnimationState] = useState({isStopped: false, isPaused: false});

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };



    return(
        <div id='modal' onClick={props.onHideModal} className={props.show ? "modal" : "modal hideModal"}>
            {/* <Card className='card-modal'> */}
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
             
            {/* </Card> */}

        </div>
    );

}

export default Modal;