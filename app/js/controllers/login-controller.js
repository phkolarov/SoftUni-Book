app.controller('LoginForm', ['$scope', 'users', 'notifyService',function($scope,users, notifyService){

    users.login('admin','administrator')
        .$promise
        .then(function(data){
            notifyService.showInfo('Login Success');
            console.log(data)
        }, function(error){
            notifyService.showError('Invalid username or password');
            console.log(error)
        });

}]);

