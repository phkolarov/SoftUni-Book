app.directive('mainMenu', function(){

    return{
        restrict: 'A',
        templateUrl: 'partials/directive/main-menu.html',
        controller: 'MainMenuCtrl',
        replace: true
    }


});