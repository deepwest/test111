System.register(['./mock-messages'], function(exports_1) {
    var mock_messages_1;
    var MessagesService;
    return {
        setters:[
            function (mock_messages_1_1) {
                mock_messages_1 = mock_messages_1_1;
            }],
        execute: function() {
            MessagesService = (function () {
                function MessagesService() {
                }
                //Достает все сообщения с базы даных
                MessagesService.prototype.getMessages = function () {
                    return Promise.resolve(mock_messages_1.ALLMESSAGES);
                };
                //Достает 1 сообщение по айдишке
                MessagesService.prototype.getOneMessage = function (id) {
                    return Promise.resolve(mock_messages_1.ALLMESSAGES).then(function (messages) { return messages.filter(function (messages) { return messages.id === id; })[0]; });
                };
                return MessagesService;
            })();
            exports_1("MessagesService", MessagesService);
        }
    }
});
//# sourceMappingURL=messages.service.js.map