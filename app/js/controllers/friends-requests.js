app.controller('FriendsRequests', ['$scope','profile','$route', 'notifyService', function ($scope,profile,$route,notifyService) {


    profile.getRequests()
        .$promise
        .then(function (data) {
            console.log(data)
            $scope.requests = data;
        }, function (error) {
            console.log('FF')
            console.log(error)
        })


   $scope.accept = function(id){

        profile.acceptRequest(id)
            .$promise
            .then(function (data) {
                notifyService.showInfo('Friend request successfully approved.')
                $route.reload();
            }, function (error) {
                notifyService.showError('Error on approve request')
            })
    }

    $scope.cancel = function () {
        $route.reload();
    }


}]);