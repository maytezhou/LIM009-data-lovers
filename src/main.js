const arrDataWorldBankPeru = window.WORLDBANK.PER.indicators;
const showInfoData = document.getElementById('show-info-data');
const showFilteredCategory = document.getElementById('show-filtered-category');
const showFilteredIndicatorNames = document.getElementById('show-filtered-indicator-names');
const selectIndicatorCodeElement = document.getElementById('select-indicator-code');
const btnSearch = document.getElementById('btn-search');
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
console.log(arrIndicatorsCodesNames);

const printIndicatorCodeNames = (array, domElement) => {
  let string = '<option value="Todos">Todos</option>';
  for(let i = 0; i < array.length; i++){
      string += `<option value=${array[i].indicador}>${array[i].descripcion}</option>`
  }
  domElement.innerHTML = string;
 }
 printIndicatorCodeNames(arrIndicatorsCodesNames,selectIndicatorCodeElement);