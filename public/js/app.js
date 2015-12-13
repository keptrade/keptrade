var greatNeck311App = angular.module('gn311',
    ['ngRoute', 'ngMaterial', 'firebase', 'fireBaseServices']);

greatNeck311App.config(['$routeProvider', '$locationProvider', '$httpProvider',
    function($routeProvider, $locationProvider, $mdIconProvider) {
      $routeProvider.when('/login', {
	templateUrl : 'views/login.html'
      }).when('/main', {
	templateUrl : 'views/main.html',
	controller : 'AppCtrl'
      }).otherwise({
	redirectTo : '/login'
      });
    }]);

greatNeck311App.controller('loginCtrl', gn311.LoginCtrl);

greatNeck311App.controller('AppCtrl', function() {
});
