window.worldBank = {
  getInitialsIndicatorCodeValues : (array) => {//[{},{},{}...]
    const newArrayStrings = [];
    for(let i = 0; i < array.length; i++){
       const string = array[i].indicatorCode.slice(0,3);
       newArrayStrings.push(string);
    }
    // console.log('Array con Initials indicatorsCodes: ' + newArrayStrings);
       return newArrayStrings;//["","",""...]
   },
   
   getUniqueInitialsIndicatorCodeValues : (array) => {//[{},{},{}...]
    const newArrayUniqueValues = [];
    for(let i = 0; i <array.length; i++){
      if(newArrayUniqueValues.indexOf(array[i]) === -1){
        newArrayUniqueValues.push(array[i])
      }
    }
    // console.log('Array con valores unicos de Initials indicatorCodes: ' + newArrayUniqueValues);
    
    return newArrayUniqueValues;//["","",""...]
  },
  uniqueCountryNames:(obj)=>{//{}
  arrayOfUniqueCountryNames1=[];
    const properties2=Object.keys(obj)//["",""...]
    for(let i=0;i<properties2.length;i++){//["",""...]
      obj[properties2[i]]//{} cada countryObject
      obj[properties2[i]]["indicators"]//[{},{},{}] array de Indicadores
      for(let j=0;j<obj[properties2[i]]["indicators"].length;j++){
        obj[properties2[i]]["indicators"][j]//{} indicador
        obj[properties2[i]]["indicators"][j]["countryName"]//"" strings 
        if(arrayOfUniqueCountryNames1.indexOf(obj[properties2[i]]["indicators"][j]["countryName"])===-1){
          arrayOfUniqueCountryNames1.push(obj[properties2[i]]["indicators"][j]["countryName"])
        }
      }
    }
  return arrayOfUniqueCountryNames1;//["",""]  array de strings countrynames UNICOS Perú,México,Chile,Brasil
  },
  uniqueCountryCodes:(obj)=>{//{}
  arrayOfUniqueCountryCodes1=[];
    const properties3=Object.keys(obj)//["",""...]
    for(let i=0;i<properties3.length;i++){//["",""...]
      obj[properties3[i]]//{} cada countryObject
      obj[properties3[i]]["indicators"]//[{},{},{}] array de Indicadores
      for(let j=0;j<obj[properties3[i]]["indicators"].length;j++){
        obj[properties3[i]]["indicators"][j]//{} indicador
        obj[properties3[i]]["indicators"][j]["countryCode"]//"" strings 
        if(arrayOfUniqueCountryCodes1.indexOf(obj[properties3[i]]["indicators"][j]["countryCode"])===-1){
          arrayOfUniqueCountryCodes1.push(obj[properties3[i]]["indicators"][j]["countryCode"])
        }
      }
    }
  return arrayOfUniqueCountryCodes1;//["","",""] array de strings countrycodes PER,MEX,BRA,CHL UNICOS
  },
  uniqueIndicatorsName:(obj)=>{//{}
arrayOfUniqueIndicatorsName1=[];
  const properties=Object.keys(obj)//["",""...]
  for(let i=0;i<properties.length;i++){//["",""...]
    obj[properties[i]]//{} cada countryObject
    obj[properties[i]]["indicators"]//[{},{},{}] array de Indicadores
    for(let j=0;j<obj[properties[i]]["indicators"].length;j++){
      obj[properties[i]]["indicators"][j]//{} indicador
      obj[properties[i]]["indicators"][j]["indicatorName"]//"" strings 
      if(arrayOfUniqueIndicatorsName1.indexOf(obj[properties[i]]["indicators"][j]["indicatorName"])===-1){
        arrayOfUniqueIndicatorsName1.push(obj[properties[i]]["indicators"][j]["indicatorName"])
      }
    }
  }
return arrayOfUniqueIndicatorsName1;//["",""]  array de strings indicatrosName UNICOS 
},
uniqueIndicatorsCode:(obj)=>{//{}
arrayOfUniqueIndicatorsCode1=[];
  const properties=Object.keys(obj)//["",""...]
  for(let i=0;i<properties.length;i++){//["",""...]
    obj[properties[i]]//{} cada countryObject
    obj[properties[i]]["indicators"]//[{},{},{}] array de Indicadores
    for(let j=0;j<obj[properties[i]]["indicators"].length;j++){
      obj[properties[i]]["indicators"][j]//{} indicador
      obj[properties[i]]["indicators"][j]["indicatorCode"]//"" strings 
      if(arrayOfUniqueIndicatorsCode1.indexOf(obj[properties[i]]["indicators"][j]["indicatorCode"])===-1){
        arrayOfUniqueIndicatorsCode1.push(obj[properties[i]]["indicators"][j]["indicatorCode"])
      }
    }
  }
return arrayOfUniqueIndicatorsCode1;//["","",""] array de strings indicatorcodes unicos  
},
  objToArrObj:(obj)=>{//{}
  const arr1=[];
  const properties=Object.keys(obj);
  for(let i =0;i<properties.length;i++){
    arr1.push(obj[properties[i]])
  }
return arr1;//[{},{},{},]
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
  objToArrOfUniqueStr:(obj)=>{//{}
  arrCountryNamesOfAllIndicators=[];
   const arrOfCountryObjects=worldBank.objToArrObj(obj);//[{},{},{},{}] Array de Objects c/u representa un país
   for(let i=0;i<arrOfCountryObjects.length;i++){
   arrOfCountryObjects[i] //{}
   arrOfCountryObjects[i]["indicators"]//[{},{},{},]array de objects Array de Indicadores
   for(let j=0;j<arrOfCountryObjects[i]["indicators"].length;j++){
    arrOfCountryObjects[i]["indicators"][j]//Object{} cada Indicador
   arrCountryNamesOfAllIndicators.push(arrOfCountryObjects[i]["indicators"][j]["countryName"]);
   }
  };  
 arrCountryNamesOfAllIndicators;//["","",""...] arr con los cuntrynames repetidos
const arrUniqueCountryNames=worldBank.getUniqueCountryNamesOfAllIndicators(arrCountryNamesOfAllIndicators);//["","",""...] arr con los contrynames unicos
return arrUniqueCountryNames;//["","",""...] arr con los countrynames unicos
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




