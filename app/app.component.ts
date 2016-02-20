import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { AllMsgComponent } from './mainView/allMsg.component';
import { SingleViewComponent } from './singleView/singleView.component';
import { MessagesService } from './mainView/messages.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/mainView/main.html',
    directives: [AllMsgComponent],
    styleUrls: ['app/mainView/mainPage.component.css'],
    providers: [
        ROUTER_PROVIDERS,
        MessagesService
    ]
})

//маршрутизатор
@RouteConfig([
    {
        path: '/detail/:id',
        name: 'MessageDetail',
        component: SingleViewComponent
    }
])

export class AppComponent {
    public titleName = 'Все сообщения';
}
