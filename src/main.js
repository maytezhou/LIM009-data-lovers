// const worldBankDataPeru = window.WORLDBANK.PER.indicators;
// const showData = document.getElementById('show-data');

// SHOW FIRST INDICATOR DATA IN CONSOLE
// console.log(`${worldBankDataPeru[0].indicatorName} en ${worldBankDataPeru[0].countryName}`);
// console.log(worldBankDataPeru[0].data);

// TURNING OBJECTS INTO ARRAYS
// const newArrayDataKeys = [];
// for (let i = 0; i < worldBankDataPeru.length; i++) {
//     newArrayDataKeys.push(Object.keys(worldBankDataPeru[i].data));
// }
// console.log(newArrayDataKeys);

// const newArrayDataValues = [];
// for (let i = 0; i < worldBankDataPeru.length; i++) {
//     newArrayDataValues.push(Object.values(worldBankDataPeru[i].data));
// }
// console.log(newArrayDataValues);

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