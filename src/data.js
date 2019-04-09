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

  getAverage: (arrOfNum) => {
    let sumTotal = 0;
    for (let i = 0; i < arrOfNum.length; i++) {
      sumTotal += arrOfNum[i];
    }
    return (sumTotal) / (arrOfNum.length);
  }
};

