var app = angular.module('sfbook',[ 'ngResource','ngRoute']);

app.config(['$routeProvider',function ($routeProvider) {

    $routeProvider.when('/',{
        templateUrl: 'partials/login-register-form.html',
        controller: 'loginRegisterForm'
    })
}]);