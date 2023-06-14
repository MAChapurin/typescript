'use strict';

interface Bucket {
  [key: string]: { [key: string]: any };
}

class CopyMap {
  private bucket: Bucket = {};

  static getHash(value: string): string {
    return parseInt(`${value.length}`,16).toString();
  }
  set(key: string, value: any): this {
    const hash = CopyMap.getHash(key);
    if (this.bucket[hash]) {
      this.bucket[hash][key] = value;
    } else {
      this.bucket[hash] = {
        [key]: value,
      };
    }
    return this;
  }

  get(key: string) {
    return this.bucket?.[CopyMap.getHash(key)];
  }

  delete(key: string) {
    const hash = CopyMap.getHash(key);
    if (this.bucket[hash]) {
    }
    const newObj: Bucket = {};
    Object.entries(this.bucket)
      .filter((el) => {
        return el[0] !== hash;
      })
      .forEach((el) => {
        const [property, value] = el;
        newObj[property] = value;
      });

    this.bucket = { ...newObj };
  }

  clear(): void {
    this.bucket = {};
  }

  size(): number {
    return Object.keys(this.bucket).length;
  }
  print(): void {
    console.log(this.bucket);
  }
}

console.log('start');

const myMap = new CopyMap();
myMap.set('Paris', 28).set('London', 20).set('Peterburg', 12);
myMap.print();
myMap.delete('London');
myMap.print();
console.log(myMap.size());
myMap;
myMap.clear();
myMap.print();

console.log('finish');
