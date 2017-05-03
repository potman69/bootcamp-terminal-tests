module.exports = function fromWhere(number){
  if (number == 'CY'){
    return 'Bellville'      
      }
  else if (number == 'CJ'){
    return 'Paarl'           
           }
  else if(number == 'CA'){
    return 'Cape Town'
          }
  else {
    return 'Some other place!'
  }
}