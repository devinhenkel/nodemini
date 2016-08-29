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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require('rxjs/Rx');
var Observable_1 = require("rxjs/Observable");
var RelationshipService = (function () {
    function RelationshipService(_http) {
        this._http = _http;
        this.members = [];
    }
    RelationshipService.prototype.getAll = function () {
        return this._http.get('/familyapi/cousins/Ellie')
            .map(function (response) {
            //console.log("service: "+response._body);
            var data = response.json();
            var members = data;
            return members;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error); });
    };
    RelationshipService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RelationshipService);
    return RelationshipService;
}());
exports.RelationshipService = RelationshipService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhbWlseS9yZWxhdGlvbnNoaXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThCLGVBQWUsQ0FBQyxDQUFBO0FBQzlDLHFCQUF5QyxlQUFlLENBQUMsQ0FBQTtBQUN6RCxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBQ2pCLDJCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBRzdDO0lBRUksNkJBQXFCLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBRGhDLFlBQU8sR0FBRyxFQUFFLENBQUM7SUFDc0IsQ0FBQztJQUVwQyxvQ0FBTSxHQUFOO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDO2FBQzlDLEdBQUcsQ0FBQyxVQUFBLFFBQVE7WUFDWCwwQ0FBMEM7WUFDMUMsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzdCLElBQUksT0FBTyxHQUFVLElBQUksQ0FBQztZQUUxQixNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ2pCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQWZMO1FBQUMsaUJBQVUsRUFBRTs7MkJBQUE7SUFnQmIsMEJBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZZLDJCQUFtQixzQkFlL0IsQ0FBQSIsImZpbGUiOiJmYW1pbHkvcmVsYXRpb25zaGlwLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgJ3J4anMvUngnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlbGF0aW9uc2hpcFNlcnZpY2Uge1xuICAgIG1lbWJlcnMgPSBbXTtcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaHR0cDogSHR0cCkge31cblxuICAgIGdldEFsbCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnL2ZhbWlseWFwaS9jb3VzaW5zL0VsbGllJylcbiAgICAgICAgLm1hcChyZXNwb25zZSA9PiB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcInNlcnZpY2U6IFwiK3Jlc3BvbnNlLl9ib2R5KTtcbiAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgIGxldCBtZW1iZXJzOiBhbnlbXSA9IGRhdGE7XG5cbiAgICAgICAgICByZXR1cm4gbWVtYmVycztcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IpKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
