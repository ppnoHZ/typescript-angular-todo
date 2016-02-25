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
        function TodoCtrl($scope, $log, $location, todoStorage) {
            var _this = this;
            this.$scope = $scope;
            this.$log = $log;
            this.$location = $location;
            this.todoStorage = todoStorage;
            this.todos = $scope.todos = todoStorage.get();
            $scope.newTodo = '';
            $scope.editedTodo = null;
            $scope.vm = this;
            $scope.$watch('todos', function () { return _this.onTodos(); }, true);
        }
        TodoCtrl.prototype.onTodos = function () {
            console.log('onTodos');
            this.todoStorage.put(this.todos);
        };
        TodoCtrl.prototype.addTodo = function () {
            this.$log.info('addTodo', this.$scope.newTodo.trim());
            var newTodo = this.$scope.newTodo.trim();
            if (!newTodo.length) {
                return;
            }
            this.todos.push(new todos.TodoItem(newTodo, false));
            this.$log.info('addTodo', this.$scope.newTodo.trim());
            this.$scope.newTodo = '';
        };
        TodoCtrl.prototype.markAll = function (completed) {
            this.todos.forEach(function (todoItem) {
                todoItem.completed = completed;
            });
        };
        TodoCtrl.prototype.doneEditing = function (todoItem) {
            console.log('doneEditing');
            this.$scope.editedTodo = null;
            // this.$scope.ori
        };
        //注入，同构造函数的参数要一致
        // See http://docs.angularjs.org/guide/di
        TodoCtrl.$inject = ["$scope", "$log", "$location", "todoStorage",];
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
/// <reference path="../_all.ts" />
var todos;
(function (todos) {
    function todoBlur() {
        return {
            link: function ($scope, element, attributes) {
                console.log('directives todoBlur');
                element.bind('blur', function () {
                    //执行标签属性todoBlur对应的方法
                    $scope.$apply(attributes.todoBlur);
                });
                $scope.$on('$destory', function () {
                    element.unbind('blur');
                });
            }
        };
    }
    todos.todoBlur = todoBlur;
})(todos || (todos = {}));
/// <reference path="_all.ts" />
var todos;
(function (todos) {
    'use strict';
    var todomvc = angular.module('todomvc', [])
        .controller('todoCtrl', todos.TodoCtrl)
        .directive('todoBlur', todos.todoBlur)
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
/// <reference path="directives/TodoBlur.ts" />
///<reference path="app.ts"/>
//# sourceMappingURL=app.js.map