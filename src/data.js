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
  getUniqueCountryNamesOfAllIndicators : (array) => {//["","",""...]
    const newArrayUniqueCountryNames = [];
    for(let i = 0; i <array.length; i++){
      if(newArrayUniqueCountryNames.indexOf(array[i]) === -1){
        newArrayUniqueCountryNames.push(array[i])
      }
    }
    console.log('Array con valores unicos de IndicatorsName: ' + newArrayUniqueCountryNames);
    
    return newArrayUniqueCountryNames;//["","",""...]
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
   
   //Falta Probar si las siguientes funciones funcionan:

   //Esto non funciona
   obtainingOnlyOneIndicatorData:(arrayPerSector,idOfIndicator)=>{//[{},{},{}...]
    arrayPerSector;
    idOfIndicator;
    let str="";
    for(let r=0;r<arrayPerSector.length;r++){
       if(arrayPerSector[r]["indicatorCode"]===idOfIndicator){
          arrayPerSector[r]
       }
   str+=arrayPerSector }
    return str+=arrayPerSector;//{} data object
   
    },
    arrOfArrStr:(arrOb)=>{//[{},{},{}..]
   const arrArrStr=[];
   for(let q=0;q<arrOb.length;q++){
     arrArrStr.push(Object.keys(arrOb[q].data));
 }
 return arrArrStr;//[["","",""...],["","",""...],["","",""...]...];
 },
 arrArrNum:(arrObje)=>{//[{data,countryname,..},{},{}..]
   arrObje;
   const newArrNum=[];
   for(let w=0;w<arrObje.length;w++){
 newArrNum.push(Object.values(arrObje[w].data));
   }
   return newArrNum;//[[num,num,num...],[num,num,num...],[num,num,num...]]
 
 },


 //Esta funcion aun no funciona 
 showListOfAnyArrayIndicator:(arrayOfIndi,arrDataKeys,arrDataValues,elementDom)=>{//[{},{},{},{}] y [["","",""...],["","",""...],["","",...],...] y [[num,num,...],[num,num,...]...]
   arrayOfIndi;
   arrDataKeys;
   arrDataValues;
   for (let t = 0; t<arrayOfIndi.length; t++) {//[{},{},{}...]
     elementDom.innerHTML += `
         <p><strong>Indicador:</strong> ${arrayOfIndi[t].indicatorName} en ${arrayOfIndi[t].countryName}</p>
         `;
     }
     for (let s=0;s<arrDataKeys[t].length;s++){
       elementDom.innerHTML += `
       <li>${dataKeysPeru[t][s]}: ${dataValuesPeru[t][s]}</li>
       `
       // console.log(mostrarData(dataKeysPeru[0][i], dataValuesPeru[0][i]))
   }
 
 },
 arrayOfDataObjects:(arrOfOb)=>{//[{},{},{}...]  //Array de Objects -Array de Indicadores
 arrOfOb;
 newArrOfObj=[];
 for(let x=0;x<arrOfOb.length;x++){
     newArrOfObj.push(arrOfOb[x].data)
 }
 return newArrOfObj;//[{},{},{}...] array de Objects/-Array de Data Objects
 },

 //No funciona
 arrOfStrIndicatorCode:(arrOb)=>{//[{},{},{}...]//Array de Indicadores
     newArrStr=[];
     arrOb;
     for(let i=0;i<arrOb.length;i++){
         newArrStr.push(arrOb[i].indicatorCode)
     }
     newArrStr;//["","",""...] Array de Strings  c/u es el varlo de IndicatorCode
 },

 //Esta funcion aun  no funciona 
 findTheUniqueObj:(arrObjects1,arrOfUniqueProperty)=>{//["","",""...] Array de Strings  c/u es el valor String unico de una propiedad  IndicatorName,IndicatorCode
    arrObjects1;
    arrOfUniqueProperty;
    let uniqueOb;
    for(let i=0;i<arrOfUniqueProperty.length;i++){
        uniqueOb=arrObjects1.find((e)=>{e[arrOfUniqueProperty[i]]===arrOfUniqueProperty[i]});
    }
   return uniqueOb; //retorna un {} Indicador de acuerdo acuerdo a cualquier parametro con valor único

}
 
};




