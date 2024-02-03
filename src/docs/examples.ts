type Example = {
  slug: string;
  code: string;
  slideName?: string;
  url?: string;
};

export const welcome: Example[] = [
  {
    slug: "w1",
    code: `logs("Hello World!!");`,
    slideName: "Welcome to the Playground!",
    url: "welcome/w1",
  },
  {
    slug: "w2",
    code: `logs("Hello World!!");

logs("Hello " + "World" + "!!");
`,
    slideName: "A Simple Overview",
    url: "welcome/w2",
  },
  {
    slug: "w3",
    code: `logs("Congratulations! You have completed the first section! 😊");`,
    slideName: "Congratulations!",
    url: "welcome/w3",
  },
];

export const dataTypes: Example[] = [
  {
    slug: "welcome",
    code: `const Lang = "DE";
logs("Welcome to " + Lang + " data types! 😊");
`,
    slideName: "Welcome to Data Types Section!",
    url: "dataTypes/welcome",
  },
  {
    slug: "numeric",
    code: `// Integers are whole numbers
const x = 5;
const y = 10;

// Floats are numbers with decimal points
const z = 1.1;
const w = 2.2;

// Decimals are numbers with decimal points
const a = decimal(1.1);
const b = decimal(2.2);

// Integers, floats, and decimals can be added together
logs(x + z + a); // 7.2
`,
    slideName: "What are Numeric Types?",
    url: "dataTypes/numeric",
  },
  {
    slug: "int",
    code: `const x = 5;
const y = 10;

// You can't have an integer less/more than this range [-9223372036854775808 to 9223372036854775807]

const z = 9223372036854775807;
const w = 9223372036854775809; // Error will be thrown here

const a = -9223372036854775805;
const b = -9223372036854775808; // Error will be thrown here
`,
    slideName: "What is int type?",
    url: "dataTypes/int",
  },
  {
    slug: "float",
    code: `const x = 5.5;
const y = 10.5;

const a = 1.92233720368547558073223332;

logs(a); // 1.9223372036854756
`,
    slideName: "What is float type?",
    url: "dataTypes/float",
  },
  //   {
  //     slug: "floatIssue",
  //     code: `const x = 1.2 - 1;
  // logs(x); // 0.19999999999999996
  // `,
  //     slideName: "Floating Point: Issues and Limitations",
  //     url: "dataTypes/floatIssue",
  //   },
  {
    slug: "decimal1",
    code: `const x = decimal(1.2) - decimal(1);
const y = 1.2 - 1;

logs(x); // 0.2
logs(y); // 0.19999999999999996
`,
    slideName: "What is decimal type?",
    url: "dataTypes/decimal1",
  },
  {
    slug: "decimal2",
    code: `logs(decimal(1.21113) + decimal(2.22113)); // 3.43226

_getDecimalData['prec'] = 3;

logs(decimal(1.21113) + decimal(2.22113)); // 3.432

logs(decimal(300) / decimal(1.2121)); // 247.50433133

_getDecimalData["divPrec"] = 10;	

logs(decimal(300) / decimal(1.2121)); // 247.5043313258

_getDecimalData["prec"] = 20;
_getDecimalData["divPrec"] = 100;

// logs(decimal(1) * decimal(1.2121)); // Error will be thrown here
// logs(decimal(1) / decimal(1.2121)); // Error will be thrown here
`,
    slideName: "How to control decimal precision?",
    url: "dataTypes/decimal2",
  },
  {
    slug: "strings",
    code: `// Strings can be defined with single or double quotes.
const greeting1 = "Hello World!";
logs(greeting1);

const greeting2 = 'Hello World!';
logs(greeting2);

// Strings can be concatenated with the + operator
const greeting3 = "Hello " + "World!";
logs(greeting3);

// Strings can be concatenated with numbers
const greeting4 = "Hello" + 1;
logs(greeting4);
`,
    slideName: "What are Strings?",
    url: "dataTypes/strings",
  },
  {
    slug: "array",
    code: `// Arrays can be defined with square brackets
const numbers = [1, 2, 3];
logs(numbers);
`,
    slideName: "What are Arrays?",
    url: "dataTypes/array",
  },
  {
    slug: "range",
    code: `// range() returns an array of numbers
logs(range(5)); // [0, 1, 2, 3, 4, 5]
`,
    slideName: "What is range()?",
    url: "dataTypes/range",
  },
  {
    slug: "dict",
    code: `// Dictionaries can be defined with curly braces
const dict = {"key": "value"};
logs(dict);
`,
    slideName: "What are Dictionaries?",
    url: "dataTypes/dict",
  },
  {
    slug: "bool",
    code: `// Booleans can be defined with true or false
const x = true;
const y = false;
logs(x);
logs(y);

// You can use the not operator to negate a boolean
logs(!x); // false
logs(!y); // true

// You can use the and operator to combine two booleans
logs(x and y); // false
logs(x and x); // true

// You can use the or operator to combine two booleans
logs(x or y); // true
logs(y or y); // false

// You can compare two booleans with the == operator
logs(x == y); // false
logs(x == x); // true
`,
    slideName: "What are Booleans?",
    url: "dataTypes/bool",
  },
  {
    slug: "null",
    code: `// null is a special value that represents the absence of a value
const x;
logs(x); // null
`,
    slideName: "What is null?",
    url: "dataTypes/null",
  },
  {
    slug: "congrats",
    code: `logs("Congratulations! You have completed the data types section! 😊");`,
    slideName: "Congratulations!",
    url: "dataTypes/congrats",
  },
];

export const basics: Example[] = [
  {
    slug: "welcome",
    code: `const Lang = "DE";
logs("Welcome to " + Lang + " basics! 😊");`,
    slideName: "Welcome to Basics Section!",
    url: "basics/welcome",
  },
  {
    slug: "welcome2",
    code: `logs("Hello World! 😊");`,
    slideName: "Hello World!",
    url: "basics/welcome2",
  },
  {
    slug: "variables",
    code: `let x = 5;    
logs(x);

const y = 10;
logs(y);

// Variables that are declared with "let" can be reassigned
x = 6;
logs(x);

// Variables that are declared with "const" cannot be reassigned
y = 11; // Error will be thrown here

`,
    slideName: "Variables",
    url: "basics/variables",
  },
  {
    slug: "functions1",
    code: `// Define a function
const add = fun(a, b) {
  return a + b;
}

// Call the function
const result = add(1, 2);

logs(result); // 3
`,
    slideName: "Functions",
    url: "basics/functions1",
  },
  {
    slug: "functions2",
    code: `// Functions can be stored in arrays
const add = fun(a, b) {
  return a + b;
}

const subtract = fun(a, b) {
  return a - b;
}

const functions = [add, subtract];

logs(functions[0](1, 2)); // 3
logs(functions[1](1, 2)); // -1
`,
    slideName: "Accessing Functions in Arrays",
    url: "basics/functions2",
  },
  {
    slug: "functions3",
    code: `// Functions can be stored in dictionaries
const add = fun(a, b) {
  return a + b;
}

const subtract = fun(a, b) {
  return a - b;
}

const functions = {"add": add, "subtract": subtract};

logs(functions["add"](1, 2)); // 3
logs(functions["subtract"](1, 2)); // -1
`,
    slideName: "Accessing Functions in Dictionaries",
    url: "basics/functions3",
  },
  {
    slug: "comments",
    code: `// This is a comment
const x = 5; // This is also a comment
logs(x);

// const y = 10;
logs(y); // y is not defined error will be thrown here
    `,
    slideName: "Comments",
    url: "basics/comments",
  },
  {
    slug: "congrats",
    code: `logs("Congratulations! You have completed the basics! 😊");`,
    slideName: "Congratulations!",
    url: "basics/congrats",
  },
];

export const flowControl: Example[] = [
  {
    slug: "welcome",
    code: `const Lang = "DE";
logs("Welcome to " + Lang + " flow control! 😊");`,
    slideName: "Welcome to Flow Control Section!",
    url: "flowControl/welcome",
  },
  {
    slug: "conditional",
    code: `const isSunny = true;
    
if isSunny: {
  logs("Go for a walk!");

} else {
  logs("Stay inside and code!");

}`,
    slideName: "Conditional Statements",
    url: "flowControl/conditional",
  },
  {
    slug: "forLoop",
    code: `const numbers = [1, 2, 3];

// for loops can be used to iterate over arrays
for idx, num in numbers: {
  logs(idx + " : " + num);
}

// for loops can be used to iterate over strings
for idx, char in "Hello": {
  logs(idx + " : " + char);
}`,
    slideName: "For Loops",
    url: "flowControl/forLoop",
  },
  {
    slug: "forLoop2",
    code: `// Ignore the index by using one identifier
for num in [1, 2, 3]: {
    logs(num);
}
    
// Explicitly omitting the index
for _, num in [1, 2, 3]: {
    logs(num);
}
`,
    slideName: "For Loops: Ignoring the Index",
    url: "flowControl/forLoop2",
  },
  {
    slug: "forLoop3",
    code: `// You can't omit the value, this will throw an error
for idx, _ in [1, 2, 3]: {
    logs(idx);
}

// You can't omit both the index and the value, this will throw an error
for _ in [1, 2, 3]: {
    logs("Hello");
}

// You can't access _ , it's used to ignore the index
for _, num in [1, 2, 3]: {
    logs(_);
}
`,
    slideName: "For Loops: Pitfalls",
    url: "flowControl/forLoop3",
  },
  {
    slug: "break",
    code: `logs("------Loop 1------");
for idx, num in [1, 2, 3, 4, 5]: {
    if idx == 3: {
        // Exit the loop when idx is equal to 3
        logs("Found the number 3. Exiting loop.");
        break;
    }

    logs("Processing number: " + num);
}

logs("------Loop 2------");

for idx, num in [1, 2, 3, 4]: {
    if num != 3: {
        // Continue processing the current number
        logs("Processing number: " + num);
    } else {
        // Exit the loop when num is equal to 3
        logs("Found the number 3. Exiting loop.");
        break;
    }
}`,
    slideName: "Break Statement",
    url: "flowControl/break",
  },
  {
    slug: "skip",
    code: `logs("------Loop 1------");
for idx, num in [1, 2, 3, 4, 5]: {
    if idx == 3: {
        // Skip processing the current number
        logs("Skipping number: " + num);
        skip;
    }

    logs("Processing number: " + num);
}`,
    slideName: "Skip Statement",
    url: "flowControl/skip",
  },
  {
    slug: "during",
    code: `let x = 0;
during x < 5: {
    logs(x);
    x = x + 1;
}`,
    slideName: "During Loop",
    url: "flowControl/during",
  },
  {
    slug: "during2",
    code: `logs("------Loop 1------");
let x = 0;
during x < 5: {
  if x == 3: {
    logs("Found the number 3. Exiting loop.");
    break;
  } else {
    x = x + 1;
  }

  logs("Processing number: " + x);
}

logs("------Loop 2------");
let y = 0;
during y < 5: {
  if y == 3: {
    logs("Skipping number: " + y);
    y = y + 1;
    skip;
  }

  logs("Processing number: " + y);

  y = y + 1;

}
  `,
    slideName: "During Loop: Break and Skip",
    url: "flowControl/during2",
  },
  {
    slug: "during3",
    code: `during true: {
    skip;
}
`,
    slideName: "During Loop: Infinite Loop",
    url: "flowControl/during3",
  },
  {
    slug: "congrats",
    code: `logs("Congratulations! You have completed the flow control section! 😊");`,
    slideName: "Congratulations!",
    url: "flowControl/congrats",
  },
];

export const dataStructures: Example[] = [
  {
    slug: "welcome",
    code: `const Lang = "DE";
logs("Welcome to " + Lang + " data structures! 😊");`,
    slideName: "Welcome to Data Structures Section!",
    url: "dataStructures/welcome",
  },
  {
    slug: "array1",
    code: `// Numbers can be added to arrays
const numbers = [1, 2, 3];
logs(numbers);

// Strings can be added to arrays
const strings = ["Hello", "World"];
logs(strings);

// Arrays can be mixed
const mixed = [1, "Hello", true];
logs(mixed);

// Arrays can be empty
const empty = [];
logs(empty);

// Arrays can be nested
const nested = [[1, 2], [3, 4]];
logs(nested);
`,
    slideName: "What are Arrays?",
    url: "dataStructures/array1",
  },
  {
    slug: "array2",
    code: `// Arrays can be accessed by index
const numbers = [1, 2, 3];

logs(numbers[0]); // 1
logs(numbers[1]); // 2
logs(numbers[2]); // 3

// Arrays can be modified by index
numbers[0] = 5;
logs(numbers[0]); // 5

// You can get the length of an array
logs(len(numbers)); // 3
`,
    slideName: "Accessing & Modifying Arrays",
    url: "dataStructures/array2",
  },
  {
    slug: "array3",
    code: `const numbers = [1, 2, 3];

// You can add elements to the end of an array
push(numbers, 4);

logs(numbers[3]); // 4

// You can remove elements from the end of an array
pop(numbers);

logs(numbers[3]); // null

// You can add elements to the beginning of an array
unshift(numbers, 0);

logs(numbers[0]); // 0

// You can remove elements from the beginning of an array

shift(numbers);

logs(numbers[0]); // 1
`,
    slideName: "Adding & Removing Elements from Arrays",
    url: "dataStructures/array3",
  },
  {
    slug: "dict1",
    code: `// Dictionaries can be defined with curly braces
const dict = {"key": "value"};
logs(dict);

// Dictionaries can be empty
const empty = {};
logs(empty);

// Dictionaries can be nested
const nested = {"key": {"nestedKey": "nestedValue"}};
logs(nested);
`,
    slideName: "What are Dictionaries?",
    url: "dataStructures/dict1",
  },
  {
    slug: "dict2",
    code: `// Dictionaries can be accessed by key
const dict = {"key": "value"};
logs(dict["key"]); // value
logs(dict["key2"]); // null

// You can access nested dictionaries
const nested = {"key": {"nestedKey": "nestedValue"}};
logs(nested["key"]["nestedKey"]); // nestedValue

// You can add new keys to a dictionary
dict["key2"] = "value2";
logs(dict["key2"]); // value2

// You can modify existing keys in a dictionary
dict["key"] = "value3";
logs(dict["key"]); // value3

// You can remove keys from a dictionary
del(dict, "key");
logs(dict["key"]); // null

logs(dict);
`,
    slideName: "Accessing & Modifying Dictionaries",
    url: "dataStructures/dict2",
  },
  {
    slug: "congrats",
    code: `logs("Congratulations! You have completed the data structures section! 😊");`,
    slideName: "Congratulations!",
    url: "dataStructures/congrats",
  },
];

export const builtInFunc: Example[] = [
  {
    slug: "welcome",
    code: `const Lang = "DE";
logs("Welcome to " + Lang + " built-in functions! 😊");`,
  },
  {
    slug: "logs",
    code: `// logs() prints to the console
logs("Hello World!");

const x = 5;
logs(x);
`,
    slideName: "What is logs()?",
    url: "builtInFunc/logs",
  },
  {
    slug: "len",
    code: `// len() returns the length of a string
logs(len("Hello World!")); // 12

// len() returns the length of an array
logs(len([1, 2, 3])); // 3
  `,
    slideName: "What is len()?",
    url: "builtInFunc/len",
  },
  {
    slug: "push",
    code: `// push() adds an element to the end of an array
const numbers = [1, 2, 3];
push(numbers, 4);

logs(numbers[3]); // 4
logs(numbers); // [1, 2, 3, 4]
logs(len(numbers)); // 4
`,
    slideName: "What is push()?",
    url: "builtInFunc/push",
  },
  {
    slug: "pop",
    code: `// pop() removes an element from the end of an array
const numbers = [1, 2, 3];
pop(numbers);

logs(numbers[2]); // null
logs(numbers); // [1, 2]
logs(len(numbers)); // 2
`,
    slideName: "What is pop()?",
    url: "builtInFunc/pop",
  },
  {
    slug: "unshift",
    code: `// unshift() adds an element to the beginning of an array
const numbers = [1, 2, 3];
unshift(numbers, 0);

logs(numbers[0]); // 0
logs(numbers); // [0, 1, 2, 3]
logs(len(numbers)); // 4
`,
    slideName: "What is unshift()?",
    url: "builtInFunc/unshift",
  },
  {
    slug: "shift",
    code: `// shift() removes an element from the beginning of an array
const numbers = [1, 2, 3];
shift(numbers);

logs(numbers[0]); // 2
logs(numbers); // [2, 3]
logs(len(numbers)); // 2
`,
    slideName: "What is shift()?",
    url: "builtInFunc/shift",
  },
  {
    slug: "first",
    code: `// first() returns the first element of an array
const numbers = [1, 2, 3];

logs(first(numbers)); // 1
logs(first([1, 2, 3])); // 1
`,
    slideName: "What is first()?",
    url: "builtInFunc/first",
  },
  {
    slug: "last",
    code: `// last() returns the last element of an array
const numbers = [1, 2, 3];

logs(last(numbers)); // 3
logs(last([1, 2, 3])); // 3
`,
    slideName: "What is last()?",
    url: "builtInFunc/last",
  },
  {
    slug: "skipFirst",
    code: `// skipFirst() returns an array without the first element
const numbers = [1, 2, 3];

logs(skipFirst(numbers)); // [2, 3]
logs(skipFirst([1, 2, 3])); // [2, 3]
`,
    slideName: "What is skipFirst()?",
    url: "builtInFunc/skipFirst",
  },
  {
    slug: "skipLast",
    code: `// skipLast() returns an array without the last element
const numbers = [1, 2, 3];

logs(skipLast(numbers)); // [1, 2]
logs(skipLast([1, 2, 3])); // [1, 2]
`,
    slideName: "What is skipLast()?",
    url: "builtInFunc/skipLast",
  },
  {
    slug: "range",
    code: `// range() returns an array of numbers
logs(range(5)); // [0, 1, 2, 3, 4]

logs(range(1, 5)); // [1, 2, 3, 4, 5]
`,
    slideName: "What is range()?",
    url: "builtInFunc/range",
  },
  {
    slug: "del",
    code: `// del() removes a key from a dictionary
const dict = {"key": "value"};
del(dict, "key");

logs(dict["key"]); // null
logs(dict); // {}
`,
    slideName: "What is del()?",
    url: "builtInFunc/del",
  },
  {
    slug: "typeof",
    code: `// type() returns the type of a variable
    
logs(typeof(1)); // INTEGER
logs(typeof("Hello")); // STRING
logs(typeof(true)); // BOOLEAN
logs(typeof([])); // ARRAY
logs(typeof({})); // HASH
logs(typeof(fun() {})); // FUNCTION
logs(typeof(1.1)); // FLOAT
logs(typeof(decimal(1.1))); // DECIMAL
`,
    slideName: "What is typeof()?",
    url: "builtInFunc/typeof",
  },
  {
    slug: "copy",
    code: `// copy() returns a deep copy of an array or dictionary
// This is useful when you want to modify an array or dictionary without modifying the original
const numbers1 = [1, 2, 3];
const numbers2 = numbers1;

push(numbers1, 4);

// Both numbers1 and numbers2 are modified because they are pointing to the same location in memory
logs(numbers1); // [1, 2, 3, 4]
logs(numbers2); // [1, 2, 3, 4]

const numbers3 = [1, 2, 3];
const numbers4 = copy(numbers3);

push(numbers3, 4);
logs(numbers3); // [1, 2, 3, 4]

// numbers4 is not modified because it is a deep copy of numbers3
logs(numbers4); // [1, 2, 3]

`,
    slideName: "What is copy()?",
    url: "builtInFunc/copy",
  },
  {
    slug: "int",
    code: `// int() converts an input to an integer
logs(int("1")); // 1
logs(int(1.1)); // 1
logs(int(decimal(1.1))); // 1
logs(int(true)); // 1
logs(int(false)); // 0
`,
    slideName: "What is int()?",
    url: "builtInFunc/int",
  },
  {
    slug: "float",
    code: `// float() converts an input to a float
logs(float("1.1")); // 1.1
logs(float(1.111)); // 1.111
logs(float(decimal(1.111))); // 1.111
`,
    slideName: "What is float()?",
    url: "builtInFunc/float",
  },
  {
    slug: "bool",
    code: `// bool() converts an input to a boolean
logs(bool("true")); // true
logs(bool("false")); // true
logs(bool("")); // false
logs(bool(1)); // true
logs(bool(0)); // false
logs(bool(1.1)); // true
logs(bool(0.0)); // false
logs(bool([])); // true
logs(bool({})); // true
`,
    slideName: "What is bool()?",
    url: "builtInFunc/bool",
  },
  {
    slug: "str",
    code: `// str() converts an input to a string
logs(str(1)); // "1"
logs(str(1.1)); // "1.1"
logs(str(decimal(1.1))); // "1.1"
logs(str(true)); // "true"
logs(str(false)); // "false"
logs(str([])); // "[]"
logs(str({})); // "{}"
logs(str(fun() {})); // "fun() {}"
`,
    slideName: "What is str()?",
    url: "builtInFunc/str",
  },
  {
    slug: "congrats",
    code: `logs("Congratulations! You have completed the built-in functions section! 😊");`,
    slideName: "Congratulations!",
    url: "builtInFunc/congrats",
  },
];

export const advanced: Example[] = [
  {
    slug: "welcome",
    code: `const Lang = "DE";
logs("Welcome to " + Lang + " advanced section! 😊");
`,
    slideName: "Welcome to Advanced Section!",
    url: "advanced/welcome",
  },
  {
    slug: "HOF1",
    code: `// Functions can be passed as arguments to other functions
const add = fun(a, b) {
  return a + b;
}

const subtract = fun(a, b) {
  return a - b;
}

const apply = fun(a, b, func) {
  return func(a, b);
}

logs(apply(1, 2, add)); // 3
logs(apply(1, 2, subtract)); // -1
`,
    slideName: "What are HOFs?",
    url: "advanced/HOF1",
  },
  {
    slug: "HOF2",
    code: `// Functions can be returned from other functions
const addFive = fun(a) {
  return fun() {
    return a + 5;
  }
}

const result = addFive(10);

logs(result()); // 15
`,
    slideName: "HOFs: Returning Functions",
    url: "advanced/HOF2",
  },
  {
    slug: "closure1",
    code: `// Functions can access variables defined in the parent scope
const add = fun() {
  const a = 5;
  return fun(b) {
    return a + b;
  }
}

const addFive = add(5);

logs(addFive(10)); // 15
logs(addFive(20)); // 25
logs(addFive(30)); // 35
`,
    slideName: "What is a Closure?",
    url: "advanced/closure1",
  },
  {
    slug: "closure2",
    code: `// Functions can access variables defined in the parent scope dynamically
const add = fun(a) {
  return fun(b) {
    return a + b;
  }
}

const addFive = add(5);
const addTen = add(10);

logs(addFive(20)); // 25
logs(addTen(20)); // 30
`,
    slideName: "Closures: Dynamic Scope",
    url: "advanced/closure2",
  },
  {
    slug: "recursion",
    code: `// Functions can call themselves
const factorial = fun(n) {
  if n == 1: {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

logs(factorial(5)); // 120
`,
    slideName: "Recursion",
    url: "advanced/recursion",
  },
  {
    slug: "SIF",
    code: `// Self-invoking functions can be used to create private variables
fun() {
  const a = 5;

  logs(a); // 15
}()

// (a) is not defined in the global scope, so an error will be thrown here
// logs(a);
`,
    slideName: "Self-Invoking Functions",
    url: "advanced/SIF",
  },
  {
    slug: "congrats",
    code: `logs("Congratulations! You have completed the advanced section! 😊");`,
    slideName: "Congratulations!",
    url: "advanced/congrats",
  },
];

export const exercises: Example[] = [
  {
    slug: "welcome",
    code: `const Lang = "DE";
logs("Welcome to " + Lang + " exercises! 😊");
`,
    slideName: "Welcome to Exercises Section!",
    url: "exercises/welcome",
  },
  {
    slug: "bubbleSort",
    code: `// Bubble Sort
const bubbleSort = fun(arr) {
  let i = 0;
  let j = 0;
  let arrSize = len(arr);

  if arrSize <= 1: {
    return arr;
  }

  for i in range(arrSize - 2): {
    for j in range(0, arrSize - i - 2): {
      if arr[j] > arr[j + 1]: {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

logs(bubbleSort([2,99,32,0,10,55,100]));
`,
    slideName: "Bubble Sort",
    url: "exercises/bubbleSort",
  },
];
