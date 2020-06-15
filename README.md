# Goal of the application to create ONE algorithm that sorts multiple types of data. We have to customize the comparison of two elements and the swapping logic.WE are making a class (Sorter.ts) as generic as possible

run `npx tsc index.ts` to run simple tsc files from terminal. `tsc index.ts` doesn't work for me - must prefix with npx.

`ts.config.json` - typescript compiler configuration file for customizing how the compiler behaves.
to generate one, run `npx tsc --init` (or just tsc --init) from root of project

to tell typescript to move all the files with `.js` extension (generated from compiler) to the build folder, do the following in `ts.config.json`:

1. find "rootDir" - which holds a relative path reference to the directory that holds all of the source code. Uncomment the line, and include the "./src" directory.
   "rootDir": "./src"
2. find "outDir" - which is where we want to place compiled code. Uncomment and include "./build" directory:
   "outDir": "./build"

   ***

   running `npx tsc -w` (`tsc -w`) will watch all the files and continuosly compile the code.

Running javascript files from
the build in the terminal:

1. at root of project, run `npx tsc -w'
2. open another terminal window - still at root. Run `node build/index.js' - this will output to the terminal

More advanced way is by installing and using nodemon and concurrently:

1. npm install nodemon concurrently
2. add new script tags in package.json
   `"scripts": { "start:build": "npx tsc -w", "start:run": "nodemon build/index.js" }, "start": "concurrently npm:start:\*"`

The Sort
This project is using Bubble Sort which is not a recommended sorting algorithm. The purpose of this application is not algorithms, however. The purpose is to practice typescript and resuable functions.

---

#The Problem with applying one sorting function that can work with arrays and string is because there are fundamental differences between arrays and string.

For example:

1. with strings, if you do the following code, it won't perform as one might expect:
   "X" > "a"
   // returns false
   This is because when javascript compares the two strings, it is looking at the charCodeAt property
   "X".charCodeAt(0) => // returns 88
   "a".charCodeAt(0) => // returns 97
   Behind the scenes, Javascript is comparing like so:
   88 > 97 // which is false
   Javascript is comparing the charCode number, which might be unexpected.

So an algorithm which compares an array of numbers and then swaps, can not be done with strings.

#Reminder about Union Types (or operator)
`constructor(public collection: number[] | string) {}`
Typescript will only allow properties and methods which both contain. You will only be able to access to the properties that are common to both(all) of them.

<img src="![union](https://user-images.githubusercontent.com/29784328/84605484-999a9580-ae6b-11ea-9341-7b635966de52.png)">

![union](https://user-images.githubusercontent.com/29784328/84605484-999a9580-ae6b-11ea-9341-7b635966de52.png)

If you see an error message from typescript like "Index signature in type 'string | number[]' only permits reading. " that is because typescript is telling you because of the union operator you are restricted from using that operator (even if it is a valid operator on one - if it is not shared between both (all) you won't be able to access it )

# Type Guards

a way to clarify to typescript a type we are working with
For example, we can wrap a block of code with an if statements:
if(this.collection instanceof Array){
/// ... array code goes here
}
Or, we can clarify what it is:

        if(typeof this.collection === 'string'){
          // string code goes here
        }

![Type Guards](https://user-images.githubusercontent.com/29784328/84605811-44ac4e80-ae6e-11ea-94e3-cf06191c7bb1.png)

Typescript will only allow you to restore access to a string, number, or boolean.
If using type guards "instanceof" you can only reference constructor function instanceof. Use this if using a type guard with something that is not a string, number, or boolean.

# ReUsable Solution

Create a generate Sorter.ts class. Then create a NumberCollection.ts class with the data, comparison, and swap logic.

## Adding Interfaces

think of them as instructions on how to be eligible for sorting
