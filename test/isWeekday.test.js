const isWeekday = require('../isWeekday');

const assert = require('assert');

describe('should test for my isWeekday function',function(){
    
  it('should test for my isWeekday function',function(){
    assert.equal(isWeekday('Saturday'), false)
  }); 
});
