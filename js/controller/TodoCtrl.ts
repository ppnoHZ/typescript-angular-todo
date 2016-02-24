/// <reference path="../_all.ts" />

module todos {
    export class TodoCtrl {
        private todos: TodoItem[];
        //注入，同构造函数的参数要一致
        // See http://docs.angularjs.org/guide/di
        public static $inject = ["$scope", "$location", "todoStorage"];
        constructor(
            private $scope: ITodoScope,
            private $location: ng.ILocationService,
            private todoStorage: ITodoStorage
        ) {
            this.todos = $scope.todos = todoStorage.get();

            $scope.newTodo = '';
            $scope.editedTodo = null;

            $scope.vm = this;

            $scope.$watch('todos', () => this.onTodos(), true)
        }
        onTodos() {
            this.todoStorage.put(this.todos);
        }
        addTodo() {
            console.log('addTodo', this.$scope.newTodo.trim())
            var newTodo: string = this.$scope.newTodo.trim();
            if (!newTodo.length) {
                return;
            }
            this.todos.push(new TodoItem(newTodo, false));
            this.$scope.newTodo = '';
        }
        markAll(completed: boolean) {
            this.todos.forEach(todoItem=> {
                todoItem.completed = completed;
            })
        }
    }
}