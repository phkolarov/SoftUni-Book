app.factory('users', ['$resource', 'baseServiceUrl', function ($resource, baseServiceUrl) {


    var url = baseServiceUrl + 'users/';

    function login(username, passwrd) {

        var resource = $resource(
            baseServiceUrl + 'login/'
        );

        var userdata = {
            username: username,
            password: passwrd
        };

        return resource.save(userdata)
    };

    function register(username, password, confirmpassword, name, email, gender){



    }



    return {
        login: login
    }
}]);