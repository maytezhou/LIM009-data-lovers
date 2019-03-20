const worldBankDataPeru = window.WORLDBANK.PER.indicators;
console.log(worldBankDataPeru);


let newArray='';
for(i=0;i<worldBankDataPeru.length;i++){
newArray+=worldBankDataPeru[i];
}
console.log(newArray);


// SHOW FIRST INDICATOR DATA IN CONSOLE
console.log(`${worldBankDataPeru[0].indicatorName} en ${worldBankDataPeru[0].countryName}`);
console.log(worldBankDataPeru[0].data);

//Me retorna un objeto anomimo (un indicador completo) el cual es llamdo por su indicatorname//using find
function labForceWom(nameOfIndicator){return nameOfIndicator.indicatorName==="Fuerza laboral con educación intermedia, mujeres (% de la fuerza laboral femenina)"};
console.log(worldBankDataPeru.find(labForceWom));

//INTENTO FALLIDO
//const resultado=worldBankDataPeru.find(nameOfIndicator1=>nameOfIndicator1.indicatorName==="Fuerza laboral con educación intermedia, mujeres (% de la fuerza laboral femenina");
//console.log(resultado);

//Me retorna un objeto anonimo(un indicador completo)el cual es llamado por su indicatorcode
function codelabForceWom(codeOfIndicator){return codeOfIndicator.indicatorCode==="SL.TLF.CACT.NE.ZS"};
console.log(worldBankDataPeru.find(codelabForceWom));


//Array de Strings con los Indicators Name de Peru
const arrayWithStringOfIndicatorsName=worldBankDataPeru.map((worldBankDataPeru)=>worldBankDataPeru.indicatorName);
console.log(arrayWithStringOfIndicatorsName);


//IMPRIME TODOS LOS ELEMENTOS PERO CADA ELEMENTO DEL ARRAY EN UNA LINEA -ARRAY DE STRINGS (cada Indicator Name de Peru)
const eachIndicatorNameString=arrayWithStringOfIndicatorsName.forEach(function(element){console.log(element)});

console.log(eachIndicatorNameString);
//Array de strings con los Indicators Code de Peru
const arrayWithStringOfIndicatorsCode=worldBankDataPeru.map((worldBankDataPeru)=>worldBankDataPeru.indicatorCode);
console.log(arrayWithStringOfIndicatorsCode);

let stringOfIndicatorsCode='';
 for(i=0;i<arrayWithStringOfIndicatorsCode;i++){
stringOfIndicatorsCode+=arrayWithStringOfIndicatorsCode[i];
 };
 console.log(stringOfIndicatorsCode);