(function () {
    'use strict';

    angular.module('app', []);

    angular.module('app')
        .controller('MainController', function ($scope) {
            $scope.photo = {
                name: 'Photo name',
                comments: [
                    { content: 'Nice photo' },
                    { content: 'This photo sucks' },
                    { content: 'Nice macka!' },
                ]
            }

            console.log($scope);
        });

    angular.module('app')
        .directive('photoDetails', function () {
            return {
                templateUrl: 'photo-details.html',
                scope: { doIt: '&' },
                controller: function ($scope) {
                    $scope.doIt();
                }
            }
        });
}());