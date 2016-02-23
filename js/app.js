var todos;
(function (todos) {
    var TodoItem = (function () {
        function TodoItem(title, completed) {
            this.title = title;
            this.completed = completed;
        }
        return TodoItem;
    })();
    todos.TodoItem = TodoItem;
})(todos || (todos = {}));
/// <reference path="../_all.ts" />
/// <reference path="../_all.ts" />
var todos;
(function (todos) {
    var TodoCtrl = (function () {
        // private todos:
        function TodoCtrl($scope, $location, todoStorage) {
            this.$scope = $scope;
            this.$location = $location;
            this.todoStorage = todoStorage;
        }
        return TodoCtrl;
    })();
    todos.TodoCtrl = TodoCtrl;
})(todos || (todos = {}));
/// <reference path="../_all.ts" />
/// <reference path="../_all.ts" />
var todos;
(function (todos_1) {
    /**
    * 本地存储服务
    */
    var TodoStorage = (function () {
        function TodoStorage() {
            this.STORAGE_ID = 'todos-angularjs-typescript';
        }
        TodoStorage.prototype.get = function () {
            return JSON.parse(localStorage.getItem(this.STORAGE_ID) || '[]');
        };
        TodoStorage.prototype.put = function (todos) {
            localStorage.setItem(this.STORAGE_ID, JSON.stringify(todos));
        };
        return TodoStorage;
    })();
    todos_1.TodoStorage = TodoStorage;
})(todos || (todos = {}));
/// <reference path="_all.ts" />
var todos;
(function (todos) {
    'use strict';
    var todomvc = angular.module('todomvc', [])
        .controller('todoCtrl', todos.TodoCtrl)
        .service('todoStorage', todos.TodoStorage);
})(todos || (todos = {}));
///<reference path="../typings/jquery/jquery.d.ts"/>
///<reference path="../typings/angularjs/angular.d.ts"/>
///<reference path="../typings/angularjs/angular-route.d.ts"/>
/// <reference path="models/TodoItem.ts" />
/// <reference path="interface/ITodoScope.ts" />
/// <reference path="controller/TodoCtrl.ts" />
/// <reference path="interface/ITodoStorage.ts" />
///<reference path="services/TodoStorage.ts"/>
///<reference path="app.ts"/>
//# sourceMappingURL=app.js.map