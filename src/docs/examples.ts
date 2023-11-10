export const welcome = [
  {
    slug: "w1",
    code: `logs("Hello World!!");
`,
  },
  {
    slug: "w2",
    code: `logs("Hello World!!");

logs("Hello " + "World" + "!!");
`,
  },
  {
    slug: "w3",
    code: `const Lang = "DE";
logs("Welcome to " + Lang + " World! 😊");
        
logs("Hello", "World", "!!");
`,
  },
];

export const basics = [
  {
    slug: "welcome",
    code: `const Lang = "DE";
logs("Welcome to " + Lang + " basics! 😊");`,
  },
  {
    slug: "welcome2",
    code: `logs("Hello World! 😊");`,
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
  },
  {
    slug: "functions",
    code: `// Define a function
const add = fun(a, b) {
  return a + b;
}

// Call the function
const result = add(1, 2);

logs(result); // 3
`,
  },
  {
    slug: "comments",
    code: `// This is a comment
const x = 5; // This is also a comment
logs(x);

// const y = 10;
logs(y); // y is not defined error will be thrown here
    `,
  },
  {
    slug: "congrats",
    code: `logs("Congratulations! You have completed the basics! 😊");`,
  },
];

export const flowControl = [
  {
    slug: "welcome",
    code: `const Lang = "DE";
logs("Welcome to " + Lang + " flow control! 😊");`,
  },
  {
    slug: "conditional",
    code: `const isSunny = true;
    
if isSunny: {
  logs("Go for a walk!");

} else {
  logs("Stay inside and code!");

}`,
  },
  {
    slug: "forLoop",
    code: `const numbers = [1, 2, 3];

for idx, num in numbers: {
  logs(idx + " : " + num);
}

for idx, char in "Hello": {
  logs(idx + " : " + char);
}`,
  },
  {
    slug: "forLoop2",
    code: `for _, num in [1, 2, 3]: {
    logs(num);
}

for idx, _ in [1, 2, 3]: {
    logs(idx);
}`,
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
  },
  {
    slug: "during",
    code: `let x = 0;
during x < 5: {
    logs(x);
    x = x + 1;
}`,
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
  },
  {
    slug: "during3",
    code: `during true: {
    skip;
}
`,
  },
  {
    slug: "congrats",
    code: `logs("Congratulations! You have completed the flow control section! 😊");`,
  },
];

export const dataStructures = [
  {
    slug: "welcome",
    code: `const Lang = "DE";
logs("Welcome to " + Lang + " data structures! 😊");`,
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
  },
  {
    slug: "congrats",
    code: `logs("Congratulations! You have completed the data structures section! 😊");`,
  },
];

export const builtInFunc = [
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
  },
  {
    slug: "len",
    code: `// len() returns the length of a string
logs(len("Hello World!")); // 12

// len() returns the length of an array
logs(len([1, 2, 3])); // 3
  `,
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
  },
  {
    slug: "first",
    code: `// first() returns the first element of an array
const numbers = [1, 2, 3];

logs(first(numbers)); // 1
logs(first([1, 2, 3])); // 1
`,
  },
  {
    slug: "last",
    code: `// last() returns the last element of an array
const numbers = [1, 2, 3];

logs(last(numbers)); // 3
logs(last([1, 2, 3])); // 3
`,
  },
  {
    slug: "skipFirst",
    code: `// skipFirst() returns an array without the first element
const numbers = [1, 2, 3];

logs(skipFirst(numbers)); // [2, 3]
logs(skipFirst([1, 2, 3])); // [2, 3]
`,
  },
  {
    slug: "skipLast",
    code: `// skipLast() returns an array without the last element
const numbers = [1, 2, 3];

logs(skipLast(numbers)); // [1, 2]
logs(skipLast([1, 2, 3])); // [1, 2]
`,
  },
  {
    slug: "range",
    code: `// range() returns an array of numbers
logs(range(5)); // [0, 1, 2, 3, 4]

logs(range(1, 5)); // [1, 2, 3, 4, 5]
`,
  },
  {
    slug: "del",
    code: `// del() removes a key from a dictionary
const dict = {"key": "value"};
del(dict, "key");

logs(dict["key"]); // null
logs(dict); // {}
`,
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
  },
  {
    slug: "float",
    code: `// float() converts an input to a float
logs(float("1.1")); // 1.1
logs(float(1.111)); // 1.111
logs(float(decimal(1.111))); // 1.111
`,
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
  },
  {
    slug: "congrats",
    code: `logs("Congratulations! You have completed the built-in functions section! 😊");`,
  },
];

export const advanced = [
  {
    slug: "welcome",
    code: `const Lang = "DE";
logs("Welcome to " + Lang + " advanced section! 😊");`,
  },
];
