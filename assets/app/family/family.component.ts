import { Component } from "@angular/core";
import { Routes, ROUTER_DIRECTIVES } from "@angular/router";

import { FamilyListComponent } from "./family-list.component";
import { RelationshipComponent } from "./relationship.component";
@Component({
    selector: 'my-auth',
    template: `
        <header class="row spacing">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-tabs">
                    <li><a [routerLink]="['./list']">List</a></li>
                    <li><a [routerLink]="['./relationship']">Relationship</a></li>
                </ul>
            </nav>
        </header>
        <div class="row spacing">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    styles: [`
        .router-link-active {
            color: #555;
            cursor: default;
            background-color: #fff;
            border: 1px solid #ddd;
            border-bottom-color: transparent;
        }
    `]
})
@Routes([
    {path: '/list', component: FamilyListComponent},
    {path: '/relationship', component: RelationshipComponent}
])
export class FamilyComponent {

}
