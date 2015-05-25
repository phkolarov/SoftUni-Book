app.factory('post', ['$resource', 'baseServiceUrl', '$http','authentication',function ($resource, baseServiceUrl, $http, authentication) {

    authentication.setHeaders();


    var url = baseServiceUrl + 'Posts/';


    function likePost(id){

        var resource = $resource(url + id + '/likes');

        return resource.save()
    }

    function unlikePost(id){

        var resource = $resource(url + id + '/likes');

        return resource.delete();
    }

    function addComments(data,id){
        var resource = $resource(url + id + '/comments');

        return resource.save(data);
    }

    function moreComments(id){

        var resource = $resource(url + id + '/comments');

        return resource.query();
    }


    return{
        likePost: likePost,
        unlikePost: unlikePost,
        addComment: addComments,
        moreComments: moreComments
    }

}]);