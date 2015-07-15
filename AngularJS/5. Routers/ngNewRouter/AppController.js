(function() {
'use strict';

/**
 * App Controller
 */
angular
  .module('myapp')
  .controller('AppController', Controller);


Controller.$inject = [
  '$router',
  '$location'
];


// https://angular.github.io/router/configuration
Controller.$routeConfig = [{
    
}];

function Controller($router, $location) {
  $router.config([
    { path: '/home', component: 'home' },
    { path: '/users', component: 'users' },
    { path: '/', redirectTo: '/home' },
    { path: '/profile', components: {
            detail: 'minka',
            header: 'secondHeader'
        }
    }
  ]);
  $location.path('/'); //set default otherwise is blank
}

})();