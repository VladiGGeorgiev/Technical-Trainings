(function () {
    'use strict';

    angular
      .module('myapp')
      .controller('MinkaController', ProfileController);

    function ProfileController() {
        var vm = this;
        vm.name = "My Profile";
    }
})();