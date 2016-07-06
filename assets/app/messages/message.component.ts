import {Component} from "@angular/core"
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
  message:Message = new Message('What up, D Dogg Diggity Dogg Daddy Daddy Dogg Dogg?', null, 'Devin');
}
