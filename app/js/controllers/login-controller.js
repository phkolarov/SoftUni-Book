app.controller('LoginForm', ['$scope', 'authentication', '$location', 'users', 'notifyService', '$route', function ($scope, authentication, $location, users, notifyService, $route) {



    $scope.login = function (user) {

        var userObj = user;

        users.login(userObj)
            .$promise
            .then(function (data) {

                authentication.saveUser(data);
                authentication.setHeaders();
                $route.reload();
                notifyService.showInfo('Login Success');
            }, function (error) {

                console.log(error);
                notifyService.showError(error.data.error_description);
            });
    };

}]);

