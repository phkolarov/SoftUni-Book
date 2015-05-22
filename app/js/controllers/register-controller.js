app.controller('RegisterForm', ['$scope','$location', 'users', 'notifyService','authentication','$route',function($scope, $location, users, notifyService,authentication,$route){


    $scope.register = function (user) {

        var userDataObj = user;

        users.register(userDataObj)
            .$promise
            .then(function(data){

                console.log(data);
                authentication.saveUser(data);
                authentication.setHeaders();
                $route.reload();
                notifyService.showInfo('Register Success');
            }, function(error){

                console.log(error)
                for(var i in error.data.modelState){
                    notifyService.showError(error.data.modelState[i]);
                }
            });
    }

}]);