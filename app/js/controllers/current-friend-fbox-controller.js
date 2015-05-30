app.controller('CurrentFriendFBoxCtrl', [ '$scope','users','authentication', 'defaultProfilePicture','$routeParams',function ($scope,users,authentication,defaultProfilePicture,$routeParams) {




   var username = $routeParams.username;


    users.friendsData($routeParams.username)
        .$promise
        .then(function (data) {

            if(data.isFriend == true){

                $scope.box = true;
                users.getCurrentFriendFriends(username)
                    .$promise
                    .then(function (data) {

                        $scope.friends = data.friends;

                        $scope.box = $scope.isFriend;

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