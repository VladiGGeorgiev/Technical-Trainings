(function () {
    'use strict';

    angular.module('app', []);

    angular.module('app')
        .controller('MainController', function ($scope) {
            $scope.items = [1, 2, 3, 4, 5, 6]; 

            $scope.add = function () {
                $scope.items.push($scope.items[$scope.items.length - 1] + 1);
            }

            $scope.remove = function () {
                $scope.items.length--;
            }
        });

    angular.module('app')
        .directive('myRepeat', function () {
            return {
                restrict: 'A',
                transclude: 'element',
                link: function (scope, el, attrs, ctrl, transclude) {
                    var pieces = attrs.myRepeat.split(' ');
                    var itemString = pieces[0];
                    var collectionName = pieces[2];
                    var elements = [];

                    scope.$watchCollection(collectionName, function (collection) {
                        if (elements.length > 0) {
                            for (var i = 0; i < elements.length; i++) {
                                elements[i].el.remove();
                            }

                            elements = [];
                        }

                        for (var i = 0; i < collection.length; i++) {
                            var childScope = scope.$new();
                            childScope[itemString] = collection[i];
                            transclude(childScope, function (clone) {
                                el.after(clone);

                                var item = {};
                                item.el = clone;
                                elements.push(item);
                            })
                        }
                    });
                }
            }
        })
}());