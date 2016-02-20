import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { allMessagesList } from './messages';
import { MessagesService } from './messages.service';
import { SingleViewComponent } from '../singleView/singleView.component';

//Привязываем тег all-msg у вьюхе прописуем путь и подключем маршрутизатор и сервис для вытягивания даных
@Component({
    selector: 'all-msg',
    templateUrl: 'app/mainView/allMsg.html',
    directives: [SingleViewComponent],
    styleUrls: ['app/mainView/mainPage.component.css'],
    providers:[
        ROUTER_PROVIDERS,
        MessagesService
    ]
})

export class AllMsgComponent implements OnInit {

    messages: allMessagesList;
    selectedMessage: message;
    titleName='';
    messageAdded='';
    id='';

    //инициализируем сервис в переменную для подальшего использования
    constructor(
        private _messageService: MessagesService,
        private _router: Router
    ) { }

    //Функция наполняет переменную messages даными из таблици при запуске
    ngOnInit() {
        this._messageService.getMessages()
            .then(messages => this.messages = messages);
    }

    //функция записывает введенные даные в таблицу
    saveData(titleName, messageAdded, id) {
        var date = new Date();
        var msgList = new Firebase("https://radiant-torch-8468.firebaseio.com/messager");
        msgList.push({title: titleName,id: id, mainMessage: messageAdded, dates: date.toString()});
        this.titleName = '';
        this.messageAdded = '';
        this.id = '';
    }

    //аписываем выбраный месадж в переменную
    onSelect(Message: message) {
        this.selectedMessage = Message;
    }

    //отправляем айдишку по урл
    gotoDetail() {
        this._router.navigate(['MessageDetail', { id: this.selectedMessage.id }]);
    }

    //TODO Функция будет использована чтоб вернутся назад
    goBack() {
        window.history.back();
    }
}