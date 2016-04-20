'use strict';

/**
 * @ngdoc overview
 * @name schedulerAppApp
 * @description
 * # schedulerAppApp
 *
 * Main module of the application.
 */
angular
  .module('schedulerAppApp', [
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
