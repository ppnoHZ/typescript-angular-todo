/// <reference path="../_all.ts" />

module todos {
    export class TodoCtrl {
        private todos: TodoItem[];
        //注入，同构造函数的参数要一致
        // See http://docs.angularjs.org/guide/di
        public static $inject = ["$scope", "$log", "$location", "todoStorage", ];
        constructor(
            private $scope: ITodoScope,
            private $log: ng.ILogService,
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
            console.log('onTodos')
            this.todoStorage.put(this.todos);
        }
        addTodo() {
            this.$log.info('addTodo', this.$scope.newTodo.trim())
            var newTodo: string = this.$scope.newTodo.trim();
            if (!newTodo.length) {
                return;
            }
            this.todos.push(new TodoItem(newTodo, false));
            this.$log.info('addTodo', this.$scope.newTodo.trim())
            this.$scope.newTodo = '';
        }
        markAll(completed: boolean) {
            this.todos.forEach(todoItem=> {
                todoItem.completed = completed;
            })
        }
        doneEditing(todoItem: TodoItem) {
            console.log('doneEditing')
            this.$scope.editedTodo = null;
            // this.$scope.ori
        }
    }
}