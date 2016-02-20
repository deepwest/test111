import { allMessagesList } from './messages';
import { ALLMESSAGES } from './mock-messages';

export class MessagesService {

    //Достает все сообщения с базы даных
    getMessages() {
        return Promise.resolve(ALLMESSAGES);
    }

    //Достает 1 сообщение по айдишке
    getOneMessage(id: number) {
        return Promise.resolve(ALLMESSAGES).then(
            messages => messages.filter(messages => messages.id === id)[0]
        );
    }
}