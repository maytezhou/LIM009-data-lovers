const arrDataWorldBankPeru = window.WORLDBANK.PER.indicators;//[{},{},{}...]
const showInfoData = document.getElementById('show-info-data');
const showFilteredCategory = document.getElementById('show-filtered-category');
const showFilteredIndicatorNames = document.getElementById('show-filtered-indicator-names');
const selectIndicatorCodeElement = document.getElementById('select-indicator-code');
const btnSearch = document.getElementById('btn-search');
const selectSortOrder = document.getElementById('select-sort');
const backBtn1 = document.getElementById('back-btn-1');
const backBtn2 = document.getElementById('back-btn-2');
const showSelectedIndicatorName = document.getElementById('show-selected-indicator-name');
const showIndicatorNameKeysValues = document.getElementById('show-indicator-name-keys-values');
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

// const obtainingOneIndicatorById=(arrOb,indicatorId)=>{//[{},{}] y indicatorId
//   let str="";
//   for(let i=0;i<arrOb.length;i++){
//     if(arrOb[i].indicatorCode===indicatorId){
//       str=arrOb[i].data;//{}
//   }

// }
// return str;// imrprimir {} 
// };

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

  selectSortOrder.addEventListener('click', (e) => {
    let userSortOrder = e.target.value;
    console.log(userSortOrder);
    console.log(worldBank.orderIndicatorNamesByAlphabet(arrDataWorldBankPeru,userSortOrder));
    console.log(arrDataWorldBankPeru);
  })
  const filteredIndicatorsByCategory = worldBank.filterBySector(arrDataWorldBankPeru, selectIndicatorCodeElement.value);//[{},{},{}..] Array de Indicators By Category
  console.log(filteredIndicatorsByCategory);
  document.getElementById('main-container').style.display = "none";
  document.getElementById('info-container').style.display = "block";
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



backBtn1.addEventListener('click', () => {
  document.getElementById('info-container').style.display = "none";
  document.getElementById('main-container').style.display = "block";
});

// MOSTRAR NOMBRE DE CATEGORÍA SELECCIONADO EN LA SEGUNDA PANTALLA
showInfoData.addEventListener('click', (e) =>{
  const dataSource = window.WORLDBANK.PER.dataSource;
  const lastUpdated = window.WORLDBANK.PER.lastUpdated;
  const filteredIndicatorNamesByCategory = worldBank.filterBySector(arrDataWorldBankPeru, selectIndicatorCodeElement.value);
  let indicatorIdSelectedByUser = e.target.id;
  document.getElementById('info-container').style.display = "none";
  document.getElementById('data-info-container').style.display = "block";
  showSelectedIndicatorName.innerHTML =
  `
  <h2>${e.target.innerText}</h2>
  `
  for (let i = 0; i < filteredIndicatorNamesByCategory.length; i++) {
    if (filteredIndicatorNamesByCategory[i].indicatorCode === indicatorIdSelectedByUser) {
      console.log(filteredIndicatorNamesByCategory[i]);
      let indicatorDataKeys = Object.keys(filteredIndicatorNamesByCategory[i].data);
      console.log(indicatorDataKeys);  
      showIndicatorNameKeysValues.innerHTML =
      `
        <tr>
          <th>Año</th>
          <th>Porcentaje</th>
        </tr>
      `    
      for ( let j = 0; j <indicatorDataKeys.length; j++){
        if (filteredIndicatorNamesByCategory[i].data[indicatorDataKeys[j]] != ''){
        showIndicatorNameKeysValues.innerHTML += 
        `
          <tr>
            <td><strong>${indicatorDataKeys[j]}</strong></td>
            <td>${filteredIndicatorNamesByCategory[i].data[indicatorDataKeys[j]]}</td>
          </tr>
        `
        console.log(indicatorDataKeys[j]);
        console.log(filteredIndicatorNamesByCategory[i].data[indicatorDataKeys[j]]);
        };
      };
    };
  };
  document.getElementById('source-data').innerHTML =
  `
  <strong>Fuente: ${dataSource}. Última actualización: ${lastUpdated}</strong>
  `
});

backBtn2.addEventListener('click', () => {
  document.getElementById('data-info-container').style.display = "none";
  document.getElementById('info-container').style.display = "block";
});