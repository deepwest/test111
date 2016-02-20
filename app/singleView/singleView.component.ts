import { Component, OnInit } from 'angular2/core';
//import {RouteParams} from 'angular2/router'; //Почемуто матерится когда я его подключаю. Без него не могу передать правильную айдишку. Причины мне не понятны.


import { allMessagesList } from '../mainView/messages';
import { MessagesService } from '../mainView/messages.service';

@Component({
    selector: 'single-detail',
    templateUrl: 'app/singleView/single.html',
    inputs: ['message'],
    providers: [
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
    //TODO Мучился оч долго чтоб заставить заработуть тут RouteParams пока безуспешно
    ngOnInit() {
        //let id = +this._routeParams.get('id');
        this._messagesService.getOneMessage(5)//сменить 5 на id
            .then(message => this.message = message);
    }
}