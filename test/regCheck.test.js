const regCheck = require('../regCheck');

const assert = require('assert');

describe('should test for my regCheck function',function(){
    
  it('should test for my regCheck function',function(){
    assert.equal(regCheck('CA 12345 GP', 'GP'),true)
  }); 
});
