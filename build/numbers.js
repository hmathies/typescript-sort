"use strict";
/*
Example of a class that is not very generic
===================================================
class Sorter {
  constructor(public collection: number[]) {}
  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      // the '- i -1' below is so we remove the last sorted element - because it doesn't need to be sorted again
      // all of this only works if collection is an array of numbers
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const leftHand = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHand;
        }
      }
    }
  }
}

const sorter = new Sorter([10, 2, 23, 3]);
sorter.sort();
console.log(sorter.collection);
*/
/* The Two Syntaxes below are Equivalent:
1)
class Sorter {
  collection: number[];

  constructor(collection: number[]) {
    this.collection = collection;
  }
}

THe BELOW IS THE Exact Equivalent to the above
2)
class Sorter {
  constructor(public collection: number[]){}
}*/
