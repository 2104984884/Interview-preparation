const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name},Am I Human? ${this.isHuman}`);
  }
}

const zhaoboy = Object.create(person);
zhaoboy.name = '蔡徐坤';