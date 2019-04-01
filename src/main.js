const arrDataWorldBankPeru = window.WORLDBANK.PER.indicators;
const showInfoData = document.getElementById('show-info-data');
const showFilteredCategory = document.getElementById('show-filtered-category');
const showFilteredIndicatorNames = document.getElementById('show-filtered-indicator-names');
const selectIndicatorCodeElement = document.getElementById('select-indicator-code');
const btnSearch = document.getElementById('btn-search');
const showSelectedIndicatorName = document.getElementById('show-selected-indicator-name');
const showIndicatorNameKeysValues = document.getElementById('show-indicator-name-keys-values');
const arrUniqueIndicatorCodes = worldBank.getUniqueInitialsIndicatorCodeValues(worldBank.getInitialsIndicatorCodeValues(arrDataWorldBankPeru));
const indicatorCodesDescription = {
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


// const indicatorCode = (indicator) => {
//   return(indicator.indicatorCode.startsWith(selectIndicatorCode.value));
// }; 
// console.log(indicatorCode);


/* TURNING OBJECTS INTO ARRAYS
{keys:value},{keys:value},{keys:value} to ['keys:value'],['keys:value'],['keys:value'] 
*/
let newArrayDataKeys = [];
for (let i = 0; i < arrDataWorldBankPeru.length; i++) {
    newArrayDataKeys.push(Object.keys(arrDataWorldBankPeru[i].data));
}
// console.log(newArrayDataKeys);

let newArrayDataValues = [];
for (let i = 0; i < arrDataWorldBankPeru.length; i++) {
    newArrayDataValues.push(Object.values(arrDataWorldBankPeru[i].data));
}
// console.log(newArrayDataValues);



// INDICATOR CODES + DESCRIPTION
const arrIndicatorsCodesNames = [];
/* Me sirve para comparar la longitud de mi array de codigo de indicadores con 
mi objeto de descripciones.
*/
//console.log(arrSectoresUnicos);
//console.log(Object.keys(descripcionPorSector))
// RECORRER EL ARRAY
for(let i = 0; i < arrUniqueIndicatorCodes.length; i++){
    // console.log(arrSectoresUnicos[i])
    //console.log(descripcionPorSector[arrSectoresUnicos[i]])
    arrIndicatorsCodesNames.push({
       indicador :   arrUniqueIndicatorCodes[i],
       descripcion : indicatorCodesDescription[arrUniqueIndicatorCodes[i]]
    });
};

const printIndicatorCodeNames = (array, domElement) => {
  let string = '<option value="Todos">Todos</option>';
  for(let i = 0; i < array.length; i++){
      string += `<option value=${array[i].indicador}>${array[i].descripcion}</option>`
  }
  domElement.innerHTML = string;
 }
 printIndicatorCodeNames(arrIndicatorsCodesNames,selectIndicatorCodeElement);

 // FILTER BUTTON
btnSearch.addEventListener('click', () => {
  const filteredIndicatorNamesByCategory = worldBank.filterBySector(arrDataWorldBankPeru, selectIndicatorCodeElement.value);
  console.log(selectIndicatorCodeElement.value);
  let filteredIndicatorNamesByCategoryKeysArray = [];
  for (let i = 0; i < filteredIndicatorNamesByCategory.length; i++) {
    filteredIndicatorNamesByCategoryKeysArray.push(Object.keys(filteredIndicatorNamesByCategory[i].data));
  };
  let filteredIndicatorNamesByCategoryValuesArray = [];
  for (let i = 0; i < filteredIndicatorNamesByCategory.length; i++) {
    filteredIndicatorNamesByCategoryValuesArray.push(Object.values(filteredIndicatorNamesByCategory[i].data));
  };
  console.log(filteredIndicatorNamesByCategoryKeysArray);
  console.log(filteredIndicatorNamesByCategoryValuesArray);
  showInfoData.innerHTML = '';
  for (let i = 0; i < filteredIndicatorNamesByCategory.length; i++) {
    showInfoData.innerHTML =  `
      <h2>Indicadores de ${filteredIndicatorNamesByCategory[i].countryName} según sector: ${indicatorCodesDescription[selectIndicatorCodeElement.value]}</h2>
      `
    for (let j = 0; j < filteredIndicatorNamesByCategory.length; j++) {
      showInfoData.innerHTML +=`
        <ul><a href="#"><li class="indicator-name-data">${filteredIndicatorNamesByCategory[j].indicatorName} en ${filteredIndicatorNamesByCategory[j].countryName}.</li></a></ul>
        `   
      }
    }       
  }
);



// MOSTRAR NOMBRE DE CATEGORÍA SELECCIONADO EN LA SEGUNDA PANTALLA
showInfoData.addEventListener('click', (e) =>{
  console.log(e.target.innerText);
  const filteredIndicatorNamesByCategory = worldBank.filterBySector(arrDataWorldBankPeru, selectIndicatorCodeElement.value);
  // console.log(filteredIndicatorNamesByCategory);

  let filteredIndicatorNamesByCategoryValuesArray = [];
  for (let j = 0;j < filteredIndicatorNamesByCategory.length; j++) {
    filteredIndicatorNamesByCategoryValuesArray.push(Object.values(filteredIndicatorNamesByCategory[j].data));
  };
  showSelectedIndicatorName.innerHTML =
  `
  <h2>${e.target.innerText}</h2>
  `
  
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
  };
  console.log(filteredIndicatorNamesByCategoryKeysArray);
  console.log(filteredIndicatorNamesByCategoryValuesArray);
  
});




// const filteredIndicatorNamesByCategory = worldBank.filterBySector(arrDataWorldBankPeru, selectIndicatorCodeElement.value);
// showSelectedIndicatorName.innerHTML = '';
//   for (let i = 0; i < filteredIndicatorNamesByCategory.length; i++){
//     showSelectedIndicatorName.innerHTML += `
//       <h2>${filteredIndicatorNamesByCategory[0]}</h2>
//     `
//   };