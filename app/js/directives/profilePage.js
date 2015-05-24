app.directive('profilePage', function () {
    return{
        restrict: 'A',
        templateUrl: 'partials/directive/profile-page.html',
        controller: 'ProfilePageCtrl'
    }
});