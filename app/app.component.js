System.register(['angular2/core', 'angular2/router', './mainView/allMsg.component', './singleView/singleView.component', './mainView/messages.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, allMsg_component_1, singleView_component_1, messages_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (allMsg_component_1_1) {
                allMsg_component_1 = allMsg_component_1_1;
            },
            function (singleView_component_1_1) {
                singleView_component_1 = singleView_component_1_1;
            },
            function (messages_service_1_1) {
                messages_service_1 = messages_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.titleName = 'Все сообщения';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/mainView/main.html',
                        directives: [allMsg_component_1.AllMsgComponent],
                        styleUrls: ['app/mainView/mainPage.component.css'],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            messages_service_1.MessagesService
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/detail/:id',
                            name: 'MessageDetail',
                            component: singleView_component_1.SingleViewComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map