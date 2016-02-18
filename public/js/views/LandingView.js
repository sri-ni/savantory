define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!tpl/home.html',
  'hb_help_core'
], function($, _, Backbone, Handlebars, landingHB){

  var LandingView = Backbone.View.extend({
    el: "#main-content",

    events: {
      'click #login-fb': 'loginFacebook'
    },

    loginFacebook: function() {
      var ref = new Firebase("https://savantory.firebaseio.com");
      ref.authWithOAuthPopup("facebook", function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
          window.location.hash = "home";
          window.svntry = {
            user: {
              displayName: authData.facebook.displayName,
              firstName: authData.facebook.cachedUserProfile.first_name
            }
          }
        }
      });
    },

    render: function(){

      var template = Handlebars.compile(landingHB)
        , that = this;
        
      $(this.el).html(template({}));

    },

    initialize: function() {
    }
  });

  return LandingView;
});
