import Item from '../components/Item';

function addItem(text){

    const item = new Item(text);
    return {type: "ADD_ITEM", payload: item};
}

function deleteItem(id){

return {type: "DELETE_ITEM", payload: id}

}


function changeDone(id){

return {type: "CHANGE_DONE", payload: id}

}

export { addItem, deleteItem, changeDone };