app.controller('EditProfileCtrl', ['$scope','profile','$route','notifyService','defaultCoverPicture','defaultProfilePicture',function ($scope,profile,$route,notifyService,defaultCoverPicture,defaultProfilePicture) {




    profile.getProfileInfo()
        .$promise
        .then(function (data) {
            $scope.name = data.name;
            $scope.email = data.email;
            localStorage.profilePicture = data.profileImageData;
            localStorage.coverPicture = data.coverImageData;

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

            return defaultProfilePicture

        }else{
            return localStorage.profilePicture;
        }

    };

    $scope.cover = function () {

        if(localStorage.coverPicture == 'undefined'|| localStorage.coverPicture == 'null' ){

            return defaultCoverPicture;
        }else{
            return localStorage.coverPicture;
        }

    }

    $scope.changeProfileImageData = function(){
        $scope.editProfile.profileImageData = "data:image/jpg;base64," + $scope.editProfile.profileImageData.base64;

    };

    $scope.changeCoverImageData = function () {
        $scope.editProfile.coverImageData = "data:image/jpg;base64," + $scope.editProfile.coverImageData.base64;


    };



    $scope.saveProfileData = function () {


           if( $scope.editProfile){


               var obj = {};
               var name = $scope.editProfile.name;
               var email = $scope.editProfile.email;
               var gender = $scope.editProfile.gender;
               var profilePic = $scope.editProfile.profileImageData;
               var coverPic = $scope.editProfile.coverImageData;


               if(name){
                   obj.name = name;
               }
               if(email){
                   obj.email = email;
               }
               if(gender){
                   obj.gender = gender;
               }
               if(profilePic){
                   obj.profileImageData = profilePic
               }
               if(coverPic){
                   obj.coverImageData = coverPic;
               }

               if(name && email && gender && profilePic && coverPic){

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
