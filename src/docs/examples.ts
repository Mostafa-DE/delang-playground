export const welcome = [
  {
    slug: "w1",
    code: `logs("Hello World!!");
`,
  },
  {
    slug: "w2",
    code: `logs("Hello World!!");
logs("Hello" + " " + "World" + "!!");
logs("Hello", "World", "!!");`,
  },
  {
    slug: "w3",
    code: `logs("Hello World!!");
        
logs("Hello" + " " + "World" + "!!");
`,
  },
];

export const basics = [
  {
    slug: "welcome",
    code: `logs("Welcome to DE basics! 😊");`,
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
    slug: "conditional",
    code: `const isSunny = true;

if isSunny: {
  logs("Go for a walk!");
} else {
  logs("Stay inside and code!");
}
`,
  },
];
