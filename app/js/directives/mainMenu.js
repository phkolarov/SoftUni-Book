app.directive('mainMenu', function(){

    return{
        restrict: 'A',
        templateUrl: 'partials/main-menu.html',
        controller: 'MainMenuCtrl',
        replace: true
    }


});