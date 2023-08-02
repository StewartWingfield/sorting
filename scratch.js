const myMap = (arr, fn) => {
    const mappedArray = []
    for (let i = 0; i < arr.length; i++) {
      mappedArray.push(fn(arr[i]))
    }
    return mappedArray
  }



  
  const myReduce = (arr, fn, initialValue) => {

    let accumulator
    let startIndex

    if (initialValue === undefined) {
      accumulator = arr[0]
      startIndex = 1
    } else {
      accumulator = initialValue
      startIndex = 0
    }
    
    for (let i = startIndex; i < arr.length; i++) {
      accumulator = fn(accumulator, arr[i])
    }
    return accumulator
  }




  const myFilter = (arr, fn) => {
    const filteredArray = []
    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i])) {
        filteredArray.push(arr[i])
      }
    }
    return filteredArray
  }