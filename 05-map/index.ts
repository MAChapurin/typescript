'use strict'

type PropertyType = string | number;
type ValueType = any;

interface Bucket {
  [key: PropertyType]: ValueType;
}

class CopyMap {
  private bucket: Bucket = {};
  //Хранить данные в buckets, hash которых расчитывать по какой логике
  //Это тз ужасно
  
  set(key:PropertyType, value: ValueType): this {
    this.bucket[key] = value;
    return this
  }

  get(key: PropertyType) {
    return this.bucket?.[key]
  }

  delete(key: PropertyType) {
    const newObj: Bucket = {}
    Object.entries(this.bucket).filter(el => {
      return el[0] !== key;
    }).forEach(el => {
      const [property, value] = el;
      newObj[property] = value;
    })
    
    this.bucket = {...newObj}
  }

  clear(): void {
    this.bucket = {}
  }

  size(): number {
    return Object.keys(this.bucket).length
  }
  print(): void {
    console.log(this.bucket)
  }

}

console.log('start')

const myMap = new CopyMap();
myMap.set('Moscow',28).set('London',20).set('Peterburg', 12);
myMap.print();
myMap.delete('London');
myMap.print();
console.log(myMap.size);
myMap
myMap.clear();
myMap.print();

console.log('finish');