const objectDataWorldBank=window.WORLDBANK;
const arrDataWorldBankMexico=window.WORLDBANK.MEX.indicators;//[{},{},{}...]
//console.log(arrDataWorldBankMexico);
const arrDataWorldBankChile=window.WORLDBANK.CHL.indicators;//[{},{},{}...]
//console.log(arrDataWorldBankChile);
const arrDataWorldBankBrasil=window.WORLDBANK.BRA.indicators;//[{},{},{}...]
//console.log(arrDataWorldBankBrasil);
const arrDataWorldBankPeru = window.WORLDBANK.PER.indicators;//[{},{},{}...]
const firstScreen=document.getElementById("first-screen");
const secondScreen=document.getElementById("second-screen");
const thirdScreen=document.getElementById("third-screen");
secondScreen.style.display='none';
thirdScreen.style.display='none';

const showInfoData = document.getElementById('show-info-data');
const showFilteredCategory = document.getElementById('show-filtered-category');
const filterOptionsSection=document.getElementById("filter-options-section");
const showFilteredIndicatorNames = document.getElementById('show-filtered-indicator-names');
const selectIndicatorCodeElement = document.getElementById('select-indicator-code');
const selectCountryName = document.getElementById('select-country-name');
const btnSearch = document.getElementById('btn-search');
const showSelectedIndicatorName = document.getElementById('show-selected-indicator-name');
const showIndicatorNameKeysValues = document.getElementById('show-indicator-name-keys-values');
const arrUniqueInitialsCode = worldBank.getUniqueInitialsIndicatorCodeValues(worldBank.getInitialsIndicatorCodeValues(arrDataWorldBankPeru));
// console.log(arrUniqueInitialsCode);//["","",""...]

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

//Funcion que no he usado aún-Quizas me pueda servir 
const obtainingOneIndicatorById=(arrOb,indicatorId)=>{//[{},{}] y indicatorId
  let str="";
  for(let i=0;i<arrOb.length;i++){
    if(arrOb[i].indicatorCode===indicatorId){
      str=arrOb[i].data;//{}
  }

}
return str;// imrprimir {} 
};



//Utilizo el {} creado anteriormente para crear [{},{},{}..] c/u de los {} representa un Indicador y tiene 2 Keys indicador (2 inciales), y descripcion
//Creando {} o creando Nueva Data
// INDICATOR CODES + DESCRIPTION
const arrIndicatorsInitialsAndDescription = [];
for(let i = 0; i < arrUniqueInitialsCode.length; i++){//["",""...]
  //  console.log(arrUniqueInitialsCode[i]);
    arrIndicatorsInitialsAndDescription.push({
       indicador :   arrUniqueInitialsCode[i],//Initials of each Indicator
       descripcion : initialsDescription[arrUniqueInitialsCode[i]]//Description
    });
};
// console.log(arrIndicatorsInitialsAndDescription);//[{},{},{}..] c/u de {} representa un Indicador y tiene 2 Keys indicador (2 inciales), y descripcion

//Funcion para Imprimir en el Dom una opcion de selecion con c/u de las descripciones de las Iniciales de los Indicadores.
const printIndicatorCodesInitialsDescription = (array, domElement) => {//[{},{},{}..] c/u de {} representa un Indicador y tiene 2 Keys indicador (2 inciales), y descripcion y DOM element
  let string = '<option value="Todos">Todos</option>';
  for(let i = 0; i < array.length; i++){
      string += `<option value=${array[i].indicador}>${array[i].descripcion}</option>`
  }
  domElement.innerHTML = string;
 }
 printIndicatorCodesInitialsDescription(arrIndicatorsInitialsAndDescription,selectIndicatorCodeElement);
 







const showTitle=document.getElementById("show-title");
const orderSelector=document.getElementById("order-selectors");
const averageBtn=document.getElementById("average-btn");
const showAverageResult=document.getElementById("show-average-result");

 // FILTER BUTTON es un  boton dentro de la primera pantalla
btnSearch.addEventListener('click', () => {
  firstScreen.style.display='none';
  secondScreen.style.display='block';
  const filteredIndicatorsByCategory = worldBank.filterBySector(arrDataWorldBankPeru, selectIndicatorCodeElement.value);//[{},{},{}..] Array de Indicators By Category
  console.log(filteredIndicatorsByCategory);//[{},{}..]Array  de Indicadores filtered by category
  console.log(selectIndicatorCodeElement.value);//sector elegido por el usuario
  let titleOfIndicatorsList='';
  let indicatorsList='';
  
  for (let i = 0; i<filteredIndicatorsByCategory.length; i++) {
    titleOfIndicatorsList=
    `
    <h2>Indicadores de ${filteredIndicatorsByCategory[i].countryName} según categoría : ${initialsDescription[selectIndicatorCodeElement.value]}</h2>
    `
  }
  
    for (let j = 0;j <filteredIndicatorsByCategory.length; j++){
      indicatorsList+=
        `
        <ul><a href="#"><li id="${filteredIndicatorsByCategory[j].indicatorCode}" class="list">${filteredIndicatorsByCategory[j].indicatorName} en ${filteredIndicatorsByCategory[j].countryName}.</li></a></ul>
        `
    }
    showTitle.innerHTML=titleOfIndicatorsList;
    showInfoData.innerHTML=indicatorsList;
    const listOfIndicatorsShowed=document.querySelectorAll('li.list');//Lista de Indicators Code
   console.log(listOfIndicatorsShowed);
   
   orderSelector.addEventListener('change',(e)=>{
    const filteredIndicatorsByCategory = worldBank.filterBySector(arrDataWorldBankPeru, selectIndicatorCodeElement.value);
    let orderValueSelected=e.target.value;
    console.log(e.target.value);
    console.log(orderValueSelected);
    let arrSortedIndicators=worldBank.orderIndicatorNameOfAnObjectByAlphabet(filteredIndicatorsByCategory,orderValueSelected);
    console.log(worldBank.orderIndicatorNameOfAnObjectByAlphabet(filteredIndicatorsByCategory,orderValueSelected));
    showInfoData.innerHTML='';
    let indicatorsListOrderedByAlphabet='';
    for(let k=0;k<arrSortedIndicators.length;k++){
      indicatorsListOrderedByAlphabet+= `
      <ul><a href="#"><li id="${arrSortedIndicators[k].indicatorCode}" class="list">${arrSortedIndicators[k].indicatorName} en ${arrSortedIndicators[k].countryName}.</li></a></ul>
      `
    }
    showInfoData.innerHTML=indicatorsListOrderedByAlphabet;
    //listOfIndicatorsOrderedByAlphabet='';
    
    
}

);


});
averageBtn.addEventListener('click',()=>{
  
}

);

//La logica
const arrOfNum1=[1,2,3]
let contador=0;
for(let i=0;i<arrOfNum1.length;i++){
contador+=arrOfNum1[i];
 
}
contador/arrOfNum1.length
console.log(contador/arrOfNum1.length);


//CERANDO LA FUNCION AVERAGE
const arrOfNum2=[1,2,3,4,5,6]
const getAverage=(arrOfNum)=>{
  let sumTotal=0;
 for(let i=0;i<arrOfNum.length;i++){
sumTotal+=arrOfNum[i]
 }
 return sumTotal/arrOfNum.length
};
getAverage(arrOfNum2);
console.log(getAverage(arrOfNum2));




// MOSTRAR  LA LISTA CON LOS NOMBRES DE INDICADORES FILTRADOS POR CATEGORIA  EN LA SEGUNDA PANTALLA
//ShowInfoData es un div dentro de la segunda pantalla
showInfoData.addEventListener('click', (e) =>{
  secondScreen.style.display='none';
  thirdScreen.style.display='block';
  console.log(e.target); 
  showSelectedIndicatorName.innerHTML =
  `
  <h2>${e.target.innerText}</h2>
  `
  const filteredIndicatorNamesByCategory = worldBank.filterBySector(arrDataWorldBankPeru, selectIndicatorCodeElement.value);
  let indicatorIdSelectedByUser = e.target.id;
  console.log(indicatorIdSelectedByUser);
  for (let i = 0; i < filteredIndicatorNamesByCategory.length; i++) {
    if (filteredIndicatorNamesByCategory[i].indicatorCode === indicatorIdSelectedByUser) {
      console.log(filteredIndicatorNamesByCategory[i]);
      let indicatorDataKeys = Object.keys(filteredIndicatorNamesByCategory[i].data);
      console.log(indicatorDataKeys);
      for ( let j = 0; j <indicatorDataKeys.length; j++){
        if(filteredIndicatorNamesByCategory[i].data[indicatorDataKeys[j]]!=''){  
          showIndicatorNameKeysValues.innerHTML += 
          `
          <table>
            <tr>
              <th>Año</th>
              <th>Porcentaje</th>
            </tr>
            <tr>
              <td>${indicatorDataKeys[j]}</td>
              <td>${filteredIndicatorNamesByCategory[i].data[indicatorDataKeys[j]]}</td>
            </tr>
          </table>
          `
          console.log(indicatorDataKeys[j]);
          console.log(filteredIndicatorNamesByCategory[i].data[indicatorDataKeys[j]]);

        }
      
      }
    }
  };
});


/*
//Ordena de A -Z
arrStrings.sort(function (a, b) {
  return a.localeCompare(b);
});

//Ordena de la Z-A
arrStrings.sort(function (a, b) {
  return a.localeCompare(b);
});*/





//La lógica para crear la funcion orderIndicatorNamesByAlphabet
//Ordena de A -Z
/*arrDataWorldBankPeru.sort(function (a, b) {
  return a.indicatorName.localeCompare(b.indicatorName);
});
console.log(arrDataWorldBankPeru.sort(function (a, b) {
  return a.indicatorName.localeCompare(b.indicatorName);
}));*/

/*Ordena de Z-A
arrDataWorldBankPeru.sort(function (b,a) {
  return a.indicatorName.localeCompare(b.indicatorName);
});
console.log(arrDataWorldBankPeru.sort(function (b,a) {
  return a.indicatorName.localeCompare(b.indicatorName);
}));*/


/*const orderIndicatorByIndicatorName = (arrObj) => {//[{},{},{}]
  let orderByIndicatorName = arrObj.sort((a,b) => {
    indicatorA=a.indicatorName.toUpperCase();
    indicatorB=b.indicatorName.toUpperCase();
    return (indicatorA<indicatorB)?-1:(indicatorA>indicatorB)?1:0;
  });
  return orderByIndicatorName; //[{},{},{}]
};
console.log(orderIndicatorByIndicatorName(arrDataWorldBankPeru));//[{},{},{}]*/

/*const orderIndicatorByIndicatorCode = (arrObj) => {//[{},{},{}]
  let orderByIndicatorCode = arrObj.sort((a,b) => {
    indicatorA=a.indicatorCode.toUpperCase();
    indicatorB=b.indicatorCode.toUpperCase();
    return (indicatorA<indicatorB)?-1:(indicatorA>indicatorB)?1:0;
  });
  return orderByIndicatorCode; //[{},{},{}]
};
console.log(orderIndicatorByIndicatorCode(arrDataWorldBankPeru));//[{},{},{}]*/


  
  
