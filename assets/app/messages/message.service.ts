import { Message } from "./message";
import { Http, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class MessageService {
    messages: Message[] = [];
    messageIsEditable = new EventEmitter<Message>();

    constructor (private _http: Http) {}

    addMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this._http.post('/message', body, {headers: headers})
          .map(response => {
            const data = response.json().obj;
            let message = new Message(data.content, data._id, 'Flubby', null);
            return message;
          })
          .catch(error => Observable.throw(error));
    }

    getMessages() {
        return this._http.get('/message')
          .map(response => {
            const data = response.json().obj;
            let objs: any[] = [];
            for (let i = 0; i < data.length; i++) {
              let message = new Message(data[i].content, data[i]._id, 'Flubby', null);
              objs.push(message);
            };
            return objs;
          })
          .catch(error => Observable.throw(error));
    }

    editMessage(message: Message) {
        //this.messages[this.messages.indexOf(message)] = new Message('Edited', null, 'Dummy');
        this.messageIsEditable.emit(message);
    }

    updateMessage(message: Message){
      const body = JSON.stringify(message);
      const headers = new Headers({'Content-Type': 'application/json'});
      //this.messages[this.messages.indexOf(message)] = new Message('Edited', null, 'Dummy');
      return this._http.patch('/message/'+message.messageId, body, {headers: headers})
        .map(response => response.json())
        .catch(error => Observable.throw(error));
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
        return this._http.delete('/message/'+message.messageId)
          .map(response => response.json())
          .catch(error => Observable.throw(error));
    }
}
