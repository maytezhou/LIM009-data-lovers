const arrDataWorldBankPeru = window.WORLDBANK.PER.indicators;//[{},{},{}...]
const showFilteredCategory = document.getElementById('show-filtered-category');
const showFilteredIndicatorNames = document.getElementById('show-filtered-indicator-names');
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

// INDICATOR CODES + DESCRIPTION
const arrIndicatorsInitialsAndDescription = [];
for(let i = 0; i < arrUniqueInitialsCode.length; i++){//["",""...]
    arrIndicatorsInitialsAndDescription.push({
       indicador :   arrUniqueInitialsCode[i],//Initials of each Indicator
       descripcion : initialsDescription[arrUniqueInitialsCode[i]]//Description
    });
};

//Funcion para Imprimir en el Dom una opcion de selecion con c/u de las descripciones de las Iniciales de los Indicadores.
const printIndicatorCodesInitialsDescription = (array, domElement) => {//[{},{},{}..] c/u de {} representa un Indicador y tiene 2 Keys indicador (2 inciales), y descripcion y DOM element
  let string = '<option>Seleccionar</option>';
  for(let i = 0; i < array.length; i++){
      string += `<option value=${array[i].indicador}>${array[i].descripcion}</option>`
  }
  domElement.innerHTML = string;
 }
 printIndicatorCodesInitialsDescription(arrIndicatorsInitialsAndDescription,selectIndicatorCodeElement);

// SEARCH BUTTON
btnSearch.addEventListener('click', () => {
  const filteredIndicatorsByCategory = worldBank.filterBySector(arrDataWorldBankPeru, selectIndicatorCodeElement.value);//[{},{},{}..] Array de Indicators By Category
  document.getElementById('first-screen').style.display = "none";
  document.getElementById('second-screen').style.display = "block";
  document.getElementById('select-sort').style.display = "block";
  document.getElementById('third-screen').style.display = "none";
  showInfoTitle.innerHTML = '';
  for (let i = 0; i < filteredIndicatorsByCategory.length; i++) {
    showInfoTitle.innerHTML =
    `
    <h2>Indicadores de ${filteredIndicatorsByCategory[i].countryName} según categoría : ${initialsDescription[selectIndicatorCodeElement.value]}</h2>
    `
  };
  showInfoData.innerHTML = '';
  for (let j = 0; j < filteredIndicatorsByCategory.length; j++){
    showInfoData.innerHTML +=
      `
      <ul><a href="#"><li id="${filteredIndicatorsByCategory[j].indicatorCode}" class="list">${filteredIndicatorsByCategory[j].indicatorName} en ${filteredIndicatorsByCategory[j].countryName}</li></a></ul>
      `
  };
  selectSort.addEventListener('change',(e)=>{
    const filteredIndicatorsByCategory = worldBank.filterBySector(arrDataWorldBankPeru, selectIndicatorCodeElement.value);
    let orderValueSelected = e.target.value;
    let arrSortedIndicators = worldBank.orderIndicatorNameOfAnObjectByAlphabet(filteredIndicatorsByCategory,orderValueSelected);
    showInfoData.innerHTML = '';
    for (let k = 0; k < arrSortedIndicators.length; k++ ) {
      showInfoData.innerHTML += 
      `
      <ul><a href="#"><li id="${arrSortedIndicators[k].indicatorCode}" class="list">${arrSortedIndicators[k].indicatorName} en ${arrSortedIndicators[k].countryName}</li></a></ul>
      `
    }
  });
});

backBtn1.addEventListener('click', () => {
  document.getElementById('second-screen').style.display = "none";
  document.getElementById('first-screen').style.display = "block";
  document.getElementById('select-sort').style.display = "none";
});

// MOSTRAR NOMBRE DE CATEGORÍA SELECCIONADO EN LA SEGUNDA PANTALLA
showInfoData.addEventListener('click', (e) =>{
  document.getElementById('second-screen').style.display = "none";
  document.getElementById('third-screen').style.display = "block";
  document.getElementById('select-sort').style.display = "none";
  const dataSource = window.WORLDBANK.PER.dataSource;
  const lastUpdated = window.WORLDBANK.PER.lastUpdated;
  const filteredIndicatorNamesByCategory = worldBank.filterBySector(arrDataWorldBankPeru, selectIndicatorCodeElement.value);
  let indicatorIdSelectedByUser = e.target.id;
  showSelectedIndicatorName.innerHTML =
  `
  <h2>${e.target.innerText}</h2>
  `
  for (let i = 0; i < filteredIndicatorNamesByCategory.length; i++) {
    if (filteredIndicatorNamesByCategory[i].indicatorCode === indicatorIdSelectedByUser) {
      let indicatorDataKeys = Object.keys(filteredIndicatorNamesByCategory[i].data);
      showIndicatorNameKeysValues.innerHTML =
      `
        <tr>
          <th>Año</th>
          <th>Porcentaje</th>
        </tr>
      `
      let indicatorsValuePercentage = [];    
      for ( let j = 0; j <indicatorDataKeys.length; j++){
        if (filteredIndicatorNamesByCategory[i].data[indicatorDataKeys[j]] != ''){
          indicatorsValuePercentage.push(filteredIndicatorNamesByCategory[i].data[indicatorDataKeys[j]]);
          showIndicatorNameKeysValues.innerHTML += 
        `
          <tr>
            <td><strong>${indicatorDataKeys[j]}</strong></td>
            <td>${filteredIndicatorNamesByCategory[i].data[indicatorDataKeys[j]]}</td>
          </tr>
        `
        document.getElementById('source-data').innerHTML =
        `
        Fuente: ${dataSource}. Última actualización: ${lastUpdated}
        `
        const averageResult = worldBank.getAverage(indicatorsValuePercentage);
        showAverageResult.innerHTML =
        `
        El promedio de <em>${e.target.innerText}</em> es de: <strong>${averageResult.toFixed(2)}.</strong>
        `
        };
      };
    };
  };
});

backBtn2.addEventListener('click', () => {
  document.getElementById('third-screen').style.display = "none";
  document.getElementById('second-screen').style.display = "block";
  document.getElementById('select-sort').style.display = "block";
});