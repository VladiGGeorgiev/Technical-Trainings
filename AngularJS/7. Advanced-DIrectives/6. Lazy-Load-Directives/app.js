(function () {
    'use strict';

    angular.module('app', []);

    angular.module('app')
        .controller('MainController', function ($scope) {
            $scope.items = [1, 2, 3, 4, 5, 6]; 
        });

    angular.module('app')
        .directive('myLazyRender', function ($parse) {
            return {
                restrict: 'A',
                transclude: 'element',
                priority: 1200,
                link: function (scope, el, attrs, ctrl, transclude) {
                    var hasBeenShown = false;
                    var unwatchFn = scope.$watch(attrs.myLazyRender, function (val) {
                        if (val && !hasBeenShown) {
                            hasBeenShown = true;
                            transclude(scope, function (clone) {
                                el.after(clone);
                            });

                            unwatchFn();
                        }
                    })
                }
            }
        });

    angular.module('app')
        .directive('echo', function () {
            return {
                priority: 100,
                link: function () {
                    console.log('Echo');
                }
            }
        })
}());