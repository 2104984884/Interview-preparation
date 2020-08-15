// 已知如下数组：
// var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组

var midres = []
var finres = []
function func(arr) {
  arr.map(item => {
    // console.log(item)
    if (typeof item === "object") {
      func(item)
    } else {
      midres.push(item)
    }
  })
  // console.log(midres.sort((a, b) => a - b))
  midres = midres.sort((a, b) => a - b)
  // console.log(midres)
  midres.map(item => {
    if (finres.indexOf(item) == -1) {
      finres.push(item)
    }
  })
  return finres
}

console.log(func([[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]))
