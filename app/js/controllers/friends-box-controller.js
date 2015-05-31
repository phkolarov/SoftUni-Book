app.controller('FriendsBoxCtrl', [ '$scope','profile','authentication', 'defaultProfilePicture',function ($scope,profile,authentication,defaultProfilePicture) {


    profile.getFriends()
        .$promise
        .then(function (data) {
            $scope.countOfFriends = data.length ;
            if(data.length>6){
                data.slice(0,6)
            }
            $scope.friends = data;

        }, function(error){
            console.log(error)
        });


        $scope.defaultProfileImageData = defaultProfilePicture;

}]);