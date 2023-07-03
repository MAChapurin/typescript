interface UserInterface {
  age: number;
}

class User implements UserInterface {
  @Min(0)
  age = 30;
}


function Min(value: number) {
  return (
    target: Object,
    propertyKey: string | symbol
  ) => {
    let minValue = value;
    const setValue = (newValue: number) => {
      if (newValue < value) {
        console.log(`Нельзя установить значение меньше ${value}`)
      } else {
        minValue = newValue;
      }
    }

    const getValue = () => minValue;

    Object.defineProperty(target, propertyKey, {
      set: setValue,
      get: getValue
    })
  }
}

const person = new User();
console.log(person.age);

person.age = -10;
console.log(person.age);

person.age = 20;
console.log(person.age);




