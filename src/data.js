/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {
//   return 'example';
// };

// window.example = example;


const worldBankDataPeru = window.WORLDBANK.PER.indicators;
const showData = document.getElementById('show-data');
const filterIndicatorCode = document.getElementById('filter-indicator-code');
const filterYears = document.getElementById('filter-years');
const btnFilter = document.getElementById('btn-filter');





// INDICATORS
// SL - SOCIAL-LABOR
const indicatorCodeSL = (indicator) => {
  return(indicator.indicatorCode.startsWith('SL.'));
}

// SE - SOCIAL:EDUCATION
const indicatorCodeSE = (indicator) => {
  return(indicator.indicatorCode.startsWith('SE.'));
}

// HD - 
const indicatorCodeHD = (indicator) => {
  return(indicator.indicatorCode.startsWith('HD.'));
}

// DT - DEBT:EXTERNAL
const indicatorCodeDT = (indicator) => {
  return(indicator.indicatorCode.startsWith('DT.'));
}

// IC - INVESTMENT CLIMATE
const indicatorCodeIC = (indicator) => {
  return(indicator.indicatorCode.startsWith('IC.'));
}

// SP - SOCIAL:POPULATION
const indicatorCodeSP = (indicator) => {
  return(indicator.indicatorCode.startsWith('SP.'));
}

// MS - MILITARY STATISTICS
const indicatorCodeMS = (indicator) => {
  return(indicator.indicatorCode.startsWith('MS.'));
}

// SG - SOCIAL GENDER
const indicatorCodeSG = (indicator) => {
  return(indicator.indicatorCode.startsWith('SG.'));
}

// SH - SOCIAL:HEALTH
const indicatorCodeSH = (indicator) => {
  return(indicator.indicatorCode.startsWith('SH.'));
}

// ALL
const indicatorCodeAll = (indicator) => {
  const sectorOptions = ['SL.', 'SE.', 'HD.', 'DT.', 'IC.', 'SP.', 'MS.', 'SG.','SH.'];
  return(indicator.indicatorCode.includes(sectorOptions));
}

// FUNCTION - FILTERED BY INDICATOR CODE
const filterBySector = (data, sector) => {
  let indicatorCodes;
  if (sector === 'SL') {
      indicatorCodes = data.filter(indicatorCodeSL)
  } else if (sector === 'SE') {
      indicatorCodes = data.filter(indicatorCodeSE)
  } else if (sector === 'HD') {
      indicatorCodes = data.filter(indicatorCodeHD)
  } else if (sector === 'DT') {
      indicatorCodes = data.filter(indicatorCodeDT)
  } else if (sector === 'IC') {
      indicatorCodes = data.filter(indicatorCodeIC)
  } else if (sector === 'SP') {
      indicatorCodes = data.filter(indicatorCodeSP)
  } else if (sector === 'MS') {
      indicatorCodes = data.filter(indicatorCodeMS)
  } else if (sector === 'SG') {
      indicatorCodes = data.filter(indicatorCodeSG)
  } else if (sector === 'SH') {
      indicatorCodes = data.filter(indicatorCodeSH)
  } else {
      indicatorCodes = data.filter(indicatorCodeAll)
  }
  return indicatorCodes;
  
  
}


// FILTER BUTTON
btnFilter.addEventListener('click', () => {
  let filterIndicatorValue = filterIndicatorCode.value;
  //let filterByYears = filterYears.value;
  console.log(filterIndicatorValue);
  // filterBySector(worldBankDataPeru, filterIndicatorValue);
  const dataFiltrada = filterBySector(worldBankDataPeru, filterIndicatorCode.value);
  console.log(dataFiltrada);
  // console.log(filterByYears);
});


// SHOW FIRST INDICATOR DATA IN CONSOLE
// console.log(`${worldBankDataPeru[0].indicatorName} en ${worldBankDataPeru[0].countryName}`);
// console.log(worldBankDataPeru[0].data);

// TURNING OBJECTS INTO ARRAYS
const newArrayDataKeys = [];
for (let i = 0; i < worldBankDataPeru.length; i++) {
    newArrayDataKeys.push(Object.keys(worldBankDataPeru[i].data));
}
// console.log(newArrayDataKeys);

const newArrayDataValues = [];
for (let i = 0; i < worldBankDataPeru.length; i++) {
    newArrayDataValues.push(Object.values(worldBankDataPeru[i].data));
}
// console.log(newArrayDataValues);



// MOSTRAR DATA EN DOM
// const mostrarData = (año, valor) => {
//     return `
//     <li>${año}: ${valor}</li>
//     `
// }
  
// FUNCIÓN PARA MOSTRAR DATA EN DOM
const showDataPeru = (dataPeru, dataKeysPeru, dataValuesPeru) => {
  for (let i = 0; i < 1; i++) {
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











// SHOWING DATA IN DOM
// const showDataPeru = (dataPeru, dataKeysPeru, dataValuesPeru) => {
//     for (let i = 0; i < dataPeru.length; i++) {
//         showData.innerHTML += `
//         <div>
//             <p><strong>Indicador:</strong> ${dataPeru[i].indicatorName}</p>
//             <p><strong>Pais:</strong> ${dataPeru[i].countryName}</p>
//             <p><strong>Data:</strong> ${dataKeysPeru[i]} : ${dataValuesPeru[i]}</p>
//             </br>
//         </div> 
//         `;
//         }
//     };
//     showDataPeru (worldBankDataPeru,newArrayDataKeys, newArrayDataValues);