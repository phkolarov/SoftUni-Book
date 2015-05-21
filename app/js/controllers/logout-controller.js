app.controller('logout', ['$scope','$location', 'users', 'notifyService',function($scope,$location, users, notifyService) {



    $scope.logout = function(){

        users.logout()
            .$promise
            .then(function(data){

                sessionStorage.clear();

                $location.path('/');
                notifyService.showInfo('Logout Success');
            }, function(error){

                console.log(error);
                notifyService.showError('Error');
            });
    }

    $scope.str = 'String'

}]);
