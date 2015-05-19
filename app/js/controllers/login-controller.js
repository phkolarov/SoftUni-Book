app.controller('LoginForm', ['$scope', 'users', 'notifyService',function($scope,users, notifyService){

    users.login('admin','administrator')
        .$promise
        .then(function(data){
            console.log(data)
        }, function(error){
            console.log(error)
        });


   var n = notifyService.showInfo('success')
}]);