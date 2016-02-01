import {Injectable} from "angular2/core";


@Injectable()
export class ToDoService{

    todos = Array(5).fill(0).map((x, i) => i);

    constructor() {

        console.log(this.todos);
    }

}

