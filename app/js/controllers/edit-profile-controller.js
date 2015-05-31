app.controller('EditProfileCtrl', ['$scope','profile','$route','notifyService','defaultCoverPicture','defaultProfilePicture',function ($scope,profile,$route,notifyService,defaultCoverPicture,defaultProfilePicture) {



    $scope.oldPassword = localStorage.userPassword;

    profile.getProfileInfo()
        .$promise
        .then(function (data) {
            $scope.name = data.name;
            $scope.email = data.email;
            localStorage.profilePicture = data.profileImageData;
            localStorage.coverPicture = data.coverImageData;

            $scope.gender = data.gender
            if(data.gender == 1){

                $scope.genderPic = 'img/male.png';
            }
            if(data.gender == 2){

                $scope.genderPic = 'img/female.png';
            }
            if(data.gender == 0){

                $scope.genderPic = 'img/other.jpg';
            }


        }, function(error){
            console.log(error)
        });


    $scope.picture = function () {

        if(localStorage.profilePicture == 'undefined'|| localStorage.profilePicture == 'null' ){

            localStorage.profilePicture = defaultProfilePicture;
            return defaultProfilePicture

        }else{
            return localStorage.profilePicture;
        }

    };

    $scope.cover = function () {

        if(localStorage.coverPicture == 'undefined'|| localStorage.coverPicture == 'null' ){

            localStorage.coverPicture = defaultCoverPicture;
            return defaultCoverPicture;
        }else{
            return localStorage.coverPicture;
        }

    }

    $scope.changeProfileImageData = function(){
        $scope.profileImage = "data:image/jpg;base64," + $scope.editProfile.profileImageData.base64;


    };

    $scope.changeCoverImageData = function () {
        $scope.coverImage = "data:image/jpg;base64," + $scope.editProfile.coverImageData.base64;


    };

    $scope.saveNewPass = function () {

        if($scope.newPass&& $scope.rnewPass && $scope.newPass == $scope.rnewPass && $scope.newPass.length >= 6 && $scope.rnewPass.length >= 6){

            var obj = {
                oldPassword : $scope.oldPassword,
                newPassword:$scope.newPass,
                confirmPassword:$scope.rnewPass
            };

            profile.changePassword(obj)
                .$promise
                .then(function (data) {

                    localStorage.userPassword = $scope.newPass;
                    notifyService.showInfo(data.message);
                    $route.reload();
                }, function (error) {
                    console.log(error)
                })


        }else if ($scope.newPass.length < 6 || $scope.rnewPass.length < 6){
            notifyService.showError('Password must be at least 6 characters in length');

        }
        else{
            notifyService.showError('Password Not Match');
        }
    };


    $scope.saveProfileData = function () {


           if( $scope.editProfile){


               var obj = {};
               var name = $scope.editProfile.name;
               var email = $scope.editProfile.email;
               var gender = $scope.gender;
               var profilePic = $scope.profileImage;
               var coverPic = $scope.coverImage;





               if(name){
                   obj.name = name;
               }
               if(email){
                   obj.email = email;
               }
               if(gender){
                   obj.gender = gender;
               }
               if(!profilePic){
                   obj.profileImageData = localStorage.profilePicture
               }else{
                   obj.profileImageData = profilePic;
               }
               if(!coverPic){
                   obj.coverImageData = localStorage.coverPicture;
               }else{
                   obj.coverImageData = coverPic;
               }

               console.log(obj);
               if(name && email && gender ){

                   console.log(obj);
                   profile.setProfileInfo(obj)
                       .$promise
                       .then(function(data){
                           notifyService.showInfo('You successfully edited your profile')
                           $route.reload();
                       }, function (error) {
                           console.log(error);
                       });
               }
           }
    }

}]);
