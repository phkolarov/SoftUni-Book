app.controller('EditProfileCtrl', ['$scope','profile',function ($scope,profile) {


    $scope.message = 'I\' alive';

    profile.getProfileInfo()
        .$promise
        .then(function (data) {
            $scope.name = data.name;
            $scope.email = data.email;


            console.log(data);
        }, function(error){
            console.log(error)
        });


    $scope.fileSelected = function(fileInputField) {
        delete $scope.adData.imageDataUrl;
        var file = fileInputField.files[0];
        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();
            reader.onload = function() {
                $scope.adData.imageDataUrl = reader.result;
                $(".image-box").html("<img src='" + reader.result + "'>");
            };
            reader.readAsDataURL(file);
        } else {
            $(".image-box").html("<p>File type not supported!</p>");
        }
    };


}])