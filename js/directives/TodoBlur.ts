/// <reference path="../_all.ts" />
module todos {
    'use strict';
    export function todoBlur(): ng.IDirective {
        return {
            link: ($scope: ng.IScope, element: JQuery, attributes: any) => {

                element.bind('blur', () => {
                    //执行标签属性todoBlur对应的方法
                    $scope.$apply(attributes.todoBlur);
                });
                $scope.$on('$destroy', () => {
                    element.unbind('blur');
                });
               
            }
        };
    }
}