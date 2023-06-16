type keys = string | number | symbol;
type anyObj = Record<keys, any>

function difference(objectOne: anyObj, objectTwo: anyObj): Partial<anyObj> {
  const keyObjOne = Object.keys(objectOne);
  const keyObjTwo = Object.keys(objectTwo);
  const resultObject = {};
  keyObjOne.forEach(el => {
    if (!keyObjTwo.includes(el)) {
      resultObject[el] = objectOne[el]
    }
  })
  return resultObject
}

const a = {a: 5, b: 'any', d: 'pelmeny'}
const b = {a: 10, c: true, e: [1,2,3]}
console.log(difference(a,b))