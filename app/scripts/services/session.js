angular.module('loginDemoApp.services')
	.factory('SessionService',['$resource', function($resource){

		var service = $resource('/sessions/:param',{},{
			'login': {
				method: 'POST'
			},
			'logout': {
				method: 'DELETE'
			}
		});

		var _user = { authorized: false };

		function getUser() {
			return _user;
		};

		function authorized(){
			return _user.authorized === true;
		};

		function login(newUser,resultHandler,errorHandler) {
			service.login(
				newUser,
				function(res){
					user = (res.user || {});
					user.authorized = res.authorized;
					if(angular.isFunction(resultHandler)) {
						resultHandler(res);
					}
				},
				function(err){
					if(angular.isFunction(errorHandler)){
						errorHandler(err);
					}
				}
			);
		};

		function logout(){};

		return {
			login: login,
			logout: logout,
			authorized: authorized,
			getUser: getUser
		};

	}]);