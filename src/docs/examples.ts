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
];
