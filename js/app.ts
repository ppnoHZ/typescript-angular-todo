/// <reference path="_all.ts" />

module todos {

    var todomvc = angular.module('todomvc', [])
        .controller('todoCtrl', TodoCtrl)
        .service('todoStorage', TodoStorage)
}







