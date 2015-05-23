app.controller('MainMenuCtrl', ['$scope','users','authentication','notifyService','$route', function ($scope,users, authentication,notifyService, $route) {

    $scope.logout = function(){

        users.logout()
            .$promise
            .then(function (data) {
                authentication.logout();
                authentication.clearHeaders();
                notifyService.showInfo('Logout success')
                $route.reload();
            },function(data){

                authentication.logout();
                authentication.clearHeaders();
                notifyService.showInfo('Logout success')
                $route.reload();
            });
    }

}]);