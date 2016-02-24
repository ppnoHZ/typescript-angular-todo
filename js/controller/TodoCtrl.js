/// <reference path="../_all.ts" />
var todos;
(function (todos) {
    var TodoCtrl = (function () {
        function TodoCtrl($scope, $location, todoStorage) {
            var _this = this;
            this.$scope = $scope;
            this.$location = $location;
            this.todoStorage = todoStorage;
            this.todos = $scope.todos = todoStorage.get();
            $scope.newTodo = '';
            $scope.editedTodo = null;
            $scope.vm = this;
            $scope.$watch('todos', function () { return _this.onTodos(); }, true);
        }
        TodoCtrl.prototype.onTodos = function () {
            this.todoStorage.put(this.todos);
        };
        TodoCtrl.prototype.addTodo = function () {
            console.log('addTodo', this.$scope.newTodo.trim());
            var newTodo = this.$scope.newTodo.trim();
            if (!newTodo.length) {
                return;
            }
            this.todos.push(new todos.TodoItem(newTodo, false));
            this.$scope.newTodo = '';
        };
        TodoCtrl.prototype.markAll = function (completed) {
            this.todos.forEach(function (todoItem) {
                todoItem.completed = completed;
            });
        };
        //注入，同构造函数的参数要一致
        // See http://docs.angularjs.org/guide/di
        TodoCtrl.$inject = ["$scope", "$location", "todoStorage"];
        return TodoCtrl;
    })();
    todos.TodoCtrl = TodoCtrl;
})(todos || (todos = {}));
//# sourceMappingURL=TodoCtrl.js.map