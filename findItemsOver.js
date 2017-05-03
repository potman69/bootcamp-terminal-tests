module.exports = function findItemsOver(shoppingList,threshold){  
  var sum = [];
  for(var i=0;i<shoppingList.length;i++){
    var List = shoppingList[i];    
    if (List.qty > threshold){
      sum.push(List);
        }   
  }
  
  return sum;
}