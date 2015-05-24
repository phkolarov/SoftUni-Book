app.factory('profile', ['$resource', 'baseServiceUrl', '$http','authentication',  function ($resource, baseServiceUrl, $http, authentication) {


    authentication.setHeaders();


    var url = baseServiceUrl + 'me/';



    function getProfileInfo() {

        var resource = $resource(url);

        return resource.get()
    };


    var resource = $resource(url, null,
        {
            'update': { method:'PUT' }
        });

    function setProfileInfo(data){

        return resource.update(data);
    }

    return{

        getProfileInfo: getProfileInfo,
        setProfileInfo: setProfileInfo
    }


}]);