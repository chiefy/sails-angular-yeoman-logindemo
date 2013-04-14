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
    			console.log("Authorized!");
    		} else {
    			$scope.message = "Invalid username or password!";
    		}
    	}

    	function errorHandler(err) {
        	$scope.message = "Error! " + err;
    	}

    	$scope.showMessage = function() {
    		return $scope.message && $scope.message.length;
    	}

  }]);

