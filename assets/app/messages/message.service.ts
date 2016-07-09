import {Message} from "./message";
export class MessageService {
  messages:Message[] = [];

  getMessages() {
    return this.messages;
  }

  addMessage(message: Message) {
    this.messages.push(message);
    console.log(this.messages);
  }

  editMessage(message: Message) {
    this.messages[this.messages.indexOf(message)] = new Message('Edited message', null, 'Dummy');
  }

  deleteMessage(message: Message) {
    this.messages.splice(this.messages.indexOf(message), 1);
  }


}
