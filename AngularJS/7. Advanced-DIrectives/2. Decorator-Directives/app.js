(function () {
    'use strict';

    angular.module('app', []);

    angular.module('app')
        .controller('MainController', function ($scope) {
            $scope.messages = [];
            var pausedCounter = 0;

            $scope.handlePause = function () {
                pausedCounter++;
                $scope.messages.push('Paused ' + pausedCounter);
                console.log('Video was paused!');
                console.log($scope.messages);
            }
        });

    angular.module('app')
        .directive('eventPause', function () {
            return {
                restrict: 'A',
                scope: {
                    eventPause: '&'
                },
                link: function (scope, el, attrs) {
                    el.on('pause', function (ev) {
                        scope.$apply(function () {
                            scope.eventPause();
                        });
                    })
                }
            }
        })
    
    //angular.module('app')
    //    .directive('eventPause', function () {
    //        return {
    //            restrict: 'A',
    //            scope: {
    //                eventPause: '&',
    //            },
    //            link: function (scope, el, attrs) {
    //                el.on('pause', function (ev) {
    //                    //scope.$apply(function () {
    //                        scope.eventPause();
    //                    //})
    //                })
    //            }
    //        }
    //    })

    //angular.module('app')
    //    .directive('spacebar', function () {
    //        return {
    //            restrict: 'A',
    //            link: function (scope, el, attributes) {
    //                $('body').on('keypress', function (ev) {
    //                    if (ev.keyCode === 32) {
    //                        var videoElement = el[0];
    //                        if (videoElement.paused) {
    //                            videoElement.play();
    //                        } else {
    //                            videoElement.pause();
    //                        }
    //                    }
    //                })
    //            }
    //        }
    //    });

}());