(function () {
    'use strict';

    angular.module('app', []);
    angular.module('app')
        .controller('MainController', function ($scope) {
            $scope.photo = {
                name: 'Nice girl',
                comments: [
                    { content: 'Very good photo' },
                    { content: 'Congrats, I like it' },
                    { content: 'The girl is awesome' },
                ],
                bonus: 0
            }

            $scope.log = function (photo) {
                console.log(photo);
            }

            console.log($scope);
        });
    angular.module('app')
        .directive('photoDetails', function () {
            return {
                //template: 'Photo Details: {{ photo.name }}',
                templateUrl: '/templates/photo-details.html',
                restrict: 'AE', // A - attribute, E - element, C - class, M - comment,
                replace: true,
                //scope: true, // Create inherited scope
                //scope: {}, // create isolated scope
                scope: { photo: '=', logIt: '&' }, // create isolated scope
                //scope: { photo: '@' }, // pass string
                //scope: { change: '&' } // pass function
                controller: function ($scope) {
                    $scope.doIt = function (photo) {
                        photo.bonus += 1;
                    }

                    $scope.logIt();
                    console.log($scope);
                }
            };
        });
}());