"use strict";

// Load scripts synchroniusly
require('./components/shared/shared');
require('./components/comp2/comp2');

// Load scripts asynchroniusly
require(['./components/comp1/comp1'], function(comp1){
  console.log(comp1);
  comp1.box();
  let name= "Lukasz";
  console.log(name);
});
