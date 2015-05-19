app.directive('registerForm', function(){

    return{
        restrict: 'A',
        templateUrl: 'partials/register.html',
        controller: 'RegisterForm',
        replace: true
    }
});