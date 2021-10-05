import React, { useState } from 'react';



function TodoForm(props){

    // modificar estado
    const [text, setText] = useState('');

    function handleChange(event){   //Para conseguir receber um item de um componente filho para o componente pai, precisei usar esse callback

        let textInput = event.target.value;
        setText(textInput);

    };

      function addItem(event){

            event.preventDefault(); //Evitar o comportamento default do button dentro do formulário
            
            //Condicional para add items
            if(!text){
                alert('Insira uma tarefa');
            } else{

            //Inserir a lista
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