app.directive('friendsRequests', function () {
    return{
        restrict: 'A',
        templateUrl: 'partials/directive/friends-request.html',
        controller: 'FriendsRequests'
    }
});