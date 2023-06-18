function pickObjectkeys<T extends Record<string, any>,K extends keyof T>(obj: T, keys: K[]): Record<string, any> {
  return keys.reduce((acc, key)=> {
   return {...acc, [key]: obj[key]};
  },{} )
}

const user1 = {
  name: 'Vasya',
  age: 18,
  skills: ['typescript', 'javascript'],
  User(name) {
    this.name = name;
    this.isAdmin = false;
  },
}

const pickUser1Keys = pickObjectkeys(user1, ['age', 'skills', 'User'])
console.log(pickUser1Keys);