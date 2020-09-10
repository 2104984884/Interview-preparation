
const a = {
  valueOf() {
    return 'valueOf'
  },
  toString() {
    return 'toString'
  },
  get() {
    return 'get'
  }
}
console.log(a)