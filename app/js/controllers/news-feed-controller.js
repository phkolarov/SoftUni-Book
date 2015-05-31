app.controller('NewsFeedCtrl', ['$scope', 'profile','post','notifyService','$route',function($scope,profile,post,notifyService,$route){


        profile.getNewsFeed()
            .$promise
            .then(function (data) {

                $scope.feed = data;
            }, function (error) {
                console.log(error);
            });

    $scope.msg = 'message';

    $scope.showComment = false;

    $scope.comment = function(id){
        $scope.showComment = !$scope.showComment;
        $scope.checkCurrentCommentValue = id
    };


    $scope.likeFunc = function (id) {

        post.likePost(id)
            .$promise
            .then(function (data) {
                notifyService.showInfo('Liked');
                $route.reload();

            }, function (error) {
                notifyService.showError('Error on like');
            })
    };

    $scope.unlikeFunc = function (id) {

        post.unlikePost(id)
            .$promise
            .then(function (data) {
                notifyService.showInfo('Unliked');
                $route.reload();

            }, function (error) {
                notifyService.showError('Error on unlike');

            })
    };

    $scope.likeComFunc= function (id,comId) {

        post.likeComment(id,comId)
            .$promise
            .then(function (data) {
                notifyService.showInfo('Liked');
                $route.reload();

            }, function (error) {
                notifyService.showError('Error on like');
            })
    };

    $scope.unlikeComFunc = function (id,comId) {

        post.unlikeComment(id,comId)
            .$promise
            .then(function (data) {
                notifyService.showInfo('Unliked');
                $route.reload();

            }, function (error) {
                notifyService.showError('Error on unlike');

            })

    };





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


    $scope.commentsList = false;
    $scope.hideShowComments = 'Show more comments';

    $scope.showMoreComments = function (id) {

        $scope.commentsList = !$scope.commentsList;

        if($scope.hideShowComments == 'Show more comments'){

            $scope.hideShowComments = 'Hide more comments'
        }else{
            $scope.hideShowComments = 'Show more comments'
        }
        $scope.curId = id;

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

    $scope.username = localStorage.username;

    $scope.commentEdit = false;

    $scope.showEditField = function (id) {
        $scope.checkId = id;
        $scope.commentEdit = !$scope.commentEdit;
    };


    $scope.changeComment = function (postId,commentId,data) {

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
    };

    $scope.deletePost = function (id) {
        post.deletePost(id)
            .$promise
            .then(function (data) {
                notifyService.showInfo('Deleted');
                $route.reload()
                console.log(data)
            }, function (error) {
                notifyService.showError('Error on delete post')
                console.log(error)
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


    $scope.editComment = false;

    $scope.edit = function (id, data) {
        $scope.editComment = !$scope.editComment;
        $scope.checkCurrentEditValue = id;
    };

    $scope.editPost = function (id, data ) {

        var obj = {
            postContent: data
        };

        post.editPost(id,obj)
            .$promise
            .then(function (data) {
                $route.reload();
                notifyService.showInfo('Edited');
            }, function (error) {
                $route.reload();
                notifyService.showError('Cannot edit post');
            })

    }

}]);