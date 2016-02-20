System.register([], function(exports_1) {
    var list, allArr, ALLMESSAGES;
    return {
        setters:[],
        execute: function() {
            //ПОдключаем к базе даных и вытягиваем весь список сообщений
            list = new Firebase("https://radiant-torch-8468.firebaseio.com/messager");
            allArr = [];
            list.on('child_added', function (snapshot) {
                allArr.push(snapshot.val());
            });
            exports_1("ALLMESSAGES", ALLMESSAGES = allArr);
        }
    }
});
//# sourceMappingURL=mock-messages.js.map