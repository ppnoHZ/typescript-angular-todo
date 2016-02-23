/// <reference path="../_all.ts" />
module todos {
    
    /**
    * 本地存储服务
    */
    export class TodoStorage implements ITodoStorage {
        STORAGE_ID = 'todos-angularjs-typescript';
        constructor(parameters) {

        }
        get(): TodoItem[] {
            return JSON.parse(localStorage.getItem(this.STORAGE_ID) || '[]')
        }
        put(todos: TodoItem[]) {
            localStorage.setItem(this.STORAGE_ID, JSON.stringify(todos));
        }
    }
}