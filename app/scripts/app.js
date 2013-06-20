'use strict';

angular.module('loginDemoApp.services',['ngResource']);

angular.module('loginDemoApp', ['loginDemoApp.services'])
  .config(['$routeProvider','$locationProvider',
    function ($routeProvider,$locationProvider) {
    
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/widgets',{
        templateUrl: 'views/widgets.html',
        controller: 'WidgetCtrl'
      })
      .when('/login',{
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/authorized',{
        templateUrl: 'views/authorized.html',
        controlller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });


  }]);
