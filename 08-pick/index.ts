type keyType = string | number | symbol;
type abstractObj = Record<keyType, any>

function pickObjectkeys<T extends abstractObj,K extends keyof T>(obj: T, keys: K[]): abstractObj {
  return keys.reduce((acc, key)=> {
   return {...acc, [key]: obj[key]};
  },{} )
}

const user1 = {
  name: 'Vasya',
  age: 18,
  skills: ['typescript', 'javascript']
}

const pickUser1Keys = pickObjectkeys(user1, ['age', 'skills'])
console.log(pickUser1Keys);