
const objectDataWorldBank=window.WORLDBANK;
const arrDataWorldBankMexico=window.WORLDBANK.MEX.indicators;//[{},{},{}...]
//console.log(arrDataWorldBankMexico);
const arrDataWorldBankChile=window.WORLDBANK.CHL.indicators;//[{},{},{}...]
//console.log(arrDataWorldBankChile);
const arrDataWorldBankBrasil=window.WORLDBANK.BRA.indicators;//[{},{},{}...]
//console.log(arrDataWorldBankBrasil);
const arrDataWorldBankPeru = window.WORLDBANK.PER.indicators;//[{},{},{}...]


const showInfoData = document.getElementById('show-info-data');
const showFilteredCategory = document.getElementById('show-filtered-category');
const filterOptionsSection=document.getElementById("filter-options-section");
const showFilteredIndicatorNames = document.getElementById('show-filtered-indicator-names');
const selectIndicatorCodeElement = document.getElementById('select-indicator-code');
const selectCountryName = document.getElementById('select-country-name');
const btnSearch = document.getElementById('btn-search');
const arrUniqueInitialsCode = worldBank.getUniqueInitialsIndicatorCodeValues(worldBank.getInitialsIndicatorCodeValues(arrDataWorldBankPeru));
console.log(arrUniqueInitialsCode);//["","",""...]

worldBank.uniqueCountryNames(window.WORLDBANK);//["",""]  array de strings countryNames UNICOS  Perú,México,Brasil,Chile
console.log(worldBank.uniqueCountryNames(window.WORLDBANK));
worldBank.uniqueCountryCodes(window.WORLDBANK);//["",""]  array de strings countryCodes UNICOS  PER,MEX,BRA,CHL
console.log(worldBank.uniqueCountryCodes(window.WORLDBANK));
worldBank.uniqueIndicatorsName(window.WORLDBANK);//["",""]  array de strings indicatrosName UNICOS  139 en total
console.log(worldBank.uniqueIndicatorsName(window.WORLDBANK));
worldBank.uniqueIndicatorsCode(window.WORLDBANK);//["","",""] array de strings indicatorcodes unicos  139 en total 
console.log(worldBank.uniqueIndicatorsCode(window.WORLDBANK));

const filterByCountry=(dataObj,countrySelected)=>{
  dataObj[countrySelected];//{}, pais seleccionado tiene que ser el valor PER,MEX,BRA,CHL
  dataObj[countrySelected]["indicators"]//[{},{}{}] aray de Indicadores del País seleccionado
return  dataObj[countrySelected]["indicators"];//[{},{}{}] aray de Indicadores del País seleccionado

}
filterByCountry(objectDataWorldBank,"PER");//[{},{}{}] aray de Indicadores del País seleccionado
console.log(filterByCountry(objectDataWorldBank,"PER"));

const printCountryNames = (obj1,domElement) => {//[{},{},{}..] c/u de {} representa un Indicador y tiene 2 Keys indicador (2 inciales), y descripcion y DOM element
let string = '<option value="Todos">Todos</option>';
obj1;
arrayOfUniqueIndicatorsName1=[];
  const properties4=Object.keys(obj1)//["",""...]
  console.log(properties4)
  for(let i=0;i<properties4.length;i++){//["",""...]
    obj1[properties4[i]]//{} cada countryObject
    obj1[properties4[i]]["indicators"]//[{},{},{}] array de Indicadores
    for(let j=0;j<obj1[properties4[i]]["indicators"].length;j++){
      obj1[properties4[i]]["indicators"][j]//{} indicador
      console.log(obj1[properties4[i]]["indicators"][j]);
      obj1[properties4[i]]["indicators"][j]["countryName"]//"" strings
      console.log( obj1[properties4[i]]["indicators"][j]["countryName"]) 
      if(arrayOfUniqueIndicatorsName1.indexOf(obj1[properties4[i]]["indicators"][j]["countryName"])===-1){
        arrayOfUniqueIndicatorsName1.push(obj1[properties4[i]]["indicators"][j]["countryName"])
      }
    }
    arrayOfUniqueIndicatorsName1;
    console.log(arrayOfUniqueIndicatorsName1);//["","",""]
    for(let l=0;l<arrayOfUniqueIndicatorsName1.length;l++){
      arrayOfUniqueIndicatorsName1[l]
      console.log(arrayOfUniqueIndicatorsName1[l]);
      string+=`<option value=${properties4[i]}>${arrayOfUniqueIndicatorsName1[l]}</option>`
    } 
  
  
  
  }
  domElement.innerHTML=string;
 };

 printCountryNames(objectDataWorldBank,selectCountryName);
 





filterOptionsSection.addEventListener('click',(e)=>{
  //console.log(e.target)
 // console.log(e.target.value)
  //console.log(objectDataWorldBank[e.target.value]);
  //objectDataWorldBank[e.target.value]

}

);


showInfoData.addEventListener('click',(e)=>{
  console.log(e.target)
  console.log(e.target.value)

});


/*
//En el caso de que aumentara mas propeidades
window.WORLDBANK;
console.log(window.WORLDBANK);
Object.keys(window.WORLDBANK);//Array ["","",""] de STR countrynames
console.log(Object.keys(window.WORLDBANK));//["","",""]  Arr Str strings properties PER,MEX,CHL,BRA
worldBank.objToArrObj(window.WORLDBANK); //un object  {},to an array of Objects [{},{},{}];
console.log(worldBank.objToArrObj(window.WORLDBANK))//un object  {},to an array of Objects [{},{},{}];
worldBank.objToArrOfUniqueStr(window.WORLDBANK);//["","",""...] arr con los countrynames unicos
console.log(worldBank.objToArrOfUniqueStr(window.WORLDBANK));//["","",""...] arr con los countrynames unicos*/


window.WORLDBANK;

console.log(window.WORLDBANK);//{}
Object.keys(window.WORLDBANK);//Arr Str strings properties PER,MEX,CHL,BRA
//console.log(Object.keys(window.WORLDBANK));//["","",""]  Arr Str strings properties PER,MEX,CHL,BRA
const properties=Object.keys(window.WORLDBANK);//["","",""]  Arr Str strings properties PER,MEX,CHL,BRA
for (let i=0;i<properties.length;i++){
  console.log(window.WORLDBANK[properties[i]]);
}



worldBank.objToArrObj(window.WORLDBANK); //un object  {},to an array of Objects [{},{},{}];
console.log(worldBank.objToArrObj(window.WORLDBANK))//un object  {},to an array of Objects [{},{},{}];
worldBank.objToArrOfUniqueStr(window.WORLDBANK);//["","",""...] arr con los countrynames unicos
console.log(worldBank.objToArrOfUniqueStr(window.WORLDBANK));//["","",""...] arr con los countrynames unicos






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
arrIndicatorsInitialsAndDescription;
//Funcion para Imprimir en el Dom una opcion de selecion con c/u de las descripciones de las Iniciales de los Indicadores.
const printIndicatorCodesInitialsDescription = (array, domElement) => {//[{},{},{}..] c/u de {} representa un Indicador y tiene 2 Keys indicador (2 inciales), y descripcion y DOM element
  let string = '<option value="Todos">Todos</option>';
  for(let i = 0; i < array.length; i++){
      string += `<option value=${array[i].indicador}>${array[i].descripcion}</option>`
  }
  domElement.innerHTML = string;
 }
 printIndicatorCodesInitialsDescription(arrIndicatorsInitialsAndDescription,selectIndicatorCodeElement);
 





 // FILTER BUTTON
btnSearch.addEventListener('click', () => {
  const filteredIndicatorsByCategory = worldBank.filterBySector(arrDataWorldBankPeru, selectIndicatorCodeElement.value);//[{},{},{}..] Array de Indicators By Category
  console.log(selectIndicatorCodeElement.value);
  showInfoData.innerHTML = '';
  for (let i = 0; i < filteredIndicatorsByCategory.length; i++) {
    showInfoData.innerHTML =  `
    <h2>Indicadores de ${filteredIndicatorsByCategory[i].countryName} según categoría : ${initialsDescription[selectIndicatorCodeElement.value]}</h2>
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



