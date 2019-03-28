/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {
//   return 'example';
// };

// window.example = example;

window.WorldBank = {
  getIndicatorCodeValues : (array) => {
    const newArrayStrings = [];
    for(let i = 0; i < array.length; i++){
       const string = array[i].indicatorCode.slice(0,3);
       newArrayStrings.push(string);
    }
    console.log('Array con indicators codes: ' + newArrayStrings);
       return newArrayStrings
   },
   
   getUniqueIndicatorCodeValues : (array) => {
     const newArrayUniqueValues = [];
    for(let i = 0; i <array.length; i++){
      if(newArrayUniqueValues.indexOf(array[i]) === -1){
        newArrayUniqueValues.push(array[i])
      }
    }
    console.log('Array con valores unicos de indicator codes: ' + newArrayUniqueValues);
    
    return newArrayUniqueValues;
  }
};


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
      indicatorCodes = worldBankDataPeru;
  }
  return indicatorCodes;
  
  
};


const filterByYears = (data, yearStart) => {
  let years;

    
}



// MOSTRAR DATA EN DOM
// const mostrarData = (año, valor) => {
//     return `
//     <li>${año}: ${valor}</li>
//     `
// }
