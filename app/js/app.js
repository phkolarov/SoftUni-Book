var app = angular.module('sfbook',[ 'ngResource','ngRoute','LocalStorageModule']);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api/');

app.config(['$routeProvider', 'localStorageServiceProvider',function ($routeProvider,localStorageServiceProvider) {

    $routeProvider.when('/',{
        templateUrl: function(){
            if(!localStorage.userSession){
                return 'partials/login-register-form.html'
            }else{
                return 'partials/homepage.html'
            }
        }
    });

    $routeProvider.when('/friends',{
        templateUrl: 'partials/friends-page.html',
        controller: 'HomePageCtrl'
    });

    $routeProvider.when('/friendPage',{
        templateUrl: 'partials/current-friend-page.html',
        controller: 'HomePageCtrl'
    });

    $routeProvider.when('/edit-profile',{
        templateUrl: 'partials/edit.html',
        controller: 'HomePageCtrl'
});

    $routeProvider.when('/change-password',{
        templateUrl: 'partials/change-password.html',
        controller: 'HomePageCtrl'
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });


}]);

