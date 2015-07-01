(function () {
    'use strict';

    angular.module('common', ['ngResource'])
        .constant('appSettings', {
            'serverPath': 'http://localhost:49399/'
        });
}());