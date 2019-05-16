const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newArr = Array.isArray(collection) ? collection.slice() : Object.values(collection);
      newArr.forEach(function (value, index, newArr) {
        callback(value);
      });
      return collection;
    },

    map: function(collection, callback) {
      const arr = Array.isArray(collection) ? collection.slice() : Object.values(collection);
      let newArr = []
      for (var i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]))
      }
      return newArr
    },

    reduce: function(collection, callback, acc) {
      (!!acc) ? acc : acc = -2;

      collection.forEach(function (value, index, collection) {
        acc = callback(acc, value, collection)
      })

			return acc;
    },

    find: function(collection, predicate) {
      return collection.find(predicate)
    },

    filter: function(collection, predicate) {
      return collection.filter(predicate);
    },

    size: function(collection) {
      const newArr = Array.isArray(collection) ? collection.slice() : Object.keys(collection);
      return newArr.length;
    },

    first: function(array, n) {
      return !!n ? array.slice(0,n) : array[0]
    },

    last: function(array, n) {
      const len = array.length
      return !!n ? array.slice(-n,len) : array[len-1]
    },

    compact: function(array) {
      return array.filter(function(value) {
        return !!value == true
      })
    },

    sortBy: function(array, callback) {
      const newArr = Array.isArray(array) ? array.slice() : Object.keys(array);
      return newArr.sort(function(a,b) {
        return callback(a) - callback(b)
      });
    },

    flatten: function(array, shallow) {
      if (shallow == true) {
        return array.flat()
      } else {
        return array.reduce((acc, val) =>
        Array.isArray(val) ? acc.concat(fi.flatten(val)) : acc.concat(val), []);
      }
    },

    uniq: function(collection, isSorted, callback) {
      if (isSorted) {
        return collection.sort()
      } else if (!callback) {
        return Array.from(new Set(collection))
      } else {
        const uniqArr = new Set()
        for (let value of collection) {
          let newVal = callback(value)
          if (!uniqArr.has(newVal+1)) {
            uniqArr.add(newVal+1)
          }
        }
        return Array.from(uniqArr).sort();
      }
    },

    keys: function(object) {
      return Object.keys(object)
    },

    values: function(object) {
      return Object.values(object)
    },

    functions: function(object) {
        let result = [], key;
        for (key in object) {
            if (typeof object[key] == 'function') {
                result.push(key)
            }
        }
      return result.sort();
    },
  }
})()

fi.libraryMethod()
