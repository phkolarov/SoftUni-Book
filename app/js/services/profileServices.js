app.factory('profile', ['$resource', 'baseServiceUrl', '$http','authentication',  function ($resource, baseServiceUrl, $http, authentication) {

    authentication.setHeaders();


    var url = baseServiceUrl + 'me/';



    function getProfileInfo() {

        var resource = $resource(url);

        return resource.get()
    };


    function setProfileInfo(data){

        var resource = $resource(url);

        return resource.set(data);
    }

    return{

        getProfileInfo: getProfileInfo,
        setProfileInfo: setProfileInfo
    }

}]);