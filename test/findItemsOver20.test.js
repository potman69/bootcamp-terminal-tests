const findItemsOver20 = require('../findItemsOver20');

const assert = require('assert');


describe('should test for my findItemsOver20 function',function(){
    
  it('should test for my findItemsOver20 function',function(){
    assert.deepEqual(findItemsOver20([{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}]), [{ name: 'pears', qty: 37 }, { name: 'bananas', qty: 27 }])
  }); 
});