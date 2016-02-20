System.register([], function(exports_1) {
    var list, allArr, ALLMESSAGES;
    return {
        setters:[],
        execute: function() {
            //export var ALLMESSAGES: messages[] = [
            //        {mainMessage: "mainMessage", title: "Mr. Nice", id:1},
            //        {mainMessage: "mainMessage", title: "Narco", id:2}
            //];
            //Не могу вытянуть с базы даных
            list = new Firebase("https://radiant-torch-8468.firebaseio.com/messager");
            allArr = [];
            list.on('child_added', function (snapshot) {
                ALLMESSAGES: messages.push(snapshot.val());
                //allArr = snapshot.val();
            });
            console.log(allArr);
        }
    }
});
//# sourceMappingURL=mock-messages.js.map