app.controller('logout', ['$scope', 'users', 'notifyService',function($scope,users, notifyService) {



    $scope.logout = function(){

        users.logout()
            .$promise
            .then(function(data){

                sessionStorage.clear();
                notifyService.showInfo('Logout Success');
            }, function(error){

                console.log(error);
                notifyService.showError('Error');
            });
    }


}]);
