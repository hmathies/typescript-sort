import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbers = new NumbersCollection([1000, 2, 2300, 3]);
const sorter = new Sorter(numbers);
sorter.sort();
console.log(numbers.data);

/*
When we create an instance of a sorter, we pass in the instance of NumbersCollection (which is numbers) which has the data and all the methods needed to implement Sorter
*/
