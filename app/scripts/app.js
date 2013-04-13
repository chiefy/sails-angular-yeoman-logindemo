'use strict';

angular.module('loginDemoApp.services',['ngResource']);

angular.module('loginDemoApp', ['loginDemoApp.services'])
  .config(['$routeProvider','$locationProvider',
    function ($routeProvider,$locationProvider) {
    
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/login',{
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });


  }]);
