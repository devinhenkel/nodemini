import { Component, OnInit } from "@angular/core";

import { RelationshipService } from "./relationship.service";

@Component({
    selector: 'my-member',
    template: `
        <h1>Relationships</h1>
        <div class="row spacing" *ngFor="let member of members">
          <section class="col-md-8 col-md-offset-2">
            <article class="panel panel-default">
              <my-member><div class="panel-body">{{member["x.firstname"]}} {{member["x.lastname"]}}</div></my-member>
            </article>
          </section>
        </div>
    `,
    directives: []
})
export class RelationshipComponent implements OnInit {
  constructor(private _relationshipService: RelationshipService) {}

  members = [];

  ngOnInit() {
      this._relationshipService.getAll()
        .subscribe(
          members => {
            //console.log(members);
            this.members = members;
            console.log(this.members);
          }
        );
  }
}
