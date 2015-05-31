app.directive('loginForm', function(){

    return{
        restrict: 'A',
        templateUrl: 'partials/pages/login.html',
        controller: 'LoginForm',
        replace: true
    }
});