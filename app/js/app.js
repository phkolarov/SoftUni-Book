var app = angular.module('sfbook',[ 'ngResource','ngRoute']);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api/');

app.config(['$routeProvider',function ($routeProvider) {

    $routeProvider.when('/',{
        templateUrl: 'partials/login-register-form.html',
        controller: 'loginRegisterForm'
    })

    $routeProvider.when('/home',{
        templateUrl: 'partials/homepage.html',
        controller: 'loginRegisterForm'
    });

    $routeProvider.when('/friends',{
        templateUrl: 'partials/friends-page.html',
        controller: 'loginRegisterForm'
    });

    $routeProvider.when('/friendPage',{
        templateUrl: 'partials/current-friend-page.html',
        controller: 'loginRegisterForm'
    });

    $routeProvider.when('/edit-profile',{
        templateUrl: 'partials/edit-profile.html',
        controller: 'loginRegisterForm'
    });

    $routeProvider.when('/change-password',{
        templateUrl: 'partials/change-password.html',
        controller: 'loginRegisterForm'
    });

}]);