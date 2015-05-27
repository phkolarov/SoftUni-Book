app.controller('CurrentFriendCtrl', ['$scope', '$route','$routeParams','users',function ($scope, $route,$routeParams,users) {


console.log($routeParams);

$scope.friend = false;

users.friendsData($routeParams.username)
    .$promise
    .then(function (data) {


        console.log(data)
        $scope.cfCoverImg = data.coverImageData;
        $scope.cfProfileImg = data.profileImageData;
        $scope.name = data.name;

    }, function (error) {
        console.log(error)
    })





}]);