app.controller('RegisterForm', ['$scope', 'users', 'notifyService',function($scope, users, notifyService){


    $scope.register = function (user) {

        var userDataObj = user;

        users.register(userDataObj)
            .$promise
            .then(function(data){

                sessionStorage.userSession = data.access_token;
                sessionStorage.username = data.userName;

                notifyService.showInfo('Register Success');
            }, function(error){

                console.log(error)
                for(var i in error.data.modelState){
                    notifyService.showError(error.data.modelState[i]);
                }
            });
    }



}]);