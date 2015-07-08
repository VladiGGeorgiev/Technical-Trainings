(function () {
    'use strict';

    angular.module('services.data', ['ngResource'])
        .constant('BaseService', {
            url: 'http://localhost:49399/api/'
        });
}());