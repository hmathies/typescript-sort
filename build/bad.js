"use strict";
/* This is an example of unreusable code.  If we ever decide to add support for adding some other type of data collection we would have to add a lot of logic inside here */
/*class Sorter {
  constructor(public collection: number[] | string) {}
  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // If collection is an array of numbers
        if(this.collection instanceof Array){
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }

        // If collection is a string
        if(typeof this.collection === 'string'){
          this.collection.
        }
      }
    }
  }
}
*/
