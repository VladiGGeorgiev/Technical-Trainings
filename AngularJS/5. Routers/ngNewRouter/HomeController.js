(function() {
'use strict';

/**
 * Home Controller
 */
angular
  .module('myapp')
  .controller('HomeController', Controller);

function Controller() {
  var vm = this;
  vm.name = "Plunker";
}

})();