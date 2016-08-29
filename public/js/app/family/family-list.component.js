"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var relationship_component_1 = require("./relationship.component");
var family_service_1 = require("./family.service");
var FamilyListComponent = (function () {
    function FamilyListComponent(_familyService) {
        this._familyService = _familyService;
        this.members = [];
    }
    FamilyListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._familyService.getAll()
            .subscribe(function (members) {
            //console.log(members);
            _this.members = members;
            //this._familyService.members = members;
            console.log(_this.members);
        });
    };
    FamilyListComponent = __decorate([
        core_1.Component({
            selector: 'my-family',
            template: "\n          <div class=\"row spacing\" *ngFor=\"let member of members\">\n          <section class=\"col-md-8 col-md-offset-2\">\n            <article class=\"panel panel-default\">\n              <my-member><div class=\"panel-body\">{{member[\"x.firstname\"]}} {{member[\"x.lastname\"]}}</div></my-member>\n            </article>\n          </section>\n        </div>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.Routes([
            { path: '/relationship', component: relationship_component_1.RelationshipComponent }
        ]), 
        __metadata('design:paramtypes', [family_service_1.FamilyService])
    ], FamilyListComponent);
    return FamilyListComponent;
}());
exports.FamilyListComponent = FamilyListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhbWlseS9mYW1pbHktbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCx1QkFBMEMsaUJBQWlCLENBQUMsQ0FBQTtBQUU1RCx1Q0FBc0MsMEJBQTBCLENBQUMsQ0FBQTtBQUNqRSwrQkFBOEIsa0JBQWtCLENBQUMsQ0FBQTtBQWtCakQ7SUFDRSw2QkFBb0IsY0FBNkI7UUFBN0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFFakQsWUFBTyxHQUFHLEVBQUUsQ0FBQztJQUZ1QyxDQUFDO0lBSXJELHNDQUFRLEdBQVI7UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFO2FBQ3pCLFNBQVMsQ0FDUixVQUFBLE9BQU87WUFDTCx1QkFBdUI7WUFDdkIsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDdkIsd0NBQXdDO1lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQztJQS9CSDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsd1hBUVQ7WUFDRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztTQUNsQyxDQUFDO1FBQ0QsZUFBTSxDQUFDO1lBQ0osRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSw4Q0FBcUIsRUFBQztTQUM1RCxDQUFDOzsyQkFBQTtJQWlCRiwwQkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlksMkJBQW1CLHNCQWdCL0IsQ0FBQSIsImZpbGUiOiJmYW1pbHkvZmFtaWx5LWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzLCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgUmVsYXRpb25zaGlwQ29tcG9uZW50IH0gZnJvbSBcIi4vcmVsYXRpb25zaGlwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRmFtaWx5U2VydmljZSB9IGZyb20gXCIuL2ZhbWlseS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktZmFtaWx5JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgc3BhY2luZ1wiICpuZ0Zvcj1cImxldCBtZW1iZXIgb2YgbWVtYmVyc1wiPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgPG15LW1lbWJlcj48ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPnt7bWVtYmVyW1wieC5maXJzdG5hbWVcIl19fSB7e21lbWJlcltcIngubGFzdG5hbWVcIl19fTwvZGl2PjwvbXktbWVtYmVyPlxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuQFJvdXRlcyhbXG4gICAge3BhdGg6ICcvcmVsYXRpb25zaGlwJywgY29tcG9uZW50OiBSZWxhdGlvbnNoaXBDb21wb25lbnR9XG5dKVxuZXhwb3J0IGNsYXNzIEZhbWlseUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYW1pbHlTZXJ2aWNlOiBGYW1pbHlTZXJ2aWNlKSB7fVxuXG4gIG1lbWJlcnMgPSBbXTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICAgIHRoaXMuX2ZhbWlseVNlcnZpY2UuZ2V0QWxsKClcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICBtZW1iZXJzID0+IHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cobWVtYmVycyk7XG4gICAgICAgICAgICB0aGlzLm1lbWJlcnMgPSBtZW1iZXJzO1xuICAgICAgICAgICAgLy90aGlzLl9mYW1pbHlTZXJ2aWNlLm1lbWJlcnMgPSBtZW1iZXJzO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5tZW1iZXJzKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
