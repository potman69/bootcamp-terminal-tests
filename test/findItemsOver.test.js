const findItemsOver = require('../findItemsOver');

const assert = require('assert');


describe('should test for my findItemsOver function',function(){
    
  it('should test for my findItemsOver function',function(){
    assert.deepEqual(findItemsOver([{"name":"apples","qty":10},{"name":"pears","qty":19},{"name":"bananas","qty":17},{"name":"apples","qty":3}],[{"name":"apples","qty":40},{"name":"pears","qty":20},{"name":"bananas","qty":23},{"name":"apples","qty":37}]), [])
  }); 
});