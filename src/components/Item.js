class Item {

 //variável de classe (que nao pertence a objeto, mas a classe)
 static lastId = 0;   

constructor(text){
    this.id = Item.lastId++;
    this.text = text;
    this.done = false;
}


}


export default Item;