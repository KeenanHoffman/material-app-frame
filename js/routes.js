angular.module('templateApp').config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../views/home.html',
      controller: 'TemplateController as TC',
      activetab: 'home'
    })
    .when('/material', {
      templateUrl: '../views/material.html',
      controller: 'TemplateController as TC',
      activetab: 'material'
    }).otherwise({
        redirectTo : "/"
    });
});
