app.directive('searchContent', function () {
    return{
        restrict: 'A',
        templateUrl: 'partials/directive/search-content.html',
        controller: 'MainMenuCtrl'
    }
});