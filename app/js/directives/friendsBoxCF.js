app.directive('friendsBoxCF', function () {
    return{
        restrict: 'A',
        templateUrl: 'partials/directive/current-friends-box.html',
        controller: 'CurrentFriendFBoxCtrl'
    }
});