//services come here
var fireBaseServices = angular.module('fireBaseServices', [], function($provide){
    $provide.factory("loginService", function($firebase, $firebaseAuth) {
        return {
            getAuth :  function(){
                var ref = new Firebase("https://resplendent-torch-4949.firebaseio.com");
                return $firebaseAuth(ref);
            }
        };
    });
});
