'use strict';

angular.module('loginDemoApp')
  .controller('MainCtrl',['$scope','$location','SessionService',
  	function ($scope,$location,SessionService) {
    	
    	$scope.user = SessionService.getUser();
    	$scope.authorized = SessionService.authorized;

    	$scope.logout = function() {
    		SessionService.logout(logoutHandler,errorHandler);
    	};

    	function logoutHandler(res) {
   			$location.path('/login');
    	}

    	function errorHandler(err) {
        	$scope.message = "Error! " + err.data.error;
    	}

  }]);

