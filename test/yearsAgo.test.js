const yearsAgo = require('../yearsAgo');

const assert = require('assert');

describe('should test for my yearsAgo function',function(){
    
  it('should test for my yearsAgo function',function(){
    assert.equal(yearsAgo('2010'),7)
  }); 
});
