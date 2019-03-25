const showData = document.getElementById('show-data');
const filterIndicatorCode = document.getElementById('filter-indicator-code');
const filterYears = document.getElementById('filter-years');
const btnFilter = document.getElementById('btn-filter');
const btnReset = document.getElementById('btn-reset');

// FILTER BUTTON
btnFilter.addEventListener('click', () => {
    let filterIndicatorValue = filterIndicatorCode.value;
    //let filterByYears = filterYears.value;
    console.log(filterIndicatorValue);
    // filterBySector(worldBankDataPeru, filterIndicatorValue);
    const dataFiltrada = filterBySector(worldBankDataPeru, filterIndicatorCode.value);
    // console.log(filterByYears);
    console.log(dataFiltrada);
    for (let i = 0; i < dataFiltrada.length; i++) {
      showData.innerHTML += `
          <ul><li>${dataFiltrada[i].indicatorName} en ${dataFiltrada[i].countryName}</li></ul>
          `;
      }
  });

  btnReset.addEventListener('click', () => {
      showData.innerHTML = '';
  })
