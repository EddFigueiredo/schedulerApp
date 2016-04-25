'use strict';

/**
 * @ngdoc function
 * @name schedulerApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Este controlador define os itens no menu de navegação, e analisa qual é o item ativo.
 */
angular.module('schedulerApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    
    $scope.isActive = function(viewLocation){
      var active = (viewLocation === $location.path());
      return active;
    };

    $scope.navItems = [
      {item: "Como funciona", href: "#", location: "/"},
      {item: "Registrar", href: "#/registrar", location: "/registrar"},
      {item: "Login", href: "#/login", location: "/login"}
    ];

    $scope.active = false;

    
});
