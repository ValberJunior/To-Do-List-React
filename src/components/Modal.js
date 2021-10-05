import React, { useState } from 'react';
import Card from './Card';

function Modal(props){

    const [show, setShow] = useState(true);



    return(
        <div id='modal' onClick={props.onHideModal} className={props.show ? "modal" : "modal hideModal"}>

            <Card className='card-modal'>
                {props.children}
            </Card>

        </div>
    );

}

export default Modal;