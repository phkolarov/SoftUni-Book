app.factory('authentication', ['$http', function ($http) {

    var key = 'sessionToken';

    function saveUserData(data){

        localStorage.userSession = data.access_token;
        localStorage.username = data.userName;

        console.log(data);
    }

    function getUserData(){
        return localStorage.userSession;
    }

    function logout(){
        localStorage.clear();
    }

    function setHeaders(){

        if(localStorage.userSession){
            $http.defaults.headers.common['Authorization'] = 'Bearer '+ localStorage.userSession;
        }else{
            console.log('Headers is Empty')
        }
    }

    function clearHeaders(){

            $http.defaults.headers.common['Authorization'] = '';
    }
    return{

        saveUser: saveUserData,
        getSession: getUserData,
        logout: logout,
        setHeaders: setHeaders,
        clearHeaders: clearHeaders
    }

}]);