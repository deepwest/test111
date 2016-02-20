import { Component, OnInit } from 'angular2/core';
//import {RouteParams} from 'angular2/router';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';


import { allMessagesList } from '../mainView/messages';
import { MessagesService } from '../mainView/messages.service';

@Component({
    selector: 'single-detail',
    templateUrl: 'app/singleView/single.html',
    inputs: ['message'],
    providers: [
        ROUTER_PROVIDERS,
        MessagesService,
        //RouteParams
    ]
})

export class SingleViewComponent implements OnInit {

    message:allMessagesList;

    constructor(private _messagesService:MessagesService
        //, private _routeParams:RouteParams
    ) {
    }

    //при инициализации достаем одно сообщение для просмотра
    ngOnInit() {
        //let id = +this._routeParams.get('id');
        this._messagesService.getOneMessage(1)
            .then(message => this.message = message);
    }
}