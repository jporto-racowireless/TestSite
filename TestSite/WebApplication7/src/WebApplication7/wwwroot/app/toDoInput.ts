import {Component} from 'angular2/core';
import {ToDoService} from './ToDoService';

@Component({
    selector: 'to-do-input',
    templateUrl: './app/templates/ngForTest.html'

})
export class ToDoInput {
    onClick(value){
        //console.log(value);
        //console.log(this.toDoService);

    }


    public arr = Array(2999).fill(0).map((x, i) => i);
    public arr1 = Array(15).fill(0).map((x, i) => i);

    constructor(public toDoService: ToDoService) {

       // this.arr.length = 999;

    }

}