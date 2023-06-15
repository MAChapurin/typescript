type StrNumSym = string | number | symbol;

type SimpleObj<T extends StrNumSym, N extends StrNumSym> = {
  // [key in T]: N;
  [key in N]?: T;
};

function swapKeysAndValues<T extends StrNumSym,N extends StrNumSym>(obj: Record<T, N>): Record<N, T> {
  const swapObj: any = {};
  Object.entries(obj).map(el => {
    return el.reverse();
  }).forEach((el)=> {
    const [key, value] = el;
    switch(typeof key) {
      case 'string':
      case 'number':
      case 'symbol':  
        swapObj[key] = value;
        break;
      default: 
        break;
    }
  })
  console.log(swapObj);
  return swapObj;
}

const obj1 = {
  a: 1,
  b: 2,
  c: 3
}

const obj2 = {
  1: 'a',
  2: 'b',
  3: 'c'
}

swapKeysAndValues(obj1);
swapKeysAndValues(obj2);