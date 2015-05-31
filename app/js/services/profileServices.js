app.factory('profile', ['$resource', 'baseServiceUrl', '$http','authentication',  function ($resource, baseServiceUrl, $http, authentication) {


    authentication.setHeaders();


    var url = baseServiceUrl + 'me/';



    function getProfileInfo() {

        var resource = $resource(url);

        return resource.get()
    }


    function setProfileInfo(data){

        var resource = $resource(url, null,
            {
                'update': { method:'PUT' }
            });

        return resource.update(data);
    }

    function getFriendsRequests(){

    var resource = $resource(url+ 'requests');

        return resource.query()
    }

    function acceptRequest(requestId){

        var serviceUrl = url + 'requests/'+ requestId+ '?status=approved';
        var resource = $resource(serviceUrl, null,
            {
                'update': { method:'PUT' }
            });

        return resource.update();
    }

    function getFriends(){
        var resource = $resource(url+ 'friends');

        return resource.query();
    }

    function getNewsFeed(){
     var resouce = $resource(url + 'feed?StartPostId=&PageSize=5');


        return resouce.query();
    }

    function sendFriendRequest(username){
        var resource = $resource(url+'/requests/'+ username);

        return resource.save()
    }

    function changePassword(obj){
        var serviceUrl = url+'/changepassword';
        var resource = $resource(serviceUrl, null,
            {
                'update': { method:'PUT' }
            });

        return resource.update(obj);
    }

    return{
        getProfileInfo: getProfileInfo,
        setProfileInfo: setProfileInfo,
        getRequests: getFriendsRequests,
        acceptRequest: acceptRequest,
        getFriends: getFriends,
        getNewsFeed: getNewsFeed,
        sendFriendRequest:sendFriendRequest,
        changePassword:changePassword
    }


}]);