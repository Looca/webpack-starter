// Load scripts synchroniusly
require('./components/shared/shared.js');
var comp1 = './components/comp1/comp1.js';
var comp2 = require('./components/comp2/comp2.js');

// Load scripts asynchroniusly
require([comp1], function(comp1){
  console.log(comp1);
  comp1.box();
});
