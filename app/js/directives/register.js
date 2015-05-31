app.directive('registerForm', function(){

    return{
        restrict: 'A',
        templateUrl: 'partials/pages/register.html',
        controller: 'RegisterForm',
        replace: true
    }
});