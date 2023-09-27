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
`,
  },
];

export const basics = [
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
];
