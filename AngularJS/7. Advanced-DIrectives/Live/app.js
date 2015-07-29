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
        });

    angular.module('app')
        .directive('photoDetails', function () {
            return {
                template: '<div ng-include="getContentUrl()"></div>',
                //templateUrl: 'photo-details.html',
                replace: true,
                scope: {
                    photo: '=',
                    template: '@'
                },
                link: function (scope, el, attrs) {
                    scope.getContentUrl = function () {
                        return attrs.template + '.html';
                    }
                }
            }
        });
}());