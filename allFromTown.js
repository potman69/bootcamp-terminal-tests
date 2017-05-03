


module.exports = function allFromTown(plateList,location){
  var sepList = plateList.split(",");
  var pPlates = [];
  for(var i=0;i<sepList.length;i++){
  var origPlates = sepList[i];
    if (origPlates.startsWith(location)){
    pPlates.push(origPlates);      
    }      
  }
	return pPlates;
}