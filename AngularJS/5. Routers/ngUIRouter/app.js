angular
  .module('myapp', [
    'ui.router',
    'myapp.home',
    'myapp.users'
  ])

.config(Config);

Config.$inject = [
  '$urlRouterProvider',
  '$stateProvider'
];  

function Config($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/home'); // default route
  
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'home.tpl.html',
    controller: 'HomeController',
    controllerAs: 'home'
  })
  .state('users', {
    url: '/users',
    templateUrl: 'users.tpl.html',
    controller: 'UsersController',
    controllerAs: 'users'
  })
  .state('users.details', {
      url: '/:id',
      templateUrl: 'details.tpl.html',
      controller: 'DetailsController',
      controllerAs: 'details'
  });
}