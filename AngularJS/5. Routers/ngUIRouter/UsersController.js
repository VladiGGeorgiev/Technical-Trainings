(function() {
'use strict';

/**
 * Users Controller
 */
angular
  .module('myapp.users')
  .controller('UsersController', Controller);

Controller.$inject = [
  'UsersService'
];

function Controller(UsersService) {
  console.log("Users controller instantiated");
  var vm = this;
  vm.list = UsersService.get();
}

})();