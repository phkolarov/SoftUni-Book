app.directive('loginForm', function(){

    return{
        restrict: 'A',
        templateUrl: 'partials/login.html',
        controller: 'LoginForm',
        replace: true
    }
});