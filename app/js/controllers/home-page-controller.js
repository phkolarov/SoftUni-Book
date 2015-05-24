app.controller('HomePageCtrl', ['$scope', '$route', function ($scope, $route) {



    $scope.invates = function () {

           if(showInvates.show=='false') {
               showInvates.show = 'true';

               console.log(showInvates.show)
           }
            else{
               showInvates.show = 'false';

               console.log(showInvates.show)
           }




    }



}]);