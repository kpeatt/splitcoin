'use strict';


// Declare app level module which depends on filters, and services
angular.module('splitcoin', [
  'ngRoute',
  'splitcoin.filters',
  'splitcoin.services',
  'splitcoin.directives',
  'splitcoin.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
