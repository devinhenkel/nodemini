import {Component} from "@angular/core";
import {Message} from "./message";

@Component ({
  moduleId: module.id,
  selector: 'my-message-create',
  templateUrl: 'message.create.template.html'

})
export class MessageCreateComponent {
  onCreate(content: string) {
    const message:Message = new Message(content, null, 'Dummy');
    console.log(message);
  }
}
