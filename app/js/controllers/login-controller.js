app.controller('LoginForm', ['$scope', 'users', 'notifyService', function($scope,users, notifyService){



    $scope.login = function(user){

        var userObj = user;

        users.login(userObj)
            .$promise
            .then(function(data){

                sessionStorage.userSession = data.access_token;
                sessionStorage.username = data.userName;
                $location.path('/home');
                notifyService.showInfo('Login Success');
            }, function(error){
                console.log(error);

                for(var i in error.data.modelState){
                    notifyService.showError(error.data.modelState[i]);
                }
            });
    };
}]);

