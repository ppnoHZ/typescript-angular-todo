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
            console.log('onTodos', this.todos);
            this.todoStorage.put(this.todos);
        };
        TodoCtrl.prototype.addTodo = function () {
            var newTodo = this.$scope.newTodo.trim();
            if (!newTodo.length) {
                return;
            }
            this.$log.info('addTodo前', this.todos);
            this.todos.push(new todos.TodoItem(newTodo, false));
            this.$log.info('addTodo之后', this.todos);
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
//# sourceMappingURL=TodoCtrl.js.map