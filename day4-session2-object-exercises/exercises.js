function arrayToObj(arr) {
    const obj = {}
    for(let i = 0; i < arr.length; i++) {
        obj[arr[i][0]] = arr[i][1]
    } 
    return obj
  }
  
  
  console.log(arrayToObj([['a', 1], ['b', 2]]))


  function objToArray(obj) {
      const arr = []
      for(let key in obj) {
          arr.push([key, obj[key]])
      }
      return arr
  }

  

  function swapObj(Object) {
      const output = {}
      for(let key in Object) {
        //  var prop = key;
       //   var val = obj[key]
       //   obj[key]

          output[Object[key]] = key
      }
      return output
  }

  console.log(swapObj({a: '1', b: '2'}))