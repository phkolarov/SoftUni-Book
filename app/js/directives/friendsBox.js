app.directive('friendsBox',function(){

    return{
        restrict: 'A',
        templateUrl: 'partials/directive/friends-box.html',
        controller: 'FriendsBoxCtrl',
        replace: true

    }
} );