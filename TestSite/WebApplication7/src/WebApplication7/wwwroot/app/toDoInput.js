System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ToDoInput;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ToDoInput = (function () {
                function ToDoInput(test, _a, test1) {
                    var terms = _a[0];
                    this.inputList1 = [];
                    this.inputList2 = [];
                    this.firstInputModel = "intial value";
                }
                ToDoInput.prototype.firstFormSubmit = function () {
                    this.inputList1.push(this.firstInputModel);
                };
                ToDoInput.prototype.secondFormSubmit = function () {
                    this.inputList2.push(this.secondInputModel);
                };
                ToDoInput = __decorate([
                    core_1.Component({
                        selector: 'to-do-input',
                        templateUrl: './app/templates/ngForTest.html'
                    }), 
                    __metadata('design:paramtypes', [Object, Object, Object])
                ], ToDoInput);
                return ToDoInput;
            })();
            exports_1("ToDoInput", ToDoInput);
        }
    }
});
