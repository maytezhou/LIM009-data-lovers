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

// FILTER BUTTON
btnFilter.addEventListener('click', () => {
  let filterIndicatorValue = filterIndicatorCode.value;
  console.log(filterIndicatorValue);
  const dataFiltrada = filterBySector(worldBankDataPeru, filterIndicatorCode.value);
  console.log(dataFiltrada);
  
 
});





//La lógica //
// Funcion que tiene como input ////[{data:{key:value},indicatorCode:"",...},{data:..},{data:...}..]
//Que retorna  [["keys","",""...],["keys","",""...],["keys","",""...]...]Array de arrays(Strings);
const newArrayDataKeys = [];
for (let i = 0; i < worldBankDataPeru.length; i++) {//[{},{},{}..]
    newArrayDataKeys.push(Object.keys(worldBankDataPeru[i].data));
    //console.log(Object.keys(worldBankDataPeru[i].data));
}
 console.log(newArrayDataKeys);//[["","",""...],["","",""...],["","",""...]...]Array de arrays(Strings years);


//Creando una funcion 
// Funcion que tiene como input //[{},{},{}..]
//Que retorna  [["","",""...],["","",""...],["","",""...]...]Array de arrays(Strings years);
const arrOfArrStr=(arrOb)=>{//[{},{},{}..]
  const arrArrStr=[];
  for(let q=0;q<arrOb.length;q++){
    arrArrStr.push(Object.Keys(arrOb[q].data));
}
return arrArrStr;//[["","",""...],["","",""...],["","",""...]...];
}






//La lógica
// Funcion que tiene como input ////[{},{},{}..]
//Que retorna [[num,num,num...],[num,num,num...],[num,num,num...]]

const newArrayDataValues = [];
for (let i = 0; i < worldBankDataPeru.length; i++) {//[{},{},{},{},{}..]
    newArrayDataValues.push(Object.values(worldBankDataPeru[i].data));
}
// console.log(newArrayDataValues);//[[num,num,num...],[num,num,num...],[num,num,num...]] percentage Array de arrays (percentage numbers);
  

//Creandouna funcion que tiene como input [{},{},{}..]
//Que retorna [[num,num,num...],[num,num,num...],[num,num,num...]]
const arrArrNum=(arrObje)=>{//[{data,countryname,..},{},{}..]
  arrObje;
  const newArrNum=[];
  for(let w=0;w<arrObje.length;w++){
newArrNum.push(Object.values(arrObje[w].data));
  }
  return newArrNum;//[[num,num,num...],[num,num,num...],[num,num,num...]]

};
arrArrNum(worldBankDataPeru);
console.log(arrArrNum(worldBankDataPeru));






// FUNCIÓN PARA MOSTRAR DATA EN DOM// PROBANDO SOLO CON UNO //COACHING DE DANI//
//La lógica
const showDataPeru = (dataPeru, dataKeysPeru, dataValuesPeru) => {//[{},{},{},{}] y [["","",""],["","",""],["","";]...] y [[num],[num]...]
  for (let i = 0; i < 1; i++) {//[{},{},{}...]
  showData.innerHTML += `
      <p><strong>Indicador:</strong> ${dataPeru[0].indicatorName} en ${dataPeru[0].countryName}</p>
      `;
  }
  for (let i=0;i<dataKeysPeru[0].length;i++){
      showData.innerHTML += `
      <li>${dataKeysPeru[0][i]}: ${dataValuesPeru[0][i]}</li>
      `
      // console.log(mostrarData(dataKeysPeru[0][i], dataValuesPeru[0][i]))
  }
  // console.log(dataKeysPeru[0]);
  // console.log(dataValuesPeru[0]);
};
showDataPeru (worldBankDataPeru,newArrayDataKeys, newArrayDataValues);



//Funcion Para Mostar en Dom  años y numbers como lista// Funcion para cualquier arraydeObjects
const showListOfAnyArrayIndicator=(arrayOfIndi,arrDataKeys,arrDataValues)=>{//[{},{},{},{}] y [["","",""...],["","",""...],["","",...],...] y [[num,num,...],[num,num,...]...]
  arrayOfIndi;
  arrDataKeys;
  arrDataValues;
  for (let t = 0; t<arrayOfIndi.length; t++) {//[{},{},{}...]
    showData.innerHTML += `
        <p><strong>Indicador:</strong> ${arrayOfIndi[t].indicatorName} en ${arrayOfIndi[t].countryName}</p>
        `;
    }
    for (let s=0;s<arrDataKeys[t].length;s++){
      showData.innerHTML += `
      <li>${dataKeysPeru[t][s]}: ${dataValuesPeru[t][s]}</li>
      `
      // console.log(mostrarData(dataKeysPeru[0][i], dataValuesPeru[0][i]))
  }

}
