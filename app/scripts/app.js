'use strict';

/**
 * @ngdoc overview
 * @name schedularAppTestApp
 * @description
 * # schedularAppTestApp
 *
 * Main module of the application.
 */
angular
  .module('schedularAppTestApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
