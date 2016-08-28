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
var FamilyService = (function () {
    function FamilyService(_http) {
        this._http = _http;
        this.members = [];
    }
    FamilyService.prototype.getAll = function () {
        return this._http.get('/familyapi')
            .map(function (response) {
            //console.log("service: "+response._body);
            var data = response.json();
            var members = data;
            return members;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error); });
    };
    FamilyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FamilyService);
    return FamilyService;
}());
exports.FamilyService = FamilyService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhbWlseS9mYW1pbHkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThCLGVBQWUsQ0FBQyxDQUFBO0FBQzlDLHFCQUF5QyxlQUFlLENBQUMsQ0FBQTtBQUN6RCxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBQ2pCLDJCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBRzdDO0lBRUksdUJBQXFCLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBRGhDLFlBQU8sR0FBRyxFQUFFLENBQUM7SUFDc0IsQ0FBQztJQUVwQyw4QkFBTSxHQUFOO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQzthQUNoQyxHQUFHLENBQUMsVUFBQSxRQUFRO1lBQ1gsMENBQTBDO1lBQzFDLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM3QixJQUFJLE9BQU8sR0FBVSxJQUFJLENBQUM7WUFFMUIsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNqQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFmTDtRQUFDLGlCQUFVLEVBQUU7O3FCQUFBO0lBZ0JiLG9CQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSxxQkFBYSxnQkFlekIsQ0FBQSIsImZpbGUiOiJmYW1pbHkvZmFtaWx5LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgJ3J4anMvUngnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhbWlseVNlcnZpY2Uge1xuICAgIG1lbWJlcnMgPSBbXTtcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaHR0cDogSHR0cCkge31cblxuICAgIGdldEFsbCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnL2ZhbWlseWFwaScpXG4gICAgICAgIC5tYXAocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJzZXJ2aWNlOiBcIityZXNwb25zZS5fYm9keSk7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICBsZXQgbWVtYmVyczogYW55W10gPSBkYXRhO1xuXG4gICAgICAgICAgcmV0dXJuIG1lbWJlcnM7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yKSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
