const allFromTown = require('../allFromTown');

const assert = require('assert');


describe('should test for my allFromTown function',function(){
    
  it('should test for my allFromTown function',function(){
    assert.deepEqual(allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'),["CL 124", "CL 345", "CL 341"])
  }); 
});