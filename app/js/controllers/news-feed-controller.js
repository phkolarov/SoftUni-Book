app.controller('NewsFeedCtrl', ['$scope', 'profile',function($scope,profile){


        profile.getNewsFeed()
            .$promise
            .then(function (data) {

                $scope.feed = data;
                console.log(data)
            }, function (error) {
                console.log(error);
            })

    $scope.msg = 'message'

}]);