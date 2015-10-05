define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  
  var BlogModel = Backbone.Model.extend({
  	urlRoot: "/blog"
  });

  return BlogModel;

});