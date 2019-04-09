const arrDataWorldBankPeru = window.WORLDBANK.PER.indicators;
const selectIndicatorCodeElement = document.getElementById('select-indicator-code');
const btnSearch = document.getElementById('btn-search');
const selectSort = document.getElementById('select-sort');
const showInfoTitle = document.getElementById('show-info-title'); 
const showInfoData = document.getElementById('show-info-data');
const backBtn1 = document.getElementById('back-btn-1');
const backBtn2 = document.getElementById('back-btn-2');
const showSelectedIndicatorName = document.getElementById('show-selected-indicator-name');
const showIndicatorNameKeysValues = document.getElementById('show-indicator-name-keys-values');
const showAverageResult = document.getElementById('show-average-result');
const arrUniqueInitialsCode = worldBank.getUniqueInitialsIndicatorCodeValues(worldBank.getInitialsIndicatorCodeValues(arrDataWorldBankPeru));

// Creo un {} nuevo donde explico lo que significa cada Inicial
const initialsDescription = {
  'SL.': 'Laboral',
  'per': 'Protección Social',
  'HD.': 'Índice de Capital Humano', 
  'SH.': 'Salud', 
  'SG.': 'Género', 
  'SE.': 'Educación', 
  'MS.': 'Estadisticas Militares', 
  'SP.': 'Población', 
  'IC.': 'Inversion', 
  'DT.': 'Deuda Extena'
};

// INDICATOR CODES + DESCRIPTION
const arrIndicatorsInitialsAndDescription = [];
for (let i = 0; i < arrUniqueInitialsCode.length; i++) {
  arrIndicatorsInitialsAndDescription.push({
    'indicador': arrUniqueInitialsCode[i],
    'descripcion': initialsDescription[arrUniqueInitialsCode[i]]
  });
}

// Funcion para Imprimir en el Dom una opcion de selecion con c/u de las descripciones de las Iniciales de los Indicadores.
const printIndicatorCodesInitialsDescription = (array, domElement) => {
  let string = '<option>Seleccionar</option>';
  for (let i = 0; i < array.length; i++) {
    string += `<option value=${array[i].indicador}>${array[i].descripcion}</option>`;
  }
  domElement.innerHTML = string;
};
printIndicatorCodesInitialsDescription(arrIndicatorsInitialsAndDescription, selectIndicatorCodeElement);

// SEARCH BUTTON
btnSearch.addEventListener('click', () => {
  const filteredIndicatorsByCategory = worldBank.filterBySector(arrDataWorldBankPeru, selectIndicatorCodeElement.value);
  document.getElementById('first-screen').style.display = 'none';
  document.getElementById('second-screen').style.display = 'block';
  document.getElementById('select-sort').style.display = 'block';
  document.getElementById('third-screen').style.display = 'none';
  showInfoTitle.innerHTML = '';
  for (let i = 0; i < filteredIndicatorsByCategory.length; i++) {
    showInfoTitle.innerHTML =
    `
    Indicadores de ${filteredIndicatorsByCategory[i].countryName} según categoría : ${initialsDescription[selectIndicatorCodeElement.value]}
    `;
  }
  showInfoData.innerHTML = '';
  for (let j = 0; j < filteredIndicatorsByCategory.length; j++) {
    showInfoData.innerHTML +=
      `
      <ul><a href="#"<li id="${filteredIndicatorsByCategory[j].indicatorCode}" class="list hover-underline-animation">${filteredIndicatorsByCategory[j].indicatorName} en ${filteredIndicatorsByCategory[j].countryName}</li></a></ul>
      `;
  }
  selectSort.addEventListener('change', (element) => {
    const filteredIndicatorsByCategory = worldBank.filterBySector(arrDataWorldBankPeru, selectIndicatorCodeElement.value);
    let orderValueSelected = element.target.value;
    let arrSortedIndicators = worldBank.orderIndicatorNameOfAnObjectByAlphabet(filteredIndicatorsByCategory, orderValueSelected);
    showInfoData.innerHTML = '';
    for (let kk = 0; kk < arrSortedIndicators.length; kk++) {
      showInfoData.innerHTML += 
      `
      <ul><a href="#"><li id="${arrSortedIndicators[kk].indicatorCode}" class="hover-underline-animation list">${arrSortedIndicators[kk].indicatorName} en ${arrSortedIndicators[kk].countryName}</li></a></ul>
      `;
    }
  });
});

backBtn1.addEventListener('click', () => {
  document.getElementById('second-screen').style.display = 'none';
  document.getElementById('select-sort').style.display = 'none';
  document.getElementById('first-screen').style.display = 'block';
});

// MOSTRAR NOMBRE DE CATEGORÍA SELECCIONADO EN LA SEGUNDA PANTALLA
showInfoData.addEventListener('click', (ab) => {
  document.getElementById('second-screen').style.display = 'none';
  document.getElementById('select-sort').style.display = 'none';
  document.getElementById('third-screen').style.display = 'block';
  const dataSource = window.WORLDBANK.PER.dataSource;
  const lastUpdated = window.WORLDBANK.PER.lastUpdated;
  const filteredIndicatorNamesByCategory = worldBank.filterBySector(arrDataWorldBankPeru, selectIndicatorCodeElement.value);
  let indicatorIdSelectedByUser = ab.target.id;
  const oneIndicator = worldBank.filterByIndicatorNameSelectedByUser(filteredIndicatorNamesByCategory, indicatorIdSelectedByUser);
  const indicatorDataKeys = worldBank.getYearsValueOfOneIndicatorSelectedByUser(oneIndicator, indicatorIdSelectedByUser);
  const arrOfValuesFiltered = worldBank.getPorcentageValuesOfOneIndicatorSelectedByUser(oneIndicator, indicatorDataKeys);
  showSelectedIndicatorName.innerHTML =
  `
  ${ab.target.innerText}
  `;
  showIndicatorNameKeysValues.innerHTML =
      `
        <tr>
          <th>Año</th>
          <th>Porcentaje</th>
        </tr>
      `;
  for (let j = 0; j < indicatorDataKeys.length; j++) {
    if (oneIndicator[0].data[indicatorDataKeys[j]] !== '') {
      showIndicatorNameKeysValues.innerHTML += 
        `
        <tr>
        <td><strong>${indicatorDataKeys[j]}</strong></td>
        <td>${oneIndicator[0].data[indicatorDataKeys[j]].toFixed(2)}</td>
        </tr>
        `;
    }
  }
  document.getElementById('source-data').innerHTML =
    `
    Fuente: ${dataSource}. Última actualización: ${lastUpdated}
    `;
  const averageResult = worldBank.getAverage(arrOfValuesFiltered);
  showAverageResult.innerHTML =
    `
    El promedio de <em>${ab.target.innerText}</em> es de: <strong>${averageResult}.</strong>
    `;    
});

backBtn2.addEventListener('click', () => {
  document.getElementById('third-screen').style.display = 'none';
  document.getElementById('second-screen').style.display = 'block';
  document.getElementById('select-sort').style.display = 'block';
});