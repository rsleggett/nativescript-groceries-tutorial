"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ListComponent = (function () {
    function ListComponent() {
        this.groceryList = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.groceryList.push({ name: "Apples" });
        this.groceryList.push({ name: "Bananas" });
        this.groceryList.push({ name: "Oranges" });
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: "list",
        moduleId: module.id,
        templateUrl: "./list.html",
        styleUrls: ["./list-common.css", "./list.css"]
    })
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQVN6RSxJQUFhLGFBQWE7SUFQMUI7UUFRSSxnQkFBVyxHQUFrQixFQUFFLENBQUM7SUFPcEMsQ0FBQztJQUxHLGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQVJZLGFBQWE7SUFQekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsYUFBYTtRQUMxQixTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxZQUFZLENBQUM7S0FDakQsQ0FBQztHQUVXLGFBQWEsQ0FRekI7QUFSWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJsaXN0XCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9saXN0Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9saXN0LWNvbW1vbi5jc3NcIiwgXCIuL2xpc3QuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBncm9jZXJ5TGlzdDogQXJyYXk8T2JqZWN0PiA9IFtdO1xyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuZ3JvY2VyeUxpc3QucHVzaCh7IG5hbWU6IFwiQXBwbGVzXCIgfSk7XHJcbiAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC5wdXNoKHsgbmFtZTogXCJCYW5hbmFzXCIgfSk7XHJcbiAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC5wdXNoKHsgbmFtZTogXCJPcmFuZ2VzXCIgfSk7XHJcbiAgICB9XHJcbn0iXX0=