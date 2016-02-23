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
///<reference path="../typings/jquery/jquery.d.ts"/>
///<reference path="../typings/angularjs/angular.d.ts"/>
///<reference path="../typings/angularjs/angular-route.d.ts"/>
/// <reference path="models/TodoItem.ts" />
/// <reference path="interface/ITodoScope.ts" />
/// <reference path="controller/TodoCtrl.ts" />
/// <reference path="interface/ITodoStorage.ts" />
//# sourceMappingURL=app1.js.map