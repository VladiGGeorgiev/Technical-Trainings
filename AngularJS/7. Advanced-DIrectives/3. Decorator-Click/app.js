(function () {
    'use strict';

    angular.module('app', []);

    angular.module('app')
        .controller('MainController', function ($scope) {
            $scope.data = { message: 'I have not been clicked!'};

            $scope.clickHandler = function (p) {
                console.log('Clicked!')
                console.log($scope.data)
                p.message = 'I have been clicked!'
            }
        });

    angular.module('app')
        .directive('myClick', function ($parse) {
            return {
                link: function (scope, el, attrs) {
                    var fn = $parse(attrs['myClick']);
                    el.on('click', function () {
                        scope.$apply(function () {
                            fn(scope);
                        })
                    })
                }
            }
        });
}());