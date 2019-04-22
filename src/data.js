window.worldBank = {
  getInitialsIndicatorCodeValues: (array) => { //  [{},{}]
    const arrOfStr = array.map((indicador) => {
      return indicador.indicatorCode.slice(0, 3);
    });
    return arrOfStr; // ["","",""]
  },

  getUniqueInitialsIndicatorCodeValues: (array) => { //  ["",""]
    const newArrayUniqueValues = [];
    array.forEach((ele) => {
      if (newArrayUniqueValues.indexOf(ele) === -1) {
        newArrayUniqueValues.push(ele);
      }
    });
    return newArrayUniqueValues; //  ["",""]
  },

  filterBySector: (arrayObj, initials) => { // [{},{},{}]  and  initials of IndicatorCode of each Indicator
    const arrOfIndicatorsFilteredByInitials = arrayObj.filter((indicator) => {
      return indicator.indicatorCode.startsWith(initials);
    });
    return arrOfIndicatorsFilteredByInitials; //  [{},{},{}] array of Indicators filtered by Sector
  },

  orderIndicatorNameOfAnObjectByAlphabet: (arrObject, userSortOrder) => {
    if (userSortOrder === 'ascendant') {
      arrObject.sort((ab, bc) => {
        return ab.indicatorName.localeCompare(bc.indicatorName);
      });
    } else {
      arrObject.sort((bc, ab) => {
        return ab.indicatorName.localeCompare(bc.indicatorName);
      });
    }
    return arrObject;
  },
  filterByIndicatorNameSelectedByUser: (arrayObj3, indicatorName1SelectedByUser) => { //  [{},{}...] y  IndicatorName o IndicatorId selected by user 
    const arrOfOneIndicatorSelectedByUser = arrayObj3.filter((indicator) => {
      return indicator.indicatorCode === indicatorName1SelectedByUser;
    });
    return arrOfOneIndicatorSelectedByUser; //  [{}]
  },

  getYearsValueOfOneIndicatorSelectedByUser: (arrayOfOneObj2selectedByUser) => { //  [{}] 
    const arrOfYearsOfIndicatorSelectedByUser = Object.keys(arrayOfOneObj2selectedByUser[0].data);
    return arrOfYearsOfIndicatorSelectedByUser; //  array Of Years of one indicator [1960,1961,...] 
  },
  getPorcentageValuesOfOneIndicatorSelectedByUser: (objOneIndicator, arrOfYears) => { // [{}]  y  [1960,1961,...] 
    let indicatorsValuePercentageOfOneIndicator = [];
    arrOfYears.forEach((oneYear) => {
      if (objOneIndicator[0].data[oneYear] !== '') {
        indicatorsValuePercentageOfOneIndicator.push(objOneIndicator[0].data[oneYear]);
      }
    });
    return indicatorsValuePercentageOfOneIndicator; //  [porcentage,num,num]
  },
  getAverage: (arrOfNum) => { // [num,num]
    const totalSum = arrOfNum.reduce((acc, value) => acc + value, 0);
    return ((totalSum) / (arrOfNum.length)).toFixed(2);
  }
};

