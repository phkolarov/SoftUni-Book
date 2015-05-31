app.controller('HomePageCtrl', ['$scope','$location', '$route','$routeParams', 'defaultProfilePicture',function ($scope,$location, $route,$routeParams,defaultProfilePicture) {


    $scope.defaultProfilePicture = defaultProfilePicture;

    if($routeParams.username == localStorage.username){

        $location.path('/profile')

    }

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