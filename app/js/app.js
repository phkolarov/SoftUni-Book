var app = angular.module('sfbook',[ 'ngResource','ngRoute','LocalStorageModule']);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api/');

app.config(['$routeProvider', 'localStorageServiceProvider',function ($routeProvider,localStorageServiceProvider) {

    $routeProvider.when('/',{
        templateUrl: 'partials/login-register-form.html'
    });

    $routeProvider.when('/home',{
        templateUrl: 'partials/homepage.html',
        controller: 'HomePageCtrl'
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
        templateUrl: 'partials/edit-profile.html',
        controller: 'HomePageCtrl'
    });

    $routeProvider.when('/change-password',{
        templateUrl: 'partials/change-password.html',
        controller: 'HomePageCtrl'
    });


    localStorageServiceProvider.setStorageType('sessionStorage')

}]);

