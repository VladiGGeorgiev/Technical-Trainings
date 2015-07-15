(function() {
'use strict';

/**
 * Details Controller
 */
angular
  .module('myapp.details')
  .controller('DetailsController', Controller);

Controller.$inject = [
  'UsersService',
  '$stateParams'
];

function Controller(UsersService, $stateParams) {
  console.log("Details controller");
  var vm = this;
  angular.extend(vm, UsersService.getById(parseInt($stateParams.id)));
  console.log(window.location);
}

})();