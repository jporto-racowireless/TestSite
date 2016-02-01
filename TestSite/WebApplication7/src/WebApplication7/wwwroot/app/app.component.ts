import {Component} from 'angular2/core';
import {ToDoInput} from './toDoInput';

@Component({
    selector: 'app',
    directives: [ToDoInput],
    template: `<div><to-do-input></to-do-input></div>`
})
export class AppComponent { }