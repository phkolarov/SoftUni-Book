app.controller('MainMenuCtrl', ['$scope','users','authentication','$route', function ($scope,users, authentication,$route) {

    $scope.logout = function(){

        users.logout()
            .$promise
            .then(function (data) {
                authentication.logout();
                authentication.clearHeaders();
                $route.reload();
            },function(data){

                console.log(data);
            });
    }

}]);