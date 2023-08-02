const myMap = (arr, fn) => {
    const mappedArray = []
    for (let i = 0; i < arr.length; i++) {
      mappedArray.push(fn(arr[i]))
    }
    return mappedArray
  }

  const numbers = [1, 2, 3, 4, 5];

    const doubledNumbers = myMap(numbers, (num) => num * 2)
    console.log(doubledNumbers)



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

  const orders = [1, 2, 3, 4];

    const totalAmount = myReduce(orders, (acc, amount) => acc + amount, 0)
    console.log(totalAmount)



  const myFilter = (arr, fn) => {
    const filteredArray = []
    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i])) {
        filteredArray.push(arr[i])
      }
    }
    return filteredArray
  }

  const randomNumbers = [1, 2, 3, 4, 5];

  const evenNumbers = myFilter(randomNumbers, (num) => num % 2 === 0);
  console.log(evenNumbers)