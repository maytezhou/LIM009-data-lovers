const arrDataWorldBankPeru = window.WORLDBANK.PER.indicators;//[{},{},{}...]
const showInfoData = document.getElementById('show-info-data');
const showFilteredCategory = document.getElementById('show-filtered-category');
const showFilteredIndicatorNames = document.getElementById('show-filtered-indicator-names');
const selectIndicatorCodeElement = document.getElementById('select-indicator-code');
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

 // FILTER BUTTON
btnSearch.addEventListener('click', () => {
  const filteredIndicatorsByCategory = worldBank.filterBySector(arrDataWorldBankPeru, selectIndicatorCodeElement.value);//[{},{},{}..] Array de Indicators By Category
  console.log(selectIndicatorCodeElement.value);
  // let filteredIndicatorNamesByCategoryKeysArray = [];
  // for (let i = 0; i < filteredIndicatorsByCategory.length; i++) {
  //   filteredIndicatorNamesByCategoryKeysArray.push(Object.keys(filteredIndicatorsByCategory[i].data));
  // };
  // let filteredIndicatorNamesByCategoryValuesArray = [];
  // for (let i = 0; i < filteredIndicatorsByCategory.length; i++) {
  //   filteredIndicatorNamesByCategoryValuesArray.push(Object.values(filteredIndicatorsByCategory[i].data));
  // };
  // console.log(filteredIndicatorNamesByCategoryKeysArray);
  // console.log(filteredIndicatorNamesByCategoryValuesArray);
  showInfoData.innerHTML = '';
  for (let i = 0; i < filteredIndicatorsByCategory.length; i++) {
    showInfoData.innerHTML =
    `
    <h2>Indicadores de ${filteredIndicatorsByCategory[i].countryName} según categoría : ${initialsDescription[selectIndicatorCodeElement.value]}</h2>
    `
    for (let j = 0; j < filteredIndicatorsByCategory.length; j++){
      showInfoData.innerHTML +=
        `
        <ul><a href="#"><li id="${filteredIndicatorsByCategory[j].indicatorCode}" class="list">${filteredIndicatorsByCategory[j].indicatorName} en ${filteredIndicatorsByCategory[j].countryName}.</li></a></ul>
        `
    }
  }
});


// const shownIndicatorsNames = document.querySelectorAll('.shown-indicators-names');
// for (let i = 0; i < shownIndicatorsNames.length; i++) {
//   shownIndicatorsNames[i].addEventListener('click', showIndicatorData);
// };

// function showIndicatorData() {
//   console.log('hello');
  
  
// };






// MOSTRAR NOMBRE DE CATEGORÍA SELECCIONADO EN LA SEGUNDA PANTALLA
showInfoData.addEventListener('click', (e) =>{
  console.log(e.target); 
  console.log(e.target.innerText);
  const filteredIndicatorNamesByCategory = worldBank.filterBySector(arrDataWorldBankPeru, selectIndicatorCodeElement.value);
  let indicatorIdSelectedByUser = e.target.id;
  console.log(indicatorIdSelectedByUser);
  for (let i = 0; i < filteredIndicatorNamesByCategory.length; i++) {
    if (filteredIndicatorNamesByCategory[i].indicatorCode === indicatorIdSelectedByUser) {
      console.log(filteredIndicatorNamesByCategory[i]);
      let indicatorDataKeys = Object.keys(filteredIndicatorNamesByCategory[i].data);
      console.log(indicatorDataKeys);
      for ( let j = 0; j <indicatorDataKeys.length; j++){
        console.log(indicatorDataKeys[j]);
        console.log(filteredIndicatorNamesByCategory[i].data[indicatorDataKeys[j]]);
        
        
      }
      
      
    }
  }
  
  
  

  // let filteredIndicatorNamesByCategoryValuesArray = [];
  // for (let j = 0;j < filteredIndicatorNamesByCategory.length; j++) {
  //   filteredIndicatorNamesByCategoryValuesArray.push(Object.values(filteredIndicatorNamesByCategory[j].data));
  // };
  // console.log(filteredIndicatorNamesByCategoryValuesArray);
  
  showSelectedIndicatorName.innerHTML =
  `
  <h2>${e.target.innerText}</h2>
  `
  showIndicatorNameKeysValues.innerHTML = 
  `
  <p>DATOS TABLA AQUÍ</p>
  `


});
  
  // showIndicatorNameKeysValues.innerHTML = '';
  // let filteredIndicatorNamesByCategoryKeysArray = [];
  // for (let i = 0; i < filteredIndicatorNamesByCategory.length; i++) {
  //   filteredIndicatorNamesByCategoryKeysArray.push(Object.keys(filteredIndicatorNamesByCategory[i].data));
  //   let filteredIndicatorNamesByCategoryValuesArray = [];
  //   for (let j = 0;j < filteredIndicatorNamesByCategory.length; j++) {
  //     filteredIndicatorNamesByCategoryValuesArray.push(Object.values(filteredIndicatorNamesByCategory[j].data));
  //     showIndicatorNameKeysValues.innerHTML =
  //     `
  //     <li>${filteredIndicatorNamesByCategoryKeysArray[i]} : ${filteredIndicatorNamesByCategoryValuesArray[j]}</li>
  //     `
  //   };
  // };
  // console.log(filteredIndicatorNamesByCategoryKeysArray);
  // console.log(filteredIndicatorNamesByCategoryValuesArray);
  






// const filteredIndicatorNamesByCategory = worldBank.filterBySector(arrDataWorldBankPeru, selectIndicatorCodeElement.value);
// showSelectedIndicatorName.innerHTML = '';
//   for (let i = 0; i < filteredIndicatorNamesByCategory.length; i++){
//     showSelectedIndicatorName.innerHTML += `
//       <h2>${filteredIndicatorNamesByCategory[0]}</h2>
//     `
//   };