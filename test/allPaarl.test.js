const allPaarl = require('../allPaarl');

const assert = require('assert');

describe('should test for my allPaarl function',function(){
    
  it('should test for my allPaarl function',function(){
    assert.equal(allPaarl('CJ1987GP, DA4523DI, CJ7364AP'),'CJ1987GP,CJ7364AP')
  }); 
});