import {Component, Input, Output, EventEmitter} from "@angular/core"
import {Message} from "./message"
import {MessageService} from "./message.service"

@Component({
  moduleId: module.id,
  selector: 'my-message',
  templateUrl: 'message.template.html',
  styles: [`
    .author {
      display: inline-block;
      font-style: italic;
      font-size: 12px;
      width: 80%;
    }
    .config {
      display: inline-block;
      text-align: right;
      font-size: 12px;
      width: 19%;
    }
  `]
})
export class MessageComponent {
  @Input() message:Message;
  @Output() editClick = new EventEmitter<string>();

  constructor (private _messageService: MessageService) {}

  onEdit() {
    this._messageService.editMessage(this.message);
  }

  onDelete() {
    this._messageService.deleteMessage(this.message);
  }
}
