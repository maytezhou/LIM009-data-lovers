window.worldBank = {
  getInitialsIndicatorCodeValues : (array) => {//[{},{},{}...]
     const newArrayStrings = [];
     for(let i = 0; i < array.length; i++){
        const string = array[i].indicatorCode.slice(0,3);
        newArrayStrings.push(string);
     }
        return newArrayStrings;//["","",""...]
    },
    
    getUniqueInitialsIndicatorCodeValues : (array) => {//[{},{},{}...]
     const newArrayUniqueValues = [];
     for(let i = 0; i <array.length; i++){
       if(newArrayUniqueValues.indexOf(array[i]) === -1){
         newArrayUniqueValues.push(array[i])
       }
     }
     
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
 
   orderIndicatorNameOfAnObjectByAlphabet : (arrObject,userSortOrder) => {//[{},{},{}] y value de la opcion seleccionada por el usuario
     if(userSortOrder === "ascendant"){
       arrObject.sort(function (a,b) {
         return a.indicatorName.localeCompare(b.indicatorName)})
   }
     else if(userSortOrder === "descendant"){
       arrObject.sort(function (b,a) {
         return a.indicatorName.localeCompare(b.indicatorName)})
   }
     return arrObject;
   },
   filterByIndicatorNameSelectedByUser : (arrayObj3,indicatorName1SelectedByUser) => {//[{},{}...] y  condicion: IndicatorName o IndicatorId selected by user 
   let oneIndicator =[];
   for (let i = 0; i < arrayObj3.length; i++) {
     arrayObj3[i]
       if(arrayObj3[i]["indicatorCode"]===indicatorName1SelectedByUser){
         oneIndicator.push(arrayObj3[i]);
     }
  }
  return oneIndicator;//[{}];
  },
   
   getYearsValueOfOneIndicatorSelectedByUser : (arrayOfOneObj2,indicatorNameSelectedByUser) => {//[{}] y domElementSelected/IndicatorName selected by User
   let arrOfArrIndicatorDataKeys;
  
     if (arrayOfOneObj2[0].indicatorCode === indicatorNameSelectedByUser) {
       arrOfArrIndicatorDataKeys=(Object.keys(arrayOfOneObj2[0].data));
      }
     
   
      return arrOfArrIndicatorDataKeys;//array Of Years of one indicator
 },
   getPorcentageValuesOfOneIndicatorSelectedByUser: (objOneIndicator,arrOfYears) => {//  years of indicatorselected [1960,1961,...] y [{}] indicatorselected
     let indicatorsValuePercentageOfOneIndicator=[];
     for (let i = 0; i < arrOfYears.length; i++) {
       //console.log(objOneIndicator[0]);
       //console.log(objOneIndicator[0].data);
       //console.log(arrOfYears[0]);
       //console.log(objOneIndicator[0].data[arrOfYears[i]]);
      if( objOneIndicator[0].data[arrOfYears[i]]!==""){
       indicatorsValuePercentageOfOneIndicator.push(objOneIndicator[0].data[arrOfYears[i]])
       }
     }
     return indicatorsValuePercentageOfOneIndicator ;//[porcentage,num,num]
   },
 
   getAverage : (arrOfNum) => {
     let sumTotal=0;
     for (let i = 0; i < arrOfNum.length; i++) {
       sumTotal += arrOfNum[i]
       //console.log(sumTotal);
     }
     return ((sumTotal) / (arrOfNum.length)).toFixed(2);
   },
 
 };
 
