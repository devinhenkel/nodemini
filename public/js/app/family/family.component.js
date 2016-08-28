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
var family_service_1 = require("./family.service");
var FamilyComponent = (function () {
    function FamilyComponent(_familyService) {
        this._familyService = _familyService;
        this.members = [];
    }
    FamilyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._familyService.getAll()
            .subscribe(function (members) {
            //console.log(members);
            _this.members = members;
            //this._familyService.members = members;
            console.log(_this.members);
        });
    };
    FamilyComponent = __decorate([
        core_1.Component({
            selector: 'my-family',
            template: "\n        <div class=\"row spacing\" *ngFor=\"let member of members\">\n          <section class=\"col-md-8 col-md-offset-2\">\n            <article class=\"panel panel-default\">\n              <my-member>{{member[\"x.firstname\"]}} {{member[\"x.lastname\"]}}</my-member>\n            </article>\n          </section>\n        </div>\n    ",
            directives: []
        }), 
        __metadata('design:paramtypes', [family_service_1.FamilyService])
    ], FamilyComponent);
    return FamilyComponent;
}());
exports.FamilyComponent = FamilyComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhbWlseS9mYW1pbHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFHbEQsK0JBQThCLGtCQUFrQixDQUFDLENBQUE7QUFlakQ7SUFDRSx5QkFBb0IsY0FBNkI7UUFBN0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFFakQsWUFBTyxHQUFHLEVBQUUsQ0FBQztJQUZ1QyxDQUFDO0lBSXJELGtDQUFRLEdBQVI7UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFO2FBQ3pCLFNBQVMsQ0FDUixVQUFBLE9BQU87WUFDTCx1QkFBdUI7WUFDdkIsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDdkIsd0NBQXdDO1lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQztJQTVCSDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsc1ZBUVQ7WUFDRCxVQUFVLEVBQUUsRUFBRTtTQUNqQixDQUFDOzt1QkFBQTtJQWlCRixzQkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlksdUJBQWUsa0JBZ0IzQixDQUFBIiwiZmlsZSI6ImZhbWlseS9mYW1pbHkuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5cbmltcG9ydCB7IEZhbWlseVNlcnZpY2UgfSBmcm9tIFwiLi9mYW1pbHkuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWZhbWlseScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBzcGFjaW5nXCIgKm5nRm9yPVwibGV0IG1lbWJlciBvZiBtZW1iZXJzXCI+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICAgICAgICA8bXktbWVtYmVyPnt7bWVtYmVyW1wieC5maXJzdG5hbWVcIl19fSB7e21lbWJlcltcIngubGFzdG5hbWVcIl19fTwvbXktbWVtYmVyPlxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBGYW1pbHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYW1pbHlTZXJ2aWNlOiBGYW1pbHlTZXJ2aWNlKSB7fVxuXG4gIG1lbWJlcnMgPSBbXTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICAgIHRoaXMuX2ZhbWlseVNlcnZpY2UuZ2V0QWxsKClcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICBtZW1iZXJzID0+IHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cobWVtYmVycyk7XG4gICAgICAgICAgICB0aGlzLm1lbWJlcnMgPSBtZW1iZXJzO1xuICAgICAgICAgICAgLy90aGlzLl9mYW1pbHlTZXJ2aWNlLm1lbWJlcnMgPSBtZW1iZXJzO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5tZW1iZXJzKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
