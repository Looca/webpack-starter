// Load scripts synchroniusly
require('./components/shared/shared.js');
require('./components/comp2/comp2.js');

// Load scripts asynchroniusly
require(['./components/comp1/comp1.js'], function(comp1){
  console.log(comp1);
  comp1.box();
});
