import { Component, OnInit } from "@angular/core";
import { Routes, ROUTER_DIRECTIVES } from "@angular/router";

import { RelationshipComponent } from "./relationship.component";
import { FamilyService } from "./family.service";

@Component({
    selector: 'my-family',
    template: `
          <div class="row spacing" *ngFor="let member of members">
          <section class="col-md-8 col-md-offset-2">
            <article class="panel panel-default">
              <my-member><div class="panel-body">{{member["x.firstname"]}} {{member["x.lastname"]}}</div></my-member>
            </article>
          </section>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    {path: '/relationship', component: RelationshipComponent}
])
export class FamilyListComponent implements OnInit {
  constructor(private _familyService: FamilyService) {}

  members = [];

  ngOnInit() {
      this._familyService.getAll()
        .subscribe(
          members => {
            //console.log(members);
            this.members = members;
            //this._familyService.members = members;
            console.log(this.members);
          }
        );
  }
}
