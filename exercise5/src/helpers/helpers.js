export default {
  // group an array by key and returns an object containing percentage for each group
  // ex: groupByKey([{color: 'blue'}, {color: 'green'}, {color: 'blue'}, {color: 'blue'}], 'color')  =>  {blue: 0.75, green: 0.25}
  groupByKey(array, key) {
    // TODO: implement logic here
    if (!array) return;

    const newArr = array.reduce((hash, obj) => {
      if (obj[key] === undefined) return hash;
      return Object.assign(hash, {
        [obj[key]]: (hash[obj[key]] || []).concat(obj),
      });
    }, {});

    Object.keys(newArr).forEach(function(key) {
      newArr[key] = newArr[key].length / array.length;
    });

    return newArr;
  },
  // get the value of an object at a given dotted path
  // ex: getValueAtPath({my: {dotted: {path: 123}}}, 'my.dotted.path')  =>  123
  getValueAtPath(obj, path, defaultValue = 'none') {
    // TODO: implement logic here
    return path.split('.').reduce((o, k) => (o || {})[k], obj);
  },
};
