app.controller('LoginForm',
    ['$scope',
        'authentication',
        '$location',
        'users',
        'notifyService',

        function ($scope,authentication, $location, users,notifyService) {


            $scope.login = function (user) {

                var userObj = user;

                users.login(userObj)
                    .$promise
                    .then(function (data) {

                        //sessionStorage.userSession = data.access_token;
                        //sessionStorage.username = data.userName;
                        authentication.saveUser(data);

                        $location.path('/home');
                        notifyService.showInfo('Login Success');
                    }, function (error) {
                        console.log('EROR')
                        console.log(error);
                        notifyService.showError(error.data.error_description);
                    });
            };

        }]);

