window.worldBank = {
  getInitialsIndicatorCodeValues : (array) => {//[{},{},{}...]
    const newArrayStrings = [];
    for(let i = 0; i < array.length; i++){
       const string = array[i].indicatorCode.slice(0,3);
       newArrayStrings.push(string);
    }
    console.log('Array con Initials indicatorsCodes: ' + newArrayStrings);
       return newArrayStrings;//["","",""...]
   },
   
   getUniqueInitialsIndicatorCodeValues : (array) => {//[{},{},{}...]
    const newArrayUniqueValues = [];
    for(let i = 0; i <array.length; i++){
      if(newArrayUniqueValues.indexOf(array[i]) === -1){
        newArrayUniqueValues.push(array[i])
      }
    }
    console.log('Array con valores unicos de Initials indicatorCodes: ' + newArrayUniqueValues);
    
    return newArrayUniqueValues;//["","",""...]
  },

  filterBySector : (arrayObj,initials) => {//[{},{}...] y domElementSelectedValue with 3 Initials
    let str = [];
    for (let i = 0; i < arrayObj.length; i++) {
      arrayObj[i]
        if(arrayObj[i]["indicatorCode"].startsWith(initials)){
          str.push(arrayObj[i])
      }
   }
   return str;//[{},{},{},{}...]
   },
};

