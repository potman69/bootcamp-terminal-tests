module.exports = function allPaarl(string){  
   var array = string.split(', '); 
   var reg = [];
for (var i=0;i<array.length;i++){    
  var numbers = array[i];
  if(numbers.startsWith('CJ')){
    reg.push(numbers)   
  }  
  }  
  return reg;
}