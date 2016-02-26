/// <reference path="../_all.ts" />

module todos {
    'use strict';

    export class TodoCtrl {
        private todos: TodoItem[];
        //注入，同构造函数的参数要一致
        // See http://docs.angularjs.org/guide/di
        public static $inject = ["$scope", "$log", "$location", "todoStorage", "filterFilter"];
        constructor(
            private $scope: ITodoScope,
            private $log: ng.ILogService,
            private $location: ng.ILocationService,
            private todoStorage: ITodoStorage,
            private filterFilter
        ) {
            this.todos = $scope.todos = todoStorage.get();

            $scope.newTodo = '';
            $scope.editedTodo = null;

            $scope.vm = this;

            $scope.$watch('todos', () => this.onTodos(), true)

            $scope.$watch('location.path()', function(){
                $scope.vm.onPath($location.path())
            });

            if ($location.path() === '') $location.path('/');
            $scope.location = $location;
        }
        onPath(path: string) {
            this.$scope.statusFilter = (path === '/active') ?
                { completed: false } : (path === '/completed') ?
                    { completed: true } : {};
        }

        onTodos() {
            this.$scope.remainingCount = this.filterFilter(this.todos, { completed: false }).length;
			this.$scope.doneCount = this.todos.length - this.$scope.remainingCount;
			this.$scope.allChecked = !this.$scope.remainingCount
            this.todoStorage.put(this.todos);
        }
        addTodo() {
            var newTodo: string = this.$scope.newTodo.trim();
            if (!newTodo.length) {
                return;
            }
            this.$log.info('addTodo前', this.todos);
            this.todos.push(new TodoItem(newTodo, false));
            this.$log.info('addTodo之后', this.todos);
            this.$scope.newTodo = '';
        }
        editTodo(todoItem: TodoItem) {
            this.$scope.editedTodo = todoItem;

            // Clone the original todo in case editing is cancelled.
            this.$scope.originalTodo = angular.extend({}, todoItem);
        }
        revertEdits(todoItem: TodoItem) {
            this.todos[this.todos.indexOf(todoItem)] = this.$scope.originalTodo;
            this.$scope.reverted = true;
        }

        doneEditing(todoItem: TodoItem) {
            this.$scope.editedTodo = null;
            this.$scope.originalTodo = null;
            if (this.$scope.reverted) {
                // Todo edits were reverted, don't save.
                this.$scope.reverted = null;
                return;
            }
            todoItem.title = todoItem.title.trim();
            if (!todoItem.title) {
                this.removeTodo(todoItem);
            }
        }
        removeTodo(todoItem: TodoItem) {
            this.todos.splice(this.todos.indexOf(todoItem), 1);
        }
        clearDoneTodos() {
            this.$scope.todos = this.todos = this.todos.filter(todoItem => !todoItem.completed);
        }

        markAll(completed: boolean) {
            this.todos.forEach(todoItem => { todoItem.completed = completed; });
        }
    }

}