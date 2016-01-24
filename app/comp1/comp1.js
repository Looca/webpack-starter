require('./comp1.css');
var $ = require('jquery');

var comp1 = {
  message: "Content for component 1",
  box: function(){
    $("body").append('<div class="component1"><p>'+ comp1.message+'</p></div>');
  },

}

module.exports = comp1;
