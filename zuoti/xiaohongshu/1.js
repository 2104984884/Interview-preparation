
// setTimeout(() => {
//   console.log(1)
// }, 0)
// new Promise(function execulor(resolve) {
//   console.log(2)
//   for (var i = 0;i< 10000; i += 1) {
//     i == 9999 && resolve()
//   }
//   console.log(3)
// }).then(function () {
//   console.log(4)
// })
// console.log(5)

function paddingNum(num) {
  // return res = num.toString
  let res1 = num.toString()
  if (res1.includes('.')) {
    let res2 = help(res1.split('.')[0])
    return res2 + '.' + res1.split('.')[1]
  } else {
    return help(res1)
  }
  function help(str) {
    var res3 = str.split('');
    var count = 0
    for (i = str.length % 3; i < str.length - 1; i = i + 3) {
      res3.splice(i + count, 0, ',');
      count++
    }
    return res3.join('')
  }
}
console.log(paddingNum(1234567.888))

function productExceptSelf(arr) {
  var res = []
  var totalMultiplier = arr.reduce(function (a, b) {
    return a * b;
  })
  for (i = 0; i < arr.length; i++) {
    res.push(totalMultiplier / arr[i])
  }
  return res
}
console.log(productExceptSelf([1, 2, 3, 4]))

function decrypt(str) {
  // return str.trim().help().
}

new Promise((resolve) => {
  console.log('1')
  resolve()
  console.log('2')
}).then(() => {
  console.log('3')
})
setTimeout(() => {
  console.log('4')
})
console.log('5')


function func(num) {
  var max = 0, res = 0
  var arr = (num).toString(2).split('');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      max++
    } else {
      max = 0
    }
    if (res < max) {
      res = max;
    }
  }
  return res
}
console.log(func(13))
