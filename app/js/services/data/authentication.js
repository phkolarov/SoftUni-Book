app.factory('authentication', function () {

    var key = 'sessionToken';

    function saveUserData(data){

        console.log(data.access_token);
        localStorage.userSession = data.access_token;
    }

    function getUserData(data){
        return localStorage.userSession;
    }


    return{

        saveUser: saveUserData,
        getUser: getUserData
    }

});