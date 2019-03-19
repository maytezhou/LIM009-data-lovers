const worldBankDataPeru = window.WORLDBANK.PER.indicators;

// SHOW FIRST INDICATOR DATA IN CONSOLE
console.log(`${worldBankDataPeru[0].indicatorName} en ${worldBankDataPeru[0].countryName}`);
console.log(worldBankDataPeru[0].data);