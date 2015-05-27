app.controller('ProfilePageCtrl', ['$scope', 'profile','notifyService','users','post','$route', function ($scope, profile,notifyService,users,post,$route) {


    profile.getProfileInfo()
        .$promise
        .then(function (data) {

            $scope.picture = data.profileImageData;
            $scope.cover = data.coverImageData;
            $scope.name = data.name

        }, function (error) {
            notifyService.showError('Error - can\'t load profile page')
        })

        users.getProfilePage()
            .$promise
            .then(function (data) {

                $scope.myWall = data;
                console.log(data)
            }, function (error) {
                console.log(error)
            })

    $scope.msg = 'message';

    $scope.showComment = false;

    $scope.comment = function(id){
        $scope.showComment = !$scope.showComment;
        $scope.checkCurrentCommentValue = id
    };




    $scope.likes = function (liked) {

        if(liked == false){
            $scope.like = 'like';
        }else{
            $scope.like = 'unlike';
        }

    };

    $scope.likeUnlikeFunc = function (id,liked) {

        if($scope.like == 'like'){
            $scope.like = 'unlike';
            post.likePost(id)
                .$promise
                .then(function (data) {
                    notifyService.showInfo('Liked')
                }, function (error) {
                    notifyService.showError('Error on like');
                })

        }else{
            $scope.like = 'like';
            post.unlikePost(id)
                .$promise
                .then(function (data) {
                    notifyService.showInfo('Unliked')

                }, function (error) {
                    notifyService.showError('Error on unlike');
                })
        }
    }   ;

    $scope.one = "123"

    $scope.postComment = function (current,id) {

        post.addComment({commentContent : current},id)
            .$promise
            .then(function (data) {
                notifyService.showInfo('Success comment')
                $route.reload()
            }, function (error) {
                notifyService.showError('You can\'t post nothing');
            })

    };



    $scope.checkComments = function (count, id) {
        if(count>3){

            $scope.moreComments = true;
            $scope.checkMoreCommentsValue = id;

        }else{
            $scope.moreComments = false;

        }
    };

    $scope.commentsList = false;

    $scope.showMoreComments = function (count,id) {
        $scope.commentsList = ! $scope.commentsList;

        if(count>3){

            post.moreComments(id)
                .$promise
                .then(function (data) {
                    var otherComments = [];

                    for (var i = 3; i < data.length; i++) {
                        otherComments.push(data[i]);
                    }
                    $scope.otherComments = otherComments;

                }, function (error) {
                    console.log(error)
                })
        };
    };

    $scope.username = localStorage.username;

    $scope.commentEdit = false;

    $scope.showEditField = function (id) {
        $scope.checkId = id;
        $scope.commentEdit = !$scope.commentEdit;
    };


    $scope.editComment = function (postId,commentId,data) {

        var obj = {commentContent: data};

        post.editComment(postId,commentId,obj)
            .$promise
            .then(function (data) {
                notifyService.showInfo('Edited');
                $route.reload()

            }, function (error) {
                console.log(error)
                notifyService.showError('Error on edit comment')
            })
    }


    $scope.deleteComment = function (postId,commentId) {

        post.deleteComment(postId,commentId)
            .$promise
            .then(function (data) {
                notifyService.showInfo('Deleted');
                $route.reload()

            }, function (error) {
                notifyService.showError('Error on delete comment')
            })
    }

    $scope.postMsg = function () {


        post. addPost($scope.myPost)
            .$promise
            .then(function (data) {
                notifyService.showInfo('Posted')
                $route.reload()
            }, function (error) {
                notifyService.showError('Error on post message');
                console.log(error)
            })
    }


}]);