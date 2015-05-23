app.controller('logout', ['$scope','$location', 'users', 'notifyService','authentication',function($scope,$location, users, notifyService,authentication) {



    $scope.logout = function(){

        users.logout()
            .$promise
            .then(function(data){
                localStorage.clear();
                $location.path('/');
                notifyService.showInfo('Logout Success');
            }, function(error){

                notifyService.showError('Error on logout');
            });
    }


}]);
