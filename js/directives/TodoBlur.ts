/// <reference path="../_all.ts" />
module todos {
    export function todoBlur(): ng.IDirective {
        return {
            link: ($scope: ng.IScope, element: JQuery, attributes: any) => {
                console.log('directives todoBlur')
                element.bind('blur', () => {
                    //执行标签属性todoBlur对应的方法
                    $scope.$apply(attributes.todoBlur);
                });
                $scope.$on('$destory', () => {
                    element.unbind('blur');
                });


            }
        };
    }
}