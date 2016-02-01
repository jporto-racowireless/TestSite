import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {ToDoInput} from './toDoInput';
import {ToDoService} from './ToDoService';

bootstrap(AppComponent, [ToDoService]);