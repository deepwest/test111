System.register(['angular2/core', 'angular2/router', './messages.service', '../singleView/singleView.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, router_2, messages_service_1, singleView_component_1;
    var AllMsgComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (messages_service_1_1) {
                messages_service_1 = messages_service_1_1;
            },
            function (singleView_component_1_1) {
                singleView_component_1 = singleView_component_1_1;
            }],
        execute: function() {
            //Привязываем тег all-msg у вьюхе прописуем путь и подключем маршрутизатор и сервис для вытягивания даных
            AllMsgComponent = (function () {
                //инициализируем сервис в переменную для подальшего использования
                function AllMsgComponent(_messageService, _router) {
                    this._messageService = _messageService;
                    this._router = _router;
                    this.titleName = '';
                    this.messageAdded = '';
                    this.id = '';
                }
                //Функция наполняет переменную messages даными из таблици при запуске
                AllMsgComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._messageService.getMessages()
                        .then(function (messages) { return _this.messages = messages; });
                };
                //функция записывает введенные даные в таблицу
                AllMsgComponent.prototype.saveData = function (titleName, messageAdded, id) {
                    var date = new Date();
                    var msgList = new Firebase("https://radiant-torch-8468.firebaseio.com/messager");
                    msgList.push({ title: titleName, id: id, mainMessage: messageAdded, dates: date.toString() });
                    this.titleName = '';
                    this.messageAdded = '';
                    this.id = '';
                };
                //аписываем выбраный месадж в переменную
                AllMsgComponent.prototype.onSelect = function (Message) {
                    this.selectedMessage = Message;
                };
                //отправляем айдишку по урл
                AllMsgComponent.prototype.gotoDetail = function () {
                    this._router.navigate(['MessageDetail', { id: this.selectedMessage.id }]);
                };
                //TODO Функция будет использована чтоб вернутся назад
                AllMsgComponent.prototype.goBack = function () {
                    window.history.back();
                };
                AllMsgComponent = __decorate([
                    core_1.Component({
                        selector: 'all-msg',
                        templateUrl: 'app/mainView/allMsg.html',
                        directives: [singleView_component_1.SingleViewComponent],
                        styleUrls: ['app/mainView/mainPage.component.css'],
                        providers: [
                            router_2.ROUTER_PROVIDERS,
                            messages_service_1.MessagesService
                        ]
                    }), 
                    __metadata('design:paramtypes', [messages_service_1.MessagesService, router_1.Router])
                ], AllMsgComponent);
                return AllMsgComponent;
            })();
            exports_1("AllMsgComponent", AllMsgComponent);
        }
    }
});
//# sourceMappingURL=allMsg.component.js.map