app.controller('FullFriendsCtrl', ['$scope','users','$routeParams','profile','defaultProfilePicture','notifyService','users',function ($scope,users, $routeParams,profile,defaultProfilePicture,notifyService) {

    $scope.defaultProfileImageData =defaultProfilePicture;

    if($routeParams.user == localStorage.username){

        profile.getFriends($routeParams.user)
            .$promise
            .then(function (data) {
                $scope.friends = data;
                console.log(data);
            }, function (error) {
                console.log(error)
            })


    }else if ($routeParams.user != localStorage.username){


        users.getFullFriendList( $routeParams.user)
            .$promise
            .then(function (data) {

                $scope.friends = data;
                console.log( $scope.friends)
            }, function (error) {
                $scope.box = false;
            })



    }else{
        console.log( 'error')
    }

}]);