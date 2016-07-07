import {Component, Input, Output, EventEmitter} from "@angular/core"
import {Message} from "./message"

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

  onClick() {
    this.editClick.emit('Flap doodle! You got a lot of nerve!');
  }
}
