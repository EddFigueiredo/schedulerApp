'use strict';

/**
 * @ngdoc overview
 * @name schedulerApp
 * @description
 * # schedulerApp
 *
 * Main module of the application.
 */
angular
  .module('schedulerApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/registrar', {
        templateUrl: 'views/registro.html',
        controller: 'RegistroCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
