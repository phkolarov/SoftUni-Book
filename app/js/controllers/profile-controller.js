app.controller('ProfilePageCtrl', ['$scope', 'profile','notifyService', function ($scope, profile,notifyService) {


    profile.getProfileInfo()
        .$promise
        .then(function (data) {

            $scope.picture = data.profileImageData;
            $scope.cover = data.coverImageData;

        }, function (error) {
            notifyService.showError('Error - can\'t load profile page')
        })

}]);