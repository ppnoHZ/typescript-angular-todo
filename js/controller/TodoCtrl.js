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
//# sourceMappingURL=TodoCtrl.js.map