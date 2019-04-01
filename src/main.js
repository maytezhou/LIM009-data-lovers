
const arrDataWorldBankMexico=window.WORLDBANK.MEX.indicators;//[{},{},{}...]
//console.log(arrDataWorldBankMexico);
const arrDataWorldBankChile=window.WORLDBANK.CHL.indicators;//[{},{},{}...]
//console.log(arrDataWorldBankChile);
const arrDataWorldBankBrasil=window.WORLDBANK.BRA.indicators;//[{},{},{}...]
//console.log(arrDataWorldBankBrasil);
const arrDataWorldBankPeru = window.WORLDBANK.PER.indicators;//[{},{},{}...]


const showInfoData = document.getElementById('show-info-data');
const showFilteredCategory = document.getElementById('show-filtered-category');
const showFilteredIndicatorNames = document.getElementById('show-filtered-indicator-names');
const selectIndicatorCodeElement = document.getElementById('select-indicator-code');
const selectCountryName = document.getElementById('select-country-name');
const btnSearch = document.getElementById('btn-search');
const arrUniqueInitialsCode = worldBank.getUniqueInitialsIndicatorCodeValues(worldBank.getInitialsIndicatorCodeValues(arrDataWorldBankPeru));
console.log(arrUniqueInitialsCode);//["","",""...]


//En el caso de que aumentara mas propeidades
window.WORLDBANK;
console.log(window.WORLDBANK);
Object.keys(window.WORLDBANK);//Array ["","",""] de STR countrynames
console.log(Object.keys(window.WORLDBANK));

const objToArrObj=(obj)=>{//{}
  const arr1=[];
  const properties=Object.keys(obj);
  for(let i =0;i<properties.length;i++){
    arr1.push(obj[properties[i]])
  }
return arr1;
}


//La logica 
//Creando una funcion que reciba como input //[{},{},{}..] Array de  Objects c/u representa un país
objToArrObj(window.WORLDBANK);//[{},{},{}..] Array de  Objects c/u representa un país
console.log(objToArrObj(window.WORLDBANK));//[{},{},{}...] Array de Objects c/u representa un país
const arrOfCountries=objToArrObj(window.WORLDBANK)
let arrOfCountryNamesOfAllIndicators=[]
for(let i=0;i<arrOfCountries.length;i++){//[{},{},{}..] Array de  Objects c/u representa un país
  arrOfCountries[i] // 1 object one countrie object {}
arrOfCountries[i].indicators;//Array de Indicadores [{},{},{}...]
for(let j=0;j<arrOfCountries[i].indicators.length;j++){//[{},{},{}...]
  arrOfCountries[i].indicators[j]//{} 1 indicador
  arrOfCountryNamesOfAllIndicators.push(arrOfCountries[i].indicators[j]["countryName"])
}
}
arrOfCountryNamesOfAllIndicators;
console.log(arrOfCountryNamesOfAllIndicators);//["","",""]//Arr con 556 strings los NOmbres de los Paises de otdos los Indicadores
worldBank.getUniqueCountryNamesOfAllIndicators(arrOfCountryNamesOfAllIndicators);//["","",""]Array de Str 
console.log(worldBank.getUniqueCountryNamesOfAllIndicators(arrOfCountryNamesOfAllIndicators));//["","",""]Array de Str con los  unique countryNames


//Creando una funcion 
//Reciba como input un object
//Que reciba como output un  ["","",""];
//Dentro de esta funcion estoy utilizando una funcion previa que ya cree .La funcion objToArrObj;
//Dentro de esta funcion estoy utilizando una funcion previa que ay cree .La funcion se llama getUniqueCountryNamesOfAllIndicators;

const objToArrOfUniqueStr=(obj)=>{//{}
  arrCountryNamesOfAllIndicators=[];
  arrOfCountryObjects=objToArrObj(obj);//[{},{},{},{}] Array de Objects c/u representa un país
   for(let i=0;i<arrOfCountryObjects.length;i++){
   arrOfCountryObjects[i] //{}
   arrOfCountryObjects[i]["indicators"]//[{},{},{},]array de objects Array de Indicadores
   for(let j=0;j<arrOfCountryObjects[i]["indicators"].length;j++){
    arrOfCountryObjects[i]["indicators"][j]//Object{} cada Indicador
   arrCountryNamesOfAllIndicators.push(arrOfCountryObjects[i]["indicators"][j]["countryName"]);
   }
  };
  
 arrCountryNamesOfAllIndicators;//["","",""...] arr con los cuntrynames repetidos
const arrUniqueCountryNames=worldBank.getUniqueCountryNamesOfAllIndicators(arrCountryNamesOfAllIndicators);
return arrUniqueCountryNames;
};
objToArrOfUniqueStr(window.WORLDBANK);
console.log(objToArrOfUniqueStr(window.WORLDBANK));







Object.values(window.WORLDBANK);
console.log(Object.values(window.WORLDBANK))//[{},{},{}..] c/u objc representa una país-Array de Objects
Object.entries(window.WORLDBANK);
console.log(Object.entries(window.WORLDBANK));//[[],[],[]...] Array de Arrays cada array tiene 2 elementos el nombre del Pais y el objeto.












//Creando un arra y de arrays de toda la data de worldbank  Cada array contiene un Object
const arrayOfArraysOfObjects=(obj)=>{//{}
  const arr=[];
  const properties=Object.keys(obj);
  for(let i =0;i<properties.length;i++){
    arr.push([obj[properties[i]]])
  }
return arr;
}
arrayOfArraysOfObjects(window.WORLDBANK);//[[{}],[{}],[{}]...] Array de Arrays Cada array contiene un Object
//console.log(arrayOfArraysOfObjects(window.WORLDBANK));//[[{}],[{}],[{}]...] Array de Arrays Cada array contiene un Object


//Creando una funcion 
//Recibe como input un objeto {} window.WORLDBANK
//Retorna como output un [] array 2d
//Igual a Object.entries
const objectToArr=(obj)=>{//{}
  const newArr=[];
  const properties=Object.keys(obj);
  for(let i =0;i<properties.length;i++){
    newArr.push([properties[i],obj[properties[i]]])
  }
return newArr;
}
objectToArr(window.WORLDBANK);//[["",{}],["",{},["",{}]..] Array of Arrays c/arraY tiene string (PER,MEX,...)y un objeto
//console.log(objectToArr(window.WORLDBANK));//[["",{}],["",{},["",{}]..]  Array Of Arrays









//Creo un {} nuevo donde explico lo que significa cada Inicial
const initialsDescription = {
  "SL." : 'Laboral',
  "per" : 'Protección Social',
  "HD." : 'Índice de Capital Humano', 
  "SH." : 'Salud', 
  "SG." : 'Género', 
  "SE." : 'Educación', 
  "MS." : 'Estadisticas Militares', 
  "SP." : 'Población', 
  "IC." : 'Inversion', 
  "DT." : 'Deuda Extena'
};




//Utilizo el {} creado anteriormente para crear [{},{},{}..] c/u de los {} representa un Indicador y tiene 2 Keys indicador (2 inciales), y descripcion
//Creando {} o creando Nueva Data
// INDICATOR CODES + DESCRIPTION
const arrIndicatorsInitialsAndDescription = [];
for(let i = 0; i < arrUniqueInitialsCode.length; i++){//["",""...]
   console.log(arrUniqueInitialsCode[i]);
    arrIndicatorsInitialsAndDescription.push({
       indicador :   arrUniqueInitialsCode[i],//Initials of each Indicator
       descripcion : initialsDescription[arrUniqueInitialsCode[i]]//Description
    });
};
console.log(arrIndicatorsInitialsAndDescription);//[{},{},{}..] c/u de {} representa un Indicador y tiene 2 Keys indicador (2 inciales), y descripcion

//Funcion para Imprimir en el Dom una opcion de selecion con c/u de las descripciones de las Iniciales de los Indicadores.
const printIndicatorCodesInitialsDescription = (array, domElement) => {//[{},{},{}..] c/u de {} representa un Indicador y tiene 2 Keys indicador (2 inciales), y descripcion y DOM element
  let string = '<option value="Todos">Todos</option>';
  for(let i = 0; i < array.length; i++){
      string += `<option value=${array[i].indicador}>${array[i].descripcion}</option>`
  }
  domElement.innerHTML = string;
 }
 printIndicatorCodesInitialsDescription(arrIndicatorsInitialsAndDescription,selectIndicatorCodeElement);



//Funcion para Imprimir en el Dom ...
const printIndicatorCountryName = (arrOb, domElement) => {//[{},{},{}..] c/u de {} representa un Indicador y tiene 2 Keys indicador (2 inciales), y descripcion y DOM element
  

for(let i=0;i<arrOb.length;i++){//[{},{},{}] array de objects c/u objects representa a un país
arrOb[i];
let string = '<option value="Todos">Todos</option>';
  
      string += `<option value=${arrOb[i].countrycode}>${arrOb[i].countryName}</option>`
  
  domElement.innerHTML = string;
 }
}


printIndicatorCountryName(objToArrObj(window.WORLDBANK),selectCountryName);



 // FILTER BUTTON
btnSearch.addEventListener('click', () => {
  const filteredIndicatorsByCategory = worldBank.filterBySector(arrDataWorldBankPeru, selectIndicatorCodeElement.value);//[{},{},{}..] Array de Indicators By Category
  console.log(selectIndicatorCodeElement.value);
  showInfoData.innerHTML = '';
  for (let i = 0; i < filteredIndicatorsByCategory.length; i++) {
    showInfoData.innerHTML =  `
    <h2>Indicadores de ${filteredIndicatorsByCategory[i].countryName} según categoría : ${arrIndicatorsInitialsAndDescription[selectIndicatorCodeElement.value]}</h2>
    `
    for (let j = 0; j < filteredIndicatorsByCategory.length; j++){
      showInfoData.innerHTML +=
           `
           <ul><li><a href="#">${filteredIndicatorsByCategory[j].indicatorName} en ${filteredIndicatorsByCategory[j].countryName}.</a></li></ul>
           `
    }
  }
});


worldBank.arrOfArrStr(arrDataWorldBankPeru);
console.log(worldBank.arrOfArrStr(arrDataWorldBankPeru));//[["","",""...],["","",""...],["","",""...]...]; keys years
worldBank.arrArrNum(arrDataWorldBankPeru);
console.log(worldBank.arrArrNum(arrDataWorldBankPeru));//[[num,num,num...],[num,num,num...],[num,num,num...]] values numbers
worldBank.arrayOfDataObjects(arrDataWorldBankPeru);
console.log(worldBank.arrayOfDataObjects(arrDataWorldBankPeru));//[{},{},{}...] array de Objects/-Array de Data Objects

//No funciona
worldBank.arrOfStrIndicatorCode(arrDataWorldBankPeru);
console.log(worldBank.arrOfStrIndicatorCode(arrDataWorldBankPeru));//["","",""...] Array de Strings  c/u es el varlo de IndicatorCode



