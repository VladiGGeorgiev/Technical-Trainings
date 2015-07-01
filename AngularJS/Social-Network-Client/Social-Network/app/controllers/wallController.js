(function () {
    'use strict';

    angular.module('socialNetworkApp')
        .controller('wallController', ['dataService', function (dataService) {
            var vm = this;
            dataService.getWall()
                .success(function (data) {
                    vm.data.wall = data;
                })
        }]);
}());