app.controller('MainMenuCtrl', ['$scope','users','authentication','notifyService','$route','profile','defaultProfilePicture', function ($scope,users, authentication,notifyService, $route,profile,defaultProfilePicture) {

    $scope.logout = function(){

        users.logout()
            .$promise
            .then(function (data) {
                authentication.logout();
                authentication.clearHeaders();
                notifyService.showInfo('Logout success')
                $route.reload();
            },function(data){

                authentication.logout();
                authentication.clearHeaders();
                notifyService.showInfo('Logout success')
                $route.reload();
            });
    };

    $scope.show = true;

    $scope.invates = function () {
        $scope.show = !$scope.show;
    };

    profile.getRequests()
        .$promise
        .then(function (data) {

            $scope.count = function () {

            if(data.length > 0){

                $scope.color = {"color":"#f39c12", "font-weight": "bold" }
                return ' - '+ data.length;
            }
        }

        }, function (error) {
            console.log(error);
        })

    var defaultPicture =  defaultProfilePicture;

    $scope.defaultPicture = defaultPicture

    $scope.intest = function (input) {

       if(input){
           users.searchByNameUser(input)
               .$promise
               .then(function (data) {
                   $scope.searchingUsers= data;

               }, function (error) {
                   console.log(error)
               })
       }
    };

    $scope.searchFunc = function () {

        if($scope.search){

            $scope.showSearch = true;

        }else{
            $scope.showSearch = false;
        }
    }






}]);