type AnyObj = Record<string, any>;

function difference(
  objectOne: AnyObj,
  objectTwo: AnyObj
): Pick<AnyObj, keyof AnyObj> {
  const keyObjOne = Object.keys(objectOne);
  const keyObjTwo = Object.keys(objectTwo);
  const resultObject = {};
  keyObjOne.forEach((el) => {
    if (!keyObjTwo.includes(el)) {
      resultObject[el] = objectOne[el];
    }
  });
  return resultObject;
}

const a = {
  a: 5,
  b: 'any',
  d: 'pelmeny',
  User(name) {
    this.name = name;
    this.isAdmin = false;
  },
};
const b = {
  a: 10,
  c: true,
  e: [1, 2, 3],
  sayHello() {
    console.log('hello');
  },
  User(name) {
    this.name = name;
    this.isAdmin = false;
  },
};
console.log(difference(a, b));
