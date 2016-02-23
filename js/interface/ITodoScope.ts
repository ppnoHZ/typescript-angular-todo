/// <reference path="../_all.ts" />

module todos {
    export interface ITodoScope extends ng.IScope {
        todos: TodoItem[];
        newTodo: string;
        editedTodo: TodoItem;
        vm: TodoCtrl;
    }
}

