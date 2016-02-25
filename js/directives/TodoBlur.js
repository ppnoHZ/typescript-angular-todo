/// <reference path="../_all.ts" />
var todos;
(function (todos) {
    function todoBlur() {
        return {
            link: function ($scope, element, attributes) {
                console.log('directives todoBlur');
                element.bind('blur', function () {
                    //执行标签属性todoBlur对应的方法
                    $scope.$apply(attributes.todoBlur);
                });
                $scope.$on('$destory', function () {
                    element.unbind('blur');
                });
            }
        };
    }
    todos.todoBlur = todoBlur;
})(todos || (todos = {}));
//# sourceMappingURL=TodoBlur.js.map