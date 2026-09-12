1. What was the biggest advantage you noticed when using TypeScript vs. plain JavaScript?
-  TypeScript catches errors before running the code. It makes coding safer and easier to understand because you know what type of data you’re working with.
2. Describe a specific error TypeScript caught that JavaScript would have missed.
- Example: trying to put a string into a variable that should be a number. JavaScript would allow it and break later, but TypeScript stops you right away.
3. What is the difference between an interface and a type alias in TypeScript? When would you use each?
- Interface → used to describe the shape of objects (like what properties they must have).

  Type alias → can describe objects too, but also unions, primitives, and more.

  Use interface when you want to extend or reuse object structures. Use type when you need flexibility.
4. Why do we use `export` and `import` in TypeScript files?
- They let you share code between files. export makes something available, import brings it in. This keeps code organized.
5. What happens to interfaces when TypeScript compiles to JavaScript? Why?
- Interfaces disappear in JavaScript because they’re only for TypeScript checking. They don’t exist at runtime, they’re just for safety during development.
6. If you had to add a `Review` entity (users reviewing products), what would its interface look like? Write it out.
- interface Review {
  id: number;
  userId: number;      // who wrote the review
  productId: number;   // which product is reviewed
  rating: number;      // stars 1–5
  comment?: string;    // optional text
  createdAt: Date;
}
