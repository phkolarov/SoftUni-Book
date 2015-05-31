app.controller('FullFriendsCtrl', ['$scope','users','$routeParams','profile','defaultProfilePicture','notifyService','users',function ($scope,users, $routeParams,profile,defaultProfilePicture,notifyService) {

    $scope.defaultProfileImageData =defaultProfilePicture;

    users.friendsData($routeParams.user)
        .$promise
        .then(function (data) {


            if(!data.hasPendingRequest && data.isFriend){
                users.getFullFriendList( $routeParams.user)
                    .$promise
                    .then(function (data) {

                        $scope.friends = data;
                        console.log( $scope.friends)
                    }, function (error) {
                        $scope.box = false;
                    })
            }
        }, function (error) {
            console.log(error)
        });

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

       if(true){


       }

    }else{
        console.log( 'error')
    }

}]);