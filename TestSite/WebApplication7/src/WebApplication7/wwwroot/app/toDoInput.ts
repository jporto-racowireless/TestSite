import {Component} from 'angular2/core';
import {ToDoService} from './ToDoService';

@Component({
    selector: 'to-do-input',
    templateUrl: './app/templates/ngForTest.html'

})
export class ToDoInput {
    inputList1 = [];
    inputList2 = [];
    firstInputModel: string = "intial value";
    secondInputModel: string;

    firstFormSubmit() {

        this.inputList1.push(this.firstInputModel);
    }

    secondFormSubmit() {
          this.inputList2.push(this.secondInputModel);
    }
    
    constructor(test, [terms], test1) {

    }

}