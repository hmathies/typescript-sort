"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    //compare returns a boolean and takes in two numbers - lefthand side and right.  THe goal is to decide to swap to elements in a pair - checking to see which one is greater in order to sort. NOte: we could just pass one number and then add 1 to it.
    NumbersCollection.prototype.compare = function (leftIndex, rightIndex) {
        // swap if leftIndex is greater than right.  Otherwise do nothing because they are in correct order already and don't need swapped.
        return this.data[leftIndex] > this.data[rightIndex];
    };
    // execute if compare function returns true.  Swap needs to take in the two index variables in order to swap
    NumbersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
/*NOTE:  Putting on the key word 'get' like on line 4, allows you to access length as though it were a property rather than a function.  If we wrote it like the following:
length(): number {
  return this.data.length;
}
we would have to call it like a method.  Using a getter (or accessor) uses the 'get' keyword and nothing changes except how you call the method.  Now, you can write it out like this:

const collection = new NumbersCollection([1,2,3]);
collection.length;
*/
