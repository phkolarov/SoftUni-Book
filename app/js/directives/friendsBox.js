app.directive('friendsBox',function(){

    return{
        restrict: 'A',
        templateUrl: 'partials/firends-box.html',
        controller: 'friendsBoxCtrl',
        replace: true

    }
} );