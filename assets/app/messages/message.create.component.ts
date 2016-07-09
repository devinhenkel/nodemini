import {Component} from "@angular/core";
import {Message} from "./message";
import {MessageService} from "./message.service";

@Component ({
  moduleId: module.id,
  selector: 'my-message-create',
  templateUrl: 'message.create.template.html'

})
export class MessageCreateComponent {

  constructor(private _messageService: MessageService) {}

  onCreate(content: string) {
    const message:Message = new Message(content, null, 'Dummy');
    this._messageService.addMessage(message);
  }
}
