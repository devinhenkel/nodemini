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
var relationship_service_1 = require("./relationship.service");
var RelationshipComponent = (function () {
    function RelationshipComponent(_relationshipService) {
        this._relationshipService = _relationshipService;
        this.members = [];
    }
    RelationshipComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._relationshipService.getAll()
            .subscribe(function (members) {
            //console.log(members);
            _this.members = members;
            console.log(_this.members);
        });
    };
    RelationshipComponent = __decorate([
        core_1.Component({
            selector: 'my-member',
            template: "\n        <h1>Relationships</h1>\n        <div class=\"row spacing\" *ngFor=\"let member of members\">\n          <section class=\"col-md-8 col-md-offset-2\">\n            <article class=\"panel panel-default\">\n              <my-member><div class=\"panel-body\">{{member[\"x.firstname\"]}} {{member[\"x.lastname\"]}}</div></my-member>\n            </article>\n          </section>\n        </div>\n    ",
            directives: []
        }), 
        __metadata('design:paramtypes', [relationship_service_1.RelationshipService])
    ], RelationshipComponent);
    return RelationshipComponent;
}());
exports.RelationshipComponent = RelationshipComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhbWlseS9yZWxhdGlvbnNoaXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFFbEQscUNBQW9DLHdCQUF3QixDQUFDLENBQUE7QUFnQjdEO0lBQ0UsK0JBQW9CLG9CQUF5QztRQUF6Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO1FBRTdELFlBQU8sR0FBRyxFQUFFLENBQUM7SUFGbUQsQ0FBQztJQUlqRSx3Q0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFO2FBQy9CLFNBQVMsQ0FDUixVQUFBLE9BQU87WUFDTCx1QkFBdUI7WUFDdkIsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUNGLENBQUM7SUFDUixDQUFDO0lBNUJIO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxzWkFTVDtZQUNELFVBQVUsRUFBRSxFQUFFO1NBQ2pCLENBQUM7OzZCQUFBO0lBZ0JGLDRCQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSw2QkFBcUIsd0JBZWpDLENBQUEiLCJmaWxlIjoiZmFtaWx5L3JlbGF0aW9uc2hpcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFJlbGF0aW9uc2hpcFNlcnZpY2UgfSBmcm9tIFwiLi9yZWxhdGlvbnNoaXAuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LW1lbWJlcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGgxPlJlbGF0aW9uc2hpcHM8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHNwYWNpbmdcIiAqbmdGb3I9XCJsZXQgbWVtYmVyIG9mIG1lbWJlcnNcIj5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgIDxteS1tZW1iZXI+PGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj57e21lbWJlcltcInguZmlyc3RuYW1lXCJdfX0ge3ttZW1iZXJbXCJ4Lmxhc3RuYW1lXCJdfX08L2Rpdj48L215LW1lbWJlcj5cbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW11cbn0pXG5leHBvcnQgY2xhc3MgUmVsYXRpb25zaGlwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVsYXRpb25zaGlwU2VydmljZTogUmVsYXRpb25zaGlwU2VydmljZSkge31cblxuICBtZW1iZXJzID0gW107XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgICB0aGlzLl9yZWxhdGlvbnNoaXBTZXJ2aWNlLmdldEFsbCgpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgbWVtYmVycyA9PiB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKG1lbWJlcnMpO1xuICAgICAgICAgICAgdGhpcy5tZW1iZXJzID0gbWVtYmVycztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubWVtYmVycyk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
