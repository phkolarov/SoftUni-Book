app.factory('users', ['$resource', 'baseServiceUrl', '$http', function ($resource, baseServiceUrl, $http) {

    $http.defaults.headers.common['Authorization'] = 'Bearer '+ sessionStorage.userSession;

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

    function logout(){
        var resource = $resource(
            url + 'logout/'
        );
        return resource.save()
    }

    return {
        login: login,
        register: register,
        logout: logout
    }
}]);

