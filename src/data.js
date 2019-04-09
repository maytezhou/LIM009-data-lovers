window.worldBank = {
  getInitialsIndicatorCodeValues: (array) => {
    const newArrayStrings = [];
    for (let i = 0; i < array.length; i++) {
      const string = array[i].indicatorCode.slice(0, 3);
      newArrayStrings.push(string);
    }
    return newArrayStrings;
  },

  getUniqueInitialsIndicatorCodeValues: (array) => {
    const newArrayUniqueValues = [];
    for (let i = 0; i < array.length; i++) {
      if (newArrayUniqueValues.indexOf(array[i]) === -1) {
        newArrayUniqueValues.push(array[i]);
      }
    }
    return newArrayUniqueValues;
  },

  filterBySector: (arrayObj, initials) => {
    let str = [];
    for (let i = 0; i < arrayObj.length; i++) {
      arrayObj[i];
      if (arrayObj[i]['indicatorCode'].startsWith(initials)) {
        str.push(arrayObj[i]);
      }
    }
    return str;
  },

  orderIndicatorNameOfAnObjectByAlphabet: (arrObject, userSortOrder) => {
    if (userSortOrder === 'ascendant') {
      arrObject.sort(function(ab, bc) {
        return ab.indicatorName.localeCompare(bc.indicatorName);
      });
    } else if (userSortOrder === 'descendant') {
      arrObject.sort(function(bc, ab) {
        return ab.indicatorName.localeCompare(bc.indicatorName);
      });
    }
    return arrObject;
  },
  filterByIndicatorNameSelectedByUser: (arrayObj3, indicatorName1SelectedByUser) => { //  [{},{}...] y  IndicatorName o IndicatorId selected by user 
    let oneIndicator = [];
    for (let i = 0; i < arrayObj3.length; i++) {
      arrayObj3[i];
      if (arrayObj3[i]['indicatorCode'] === indicatorName1SelectedByUser) {
        oneIndicator.push(arrayObj3[i]);
      }
    }
    return oneIndicator; //  [{}];
  },
  
  getYearsValueOfOneIndicatorSelectedByUser: (arrayOfOneObj2, indicatorNameSelectedByUser) => { //  [{}] y domElementSelected IndicatorName selected by User
    let arrOfArrIndicatorDataKeys;
    if (arrayOfOneObj2[0].indicatorCode === indicatorNameSelectedByUser) {
      arrOfArrIndicatorDataKeys = (Object.keys(arrayOfOneObj2[0].data));
    }
    return arrOfArrIndicatorDataKeys; //  array Of Years of one indicator
  },
  getPorcentageValuesOfOneIndicatorSelectedByUser: (objOneIndicator, arrOfYears) => { // [{}]  y  [1960,1961,...] 
    let indicatorsValuePercentageOfOneIndicator = [];
    for (let i = 0; i < arrOfYears.length; i++) {
      if (objOneIndicator[0].data[arrOfYears[i]] !== '') {
        indicatorsValuePercentageOfOneIndicator.push(objOneIndicator[0].data[arrOfYears[i]]);
      }
    }
    return indicatorsValuePercentageOfOneIndicator ; //  [porcentage,num,num]
  },

  getAverage: (arrOfNum) => {
    let sumTotal = 0;
    for (let i = 0; i < arrOfNum.length; i++) {
      sumTotal += arrOfNum[i];
    }
    return ((sumTotal) / (arrOfNum.length)).toFixed(2);
  }
};

