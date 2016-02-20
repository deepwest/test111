import { allMessagesList } from './messages';

//export var ALLMESSAGES: messages[] = [
//        {mainMessage: "mainMessage", title: "Mr. Nice", id:1},
//        {mainMessage: "mainMessage", title: "Narco", id:2}
//];


//Не могу вытянуть с базы даных
var list = new Firebase("https://radiant-torch-8468.firebaseio.com/messager");
var allArr = [];
list.on('child_added', function(snapshot) {
        ALLMESSAGES: messages.push(snapshot.val());
        //allArr = snapshot.val();
})
console.log(allArr);
export var ALLMESSAGES: messages[];

