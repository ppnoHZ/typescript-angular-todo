/// <reference path="_all.ts" />
var todos;
(function (todos) {
    var todomvc = angular.module('todomvc', [])
        .controller('todoCtrl', todos.TodoCtrl)
        .service('todoStorage', todos.TodoStorage);
})(todos || (todos = {}));
//# sourceMappingURL=app.js.map