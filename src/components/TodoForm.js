import React, { useState } from 'react';



function TodoForm(props){

    // state
    const [text, setText] = useState('');

    function handleChange(event){   //To be able to receive an item from a child component to the parent component, I needed to use this callback

        let textInput = event.target.value;
        setText(textInput);

    };

      function addItem(event){

            event.preventDefault(); //Avoid the button's default behavior within the form
            
            //Conditional for add items
            if(!text){
                alert('Insira uma tarefa');
            } else{

            //Insert the list
            props.onAddItem(text);
            setText("");

            }
        }



    return(
        <form className='form'>
            <input className='inputTask' onChange={handleChange} type='text' value={text} placeholder={"Add Your Task"}></input>
            <button className='btn' onClick={addItem}><img className='icon' alt='add' src='./assets/add.png'></img></button>
        </form>
    );



}




export default TodoForm;