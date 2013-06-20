'use strict';

var loginCtrl = angular.module('loginDemoApp')
  .controller('LoginCtrl',['$scope','$location','SessionService',
  	function ($scope,$location,SessionService) {
    	
    	$scope.user = SessionService.getUser();
    	
    	$scope.login = function() {
    		SessionService.login($scope.user,loginHandler,errorHandler);
    	};

    	function loginHandler(res) {
    		if(SessionService.authorized()) {
    			$location.path('/authorized');
    		} else {
    			$scope.message = "Invalid username or password!";
    		}
    	}

    	function errorHandler(err) {
        	$scope.message = "Error! " + err.data.error;
    	}

  }]);

