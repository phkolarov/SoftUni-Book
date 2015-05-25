app.controller('NewsFeedCtrl', ['$scope', 'profile','post','notifyService','$route',function($scope,profile,post,notifyService,$route){


        profile.getNewsFeed()
            .$promise
            .then(function (data) {

                $scope.feed = data;
                console.log(data)
            }, function (error) {
                console.log(error);
            });

    $scope.msg = 'message';

    $scope.showComment = false;

    $scope.comment = function(){
        $scope.showComment = !$scope.showComment;
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



    $scope.checkComments = function (count) {
        if(count>3){

            $scope.moreComments = true;

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
    }






}]);