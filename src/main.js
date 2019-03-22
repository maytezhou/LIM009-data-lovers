
const worldBankDataPeru = window.WORLDBANK.PER.indicators;
//Retorna  un array de  objetos/Un array con todos los Indicadores de Perú 

//Obteniendo un array por indicador de los keys del Objeto Data
const newArrayDataKeys=[];
//Recorriendo cada uno de los indicadores(objetos)
for(i=0;i<worldBankDataPeru.length;i++){
 newArrayDataKeys.push(Object.keys(worldBankDataPeru[i].data));

};
console.log(newArrayDataKeys);

//Obteniendo un array por indicador de los values del Objeto Data
const newArrayDataValues=[];
//Recorriendo cada cada Indicador(objetos)
for(i=0;i<worldBankDataPeru.length;i++){
newArrayDataValues.push(Object.values(worldBankDataPeru[i].data));
};

console.log(newArrayDataValues);


const indicatorCodeSL = (indicador) => {
        return(indicador.indicatorCode.startsWith('SL.'));
    };
    
    const indicatorCodeSE = (indicador) => {
        return(indicador.indicatorCode.startsWith('SE.'));
    };
    
    // PROBANDO FILTER
    
    
    const filterBySector = (data, sector) => {
        let countryNames='';
        if (sector === 'SL') {
            countryNames = data.filter(indicatorCodeSL)
    
        } else if (sector === 'SE') {
            countryNames = data.filter(indicatorCodeSE)
        }
        return countryNames;
        
        
    };
    
    const dataFiltrada = filterBySector(worldBankDataPeru,'SL');
    console.log(dataFiltrada);
    
    console.log(filterBySector(worldBankDataPeru,'SE'));



      // Retorna un Array de Arrayes
    //Convertir el objeto Data que tiene como propiedades los años y values el pocrcentaje en un array
   for(i=0;i<worldBankDataPeru.length;i++){
    const obj = worldBankDataPeru[i].data;
    const result = Object.keys(obj).map(function(key) {
      return [Number(key), obj[key]];
    });
    console.log(result);};
    


    //Retorna un array de Objetos(cada objeto es  un indicador.data de un indicador) cada contiene propiedades 
    //que son los años y sus valores que son los porcentajes
  const onlyDataPeru=worldBankDataPeru.map((e)=>e.data);
  console.log(onlyDataPeru);

for(i=0;i<onlyDataPeru.length;i++){
console.log(onlyDataPeru[i]);

for (let prop in onlyDataPeru[i]){
        console.log(prop,onlyDataPeru[i][prop]);
        console.log(prop,onlyDataPeru[i]);
        
}

};









   const arrayWithYears=[];
  for (i=0;i<onlyDataPeru.length;i++){
       arrayWithYears.push(Object.keys(onlyDataPeru[i]));
  };
  console.log(arrayWithYears);

  const arrayWithNum=[];
  for(i=0;i<onlyDataPeru.length;i++){
          arrayWithNum.push(Object.values(onlyDataPeru[i]));
  };
  console.log(arrayWithNum);


 //Trabajando con el array de Objetos cada objeto tiene propiedades que son string(años) y los valores que son numeros
  

   /*const filterByYear = (data,anio) => {
           if((Object.keys(data))[i]===anio){
           return Object.values

           }
           return data.anio
};    */



   /* const filterRango = (data, anioInicio,anioFin) => {
       
    };    
    
    filterRango(worldBankDataPeru[i].data,2006,20015);*/


    
    
   


    // FUNCIÓN PARA MOSTRAR DATA EN DOM
    const showData=document.getElementById("show-data");
    const showDataPeru = (dataPeru, dataKeysPeru, dataValuesPeru) => {
    for (let i = 0; i < dataPeru.length; i++) {
        showData.innerHTML += `
        <div>
            <p><strong>Indicador:</strong> ${dataPeru[i].indicatorName}</p>
            <p><strong>Pais:</strong> ${dataPeru[i].countryName}</p>
            <p><strong>Data:</strong> ${dataKeysPeru[i]} : ${dataValuesPeru[i]}</p>
            </br>
        </div> 
        `;
        }
    };
   showDataPeru (worldBankDataPeru,newArrayDataKeys, newArrayDataValues);
    



//Retorna una lista de todos los objetos anonimos(de todos los indicators de Peru);
for (let i =0;i<worldBankDataPeru.length;i++){
    for (let index = 0; index < worldBankDataPeru.length; ++index) {
        console.log(worldBankDataPeru[index]);}
    
   console.log(worldBankDataPeru[i]);
};







// SHOW FIRST INDICATOR DATA IN CONSOLE
console.log(`${worldBankDataPeru[0].indicatorName} en ${worldBankDataPeru[0].countryName}`);
console.log(worldBankDataPeru[0].data);



//Me retorna un objeto anomimo (un indicador completo) el cual es llamdo por su indicatorname//using find
function labForceWom(nameOfIndicator){return nameOfIndicator.indicatorName==="Fuerza laboral con educación intermedia, mujeres (% de la fuerza laboral femenina)"};
console.log(worldBankDataPeru.find(labForceWom));
console.log(worldBankDataPeru[0]);
//INTENTO FALLIDO utilizando arrow function
//const resultado=worldBankDataPeru.find(nameOfIndicator1=>nameOfIndicator1.indicatorName==="Fuerza laboral con educación intermedia, mujeres (% de la fuerza laboral femenina");
//console.log(resultado);



//Me retorna un objeto anonimo(un indicador completo)el cual es llamado por su indicatorcode
function codelabForceWom(codeOfIndicator){return codeOfIndicator.indicatorCode==="SL.TLF.CACT.NE.ZS"};
console.log(worldBankDataPeru.find(codelabForceWom));

function codeSL(codeOfIndicator1){return codeOfIndicator1.indicatorCode==="SL"};
console.log(worldBankDataPeru.find(codeSL));


//Array de Strings con los Indicators Name de Peru
const arrayWithStringOfIndicatorsName=worldBankDataPeru.map((worldBankDataPeru)=>worldBankDataPeru.indicatorName);
console.log(arrayWithStringOfIndicatorsName);











//Array de Strings con la data(objeto con las propiedades años y sus valores) 
arrayWithStringOfIndicatorsOnlyData=worldBankDataPeru.map((worldBankDataPeru)=>worldBankDataPeru.data);
console.log(arrayWithStringOfIndicatorsOnlyData);

//IMPRIME TODOS LOS ELEMENTOS EN UNA LINEA  ES UN STRING -Lista DE STRINGS (con cada Indicator Name de Peru)
const eachIndicatorNameString=arrayWithStringOfIndicatorsName.forEach(function(element){console.log(element)});
//IMPRIME TODOS LOS ELEMENTOS EN UNA LINEA -ES UN STRING -Lista de Objetos(de data de Peru)
const eachDataString=arrayWithStringOfIndicatorsOnlyData.forEach(function(element1){console.log(element1)});


//Array de strings con los Indicators Code de Peru
const arrayWithStringOfIndicatorsCode=worldBankDataPeru.map((worldBankDataPeru)=>worldBankDataPeru.indicatorCode);
console.log(arrayWithStringOfIndicatorsCode);
