module.exports = function findItemsOver20(shoppingList){  
  var sum = [];
  for(var i=0;i<shoppingList.length;i++){
    var List = shoppingList[i];    
    if (List.qty > 20){
      sum.push(List);
        }   
  }
  
  return sum
}