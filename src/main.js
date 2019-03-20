




const worldBankDataPeru = window.WORLDBANK.PER.indicators;
//Retorna  un el primer objeto anonimo (el primer indicador) de los Indicadores de Perú y con su posicion dentro de un array
console.log(worldBankDataPeru[0],[0]);


//Retorna una lista de todos los objetos anonimos(de todos los indicators de Peru);
for (let i =0;i<worldBankDataPeru.length;i++){
   console.log(worldBankDataPeru[i]);
};





// SHOW FIRST INDICATOR DATA IN CONSOLE
console.log(`${worldBankDataPeru[0].indicatorName} en ${worldBankDataPeru[0].countryName}`);
console.log(worldBankDataPeru[0].data);



//Me retorna un objeto anomimo (un indicador completo) el cual es llamdo por su indicatorname//using find
function labForceWom(nameOfIndicator){return nameOfIndicator.indicatorName==="Fuerza laboral con educación intermedia, mujeres (% de la fuerza laboral femenina)"};
console.log(worldBankDataPeru.find(labForceWom));
console.log(worldBankDataPeru[0]);




//INTENTO FALLIDO
//const resultado=worldBankDataPeru.find(nameOfIndicator1=>nameOfIndicator1.indicatorName==="Fuerza laboral con educación intermedia, mujeres (% de la fuerza laboral femenina");
//console.log(resultado);

//Me retorna un objeto anonimo(un indicador completo)el cual es llamado por su indicatorcode
function codelabForceWom(codeOfIndicator){return codeOfIndicator.indicatorCode==="SL.TLF.CACT.NE.ZS"};
console.log(worldBankDataPeru.find(codelabForceWom));


//Array de Strings con los Indicators Name de Peru
const arrayWithStringOfIndicatorsName=worldBankDataPeru.map((worldBankDataPeru)=>worldBankDataPeru.indicatorName);
console.log(arrayWithStringOfIndicatorsName);


//Array de Strings con la data(objeto con las propiedades años y sus valores) 
const arrayWithStringOfIndicatorsOnlyData=worldBankDataPeru.map((worldBankDataPeru)=>worldBankDataPeru.data);
console.log(arrayWithStringOfIndicatorsOnlyData);

//IMPRIME TODOS LOS ELEMENTOS PERO CADA ELEMENTO DEL ARRAY EN UNA LINEA -ARRAY DE STRINGS (cada Indicator Name de Peru)
const eachIndicatorNameString=arrayWithStringOfIndicatorsName.forEach(function(element){console.log(element)});
//IMPRIME TODOS LOS ELEMENTOS PERO CADA ELEMENTO DEL ARRAY EN UNA LINEA -ARRAY DE STRINGS (cada objeto data de Peru)
const eachDataString=arrayWithStringOfIndicatorsOnlyData.forEach(function(element1){console.log(element1)});

console.log(eachIndicatorNameString);
//Array de strings con los Indicators Code de Peru
const arrayWithStringOfIndicatorsCode=worldBankDataPeru.map((worldBankDataPeru)=>worldBankDataPeru.indicatorCode);
console.log(arrayWithStringOfIndicatorsCode);

let stringOfIndicatorsCode='';
 for(i=0;i<arrayWithStringOfIndicatorsCode;i++){
stringOfIndicatorsCode+=arrayWithStringOfIndicatorsCode[i];
 };
 console.log(stringOfIndicatorsCode);