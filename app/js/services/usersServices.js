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

    //HOMEPAGE DATA
    function friendsData(user){

        var user = user
        var serviceUrl = url + user;
        var resource = $resource(serviceUrl);

        return  resource.get();
    }



    function getProfilePage(){
        var user = localStorage.username;
        var serviceUrl = url + user + '/wall?StartPostId=&PageSize=5';
        var resource = $resource(serviceUrl);

        return resource.query()

    }

    function getFriendPage(){


    }

    return {
        login: login,
        register: register,
        logout: logout,
        getProfilePage: getProfilePage,
        friendsData: friendsData
    }
}]);

