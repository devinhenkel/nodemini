import { Component } from "@angular/core";
import {Routes, ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'my-header',
  templateUrl: 'header.template.html',
  styles: [`
    header {
      margin-bottom: 20px;
    }
    ul {
      text-align: center;
    }
    li {
      float: none;
      display: inline-block;
    }
  `],
  directives: [ROUTER_DIRECTIVES]

})
export class HeaderComponent {

}
