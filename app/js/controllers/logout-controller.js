app.controller('logout', ['$scope','$location','$route', 'users', 'notifyService','authentication','$timeout',function($scope,$location, $route,users, notifyService,authentication,$timeout) {





    $timeout(function logoutFunc( ){

        users.logout()
            .$promise
            .then(function (data) {
                //authentication.logout();
                //authentication.clearHeaders();
                //notifyService.showInfo('Logout success');
                //$route.reload();
                localStorage.clear();
                authentication.clearHeaders();
                notifyService.showInfo('Logout Success');
                $location.path('/');
            },function(data){

                authentication.logout();
                authentication.clearHeaders();
                notifyService.showInfo('Logout Error');
                $route.reload();
            });

    }, 5000);
    //$scope.logout = function(){
    //    users.logout()
    //        .$promise
    //        .then(function(data){
    //
    //        }, function(error){
    //
    //            notifyService.showError('Error on logout');
    //        });
    //}


}]);
