const arrDataWorldBankPeru = window.WORLDBANK.PER.indicators;
const showFilteredData = document.getElementById('show-filtered-data');
const selectIndicatorCode = document.getElementById('select-indicator-code');
const btnSearch = document.getElementById('btn-search');
const arrUniqueIndicatorCodes = WorldBank.getUniqueIndicatorCodeValues(WorldBank.getIndicatorCodeValues(arrDataWorldBankPeru));
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

const arrIndicatorsCodesnames = [];

/* Me sirve para comparar la longitud de mi array de codigo de indicadores con 
mi objeto de descripciones.
*/
//console.log(arrSectoresUnicos);
//console.log(Object.keys(descripcionPorSector))

// Recorrer el array
for(let i = 0; i < arrUniqueIndicatorCodes.length; i++){
    // console.log(arrSectoresUnicos[i])
    //console.log(descripcionPorSector[arrSectoresUnicos[i]])
    arrIndicatorsCodesnames.push({
       indicador :   arrUniqueIndicatorCodes[i],
       descripcion : indicatorCodesDescription[arrUniqueIndicatorCodes[i]]
    });

};

console.log(arrIndicatorsCodesnames);

// TURNING OBJECTS INTO ARRAYS
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

// FILTER BUTTON
btnSearch.addEventListener('click', () => {
     const dataFiltrada = filterBySector(arrDataWorldBankPeru, selectIndicatorCode.value);
    console.log(selectIndicatorCode.value);
    showFilteredData.innerHTML = '';
    for (let i = 0; i < dataFiltrada.length; i++) {
      showFilteredData.innerHTML += `
          <ul><li><a href="#">${dataFiltrada[i].indicatorName} en ${dataFiltrada[i].countryName}.</a></li></ul>
          `
        };
    // for (let i=0; i < dataFiltrada.data.length; i++){
    //     showFilteredData.innerHTML += `
    //     <ul><li>${newArrayDataKeys[0][i]}: ${newArrayDataValues[0][i]}</li></ul>
    //     `
    //     console.log(showDataPeru(dataKeysPeru[0][i], dataValuesPeru[0][i]))
    //         };
  });

  // btnReset.addEventListener('click', () => {
  // });

  // FUNCIÓN PARA MOSTRAR DATA EN DOM
const showDataPeru = (dataPeru, dataKeysPeru, dataValuesPeru) => {
    // for (let i = 0; i < dataPeru.length; i++) {
    // showData.innerHTML += `
    //     <ul><li>${dataPeru[i].indicatorName} en ${dataPeru[i].countryName}</li></ul>
    //     `;
    // }
    // for (let i=0; i < dataKeysPeru.length; i++){
    //     showData.innerHTML += `
    //     <ul><li>${dataKeysPeru[0][i]}: ${dataValuesPeru[0][i]}</li></ul>
    //     `
    //     console.log(showDataPeru(dataKeysPeru[0][i], dataValuesPeru[0][i]))
    // };
    // console.log(dataKeysPeru[0]);
    // console.log(dataValuesPeru[0]);
  };
  showDataPeru (arrDataWorldBankPeru, newArrayDataKeys, newArrayDataValues);
