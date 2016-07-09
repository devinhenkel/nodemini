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

  deleteMessage(message: Message) {
    this.messages.splice(this.messages.indexOf(message), 1);
  }


}
