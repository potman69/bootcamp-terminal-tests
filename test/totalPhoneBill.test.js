const totalPhoneBill = require('../totalPhoneBill');

const assert = require('assert');


describe('should test for my totalPhoneBill function',function(){
    
  it('should test for my totalPhoneBill function',function(){
    assert.equal(totalPhoneBill('call, sms, call, sms, sms'), 'R7.45')
  }); 
});