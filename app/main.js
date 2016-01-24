"use strict";

// Load scripts synchroniusly
require('./comp2/comp2');

// Load scripts asynchroniusly
require(['./comp1/comp1'], function(comp1){
  console.log(comp1);
  comp1.box();
});
