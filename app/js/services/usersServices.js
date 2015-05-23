app.factory('users', ['$resource', 'baseServiceUrl', '$http','authentication',  function ($resource, baseServiceUrl, $http, authentication) {

    authentication.setHeaders();

    var url = baseServiceUrl + 'users/';


    // LOGIN SERVICE
    function login(userDataObj) {

        var resource = $resource(
            url + 'login/'
        );

        return resource.save(userDataObj)
    };


    // REGISTER SERVICE
    function register(userDataObj){

        var resource = $resource(
            url + 'register/'
        );
        return resource.save(userDataObj)
    }

    //LOGOUT SERVICE

    function logout(data){
        var resource = $resource(
            url + 'logout/'
        );
        return resource.save(data)
    }

    //HOMEPAGE FRIENDS BOX
    function friendsBox(){


    }

    return {
        login: login,
        register: register,
        logout: logout,
        friendsBox: friendsBox
    }
}]);

