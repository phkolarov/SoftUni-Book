app.directive('friendsBox',function(){

    return{
        restrict: 'A',
        templateUrl: 'partials/directive/firends-box.html',
        controller: 'friendsBoxCtrl',
        replace: true

    }
} );