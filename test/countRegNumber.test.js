const countRegNumber = require('../countRegNumber');

const assert = require('assert');

describe('should test for my countRegNumber function',function(){
    
  it('should test for my countRegNumber function',function(){
    assert.equal(countRegNumber('CA 1234, CY 84747, CM 123455'), 3)
  }); 
});
