app.controller('CurrentFriendFBoxCtrl', [ '$scope','users','authentication', 'defaultProfilePicture','$routeParams',function ($scope,users,authentication,defaultProfilePicture,$routeParams) {




  $scope.usernamefb = $routeParams.username;


    users.friendsData($routeParams.username)
        .$promise
        .then(function (data) {

            if(data.isFriend == true){

                $scope.box = true;
                users.getCurrentFriendFriends( $scope.usernamefb)
                    .$promise
                    .then(function (data) {

                        if(data.friends.length > 6){
                            data.friends = data.friends.slice(0.6);
                        }

                        $scope.countOfFriends = data.totalCount;
                        $scope.friends = data.friends;
                        $scope.box = $scope.isFriend;

                        console.log(data)
                    }, function (error) {
                        $scope.box = false;
                    })
            }else{
                $scope.box = false;
            }

        }, function (error) {
            console.log(error)
        });

    $scope.defaultProfileImageData = defaultProfilePicture;
}]);