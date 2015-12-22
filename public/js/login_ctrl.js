goog.provide('gn311.LoginCtrl');

gn311.LoginCtrl = function($location, loginService) {
    this.location_ = $location;
    this.auth_ = loginService.getAuth();
};

gn311.LoginCtrl.prototype.loginAsFacebook = function() {
    this.auth_.$authWithOAuthPopup("facebook");
};

gn311.LoginCtrl.prototype.loginAsGoogle = function() {
  this.auth_.$authWithOAuthPopup("google");
};

gn311.LoginCtrl.prototype.loginAsGuest = function() {
  alert('guest');
};

