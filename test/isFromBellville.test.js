const isFromBellville = require('../isFromBellville');

const assert = require('assert');

describe('should return isFromBellville true',function(){
    
  it('should return isFromBellville true',function(){
    assert.equal(isFromBellville('CY 8347'),true)
  }); 
});

