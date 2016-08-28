import { Component, OnInit } from "@angular/core";


import { FamilyService } from "./family.service";

@Component({
    selector: 'my-family',
    template: `
        <div class="row spacing" *ngFor="let member of members">
          <section class="col-md-8 col-md-offset-2">
            <article class="panel panel-default">
              <my-member>{{member["x.firstname"]}} {{member["x.lastname"]}}</my-member>
            </article>
          </section>
        </div>
    `,
    directives: []
})
export class FamilyComponent implements OnInit {
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
