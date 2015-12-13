goog.provide('gn311.LoginCtrl');

gn311.LoginCtrl = function($scope, $location, loginService) {
    this.location_ = $location;
    this.auth_ = loginService.getAuth();
    $scope.loginAsFacebook = this.loginAsFacebook.bind(this);
    $scope.loginAsGoogle = this.loginAsGoogle.bind(this);
    $scope.loginAsGuest = this.loginAsGuest.bind(this);
};

gn311.LoginCtrl.prototype.loginAsFacebook = function() {
  this.auth_.$login('facebook');
};

gn311.LoginCtrl.prototype.loginAsGoogle = function() {
  this.auth_.$login('google');
};

gn311.LoginCtrl.prototype.loginAsGuest = function() {
  alert('guest');
};

