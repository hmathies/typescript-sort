"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var numbers = new NumbersCollection_1.NumbersCollection([1000, 2, 2300, 3]);
var sorter = new Sorter_1.Sorter(numbers);
sorter.sort();
console.log(numbers.data);
/*
When we create an instance of a sorter, we pass in the instance of NumbersCollection (which is numbers) which has the data and all the methods needed to implement Sorter
*/
