import { allMessagesList } from './messages';
//ПОдключаем к базе даных и вытягиваем весь список сообщений
var list = new Firebase("https://radiant-torch-8468.firebaseio.com/messager");
var allArr = [];
list.on('child_added', function(snapshot) {
         allArr.push(snapshot.val());
});
export var ALLMESSAGES: messages[]=allArr;

