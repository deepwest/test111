System.register(['angular2/core', '../mainView/messages.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, messages_service_1;
    var SingleViewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (messages_service_1_1) {
                messages_service_1 = messages_service_1_1;
            }],
        execute: function() {
            SingleViewComponent = (function () {
                function SingleViewComponent(_messagesService) {
                    this._messagesService = _messagesService;
                }
                //при инициализации достаем одно сообщение для просмотра
                //TODO Мучился оч долго чтоб заставить заработуть тут RouteParams пока безуспешно
                SingleViewComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //let id = +this._routeParams.get('id');
                    this._messagesService.getOneMessage(5) //сменить 5 на id
                        .then(function (message) { return _this.message = message; });
                };
                SingleViewComponent = __decorate([
                    core_1.Component({
                        selector: 'single-detail',
                        templateUrl: 'app/singleView/single.html',
                        inputs: ['message'],
                        providers: [
                            messages_service_1.MessagesService,
                        ]
                    }), 
                    __metadata('design:paramtypes', [messages_service_1.MessagesService])
                ], SingleViewComponent);
                return SingleViewComponent;
            })();
            exports_1("SingleViewComponent", SingleViewComponent);
        }
    }
});
//# sourceMappingURL=singleView.component.js.map