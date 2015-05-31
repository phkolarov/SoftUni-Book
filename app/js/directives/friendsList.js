app.directive('friendsList', function () {
    return{
        restrict: 'A',
        templateUrl: 'partials/directive/full-friends-list.html',
        controller: 'FullFriendsCtrl'
    }
});