/// <reference path="../_all.ts" />

module todos {
    export class TodoCtrl {
        // private todos:
        constructor(
            private $scope: ITodoScope,
            private $location: ng.ILocationService,
            private todoStorage: ITodoStorage
        ) {

        }
    }
}