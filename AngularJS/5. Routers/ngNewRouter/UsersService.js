(function() {
'use strict';

/**
 * Users Service
 */
angular
  .module('myapp')
  .factory('UsersService', service);

function service(){
  var get = function() {
    return [{
      username: 'batman',
      roles: ['admin', 'user']
    }, {
      username: 'spiderman',
      roles: ['user']
    }];
  }

  return {
    get: get
  }
}

})();