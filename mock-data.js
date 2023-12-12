const authors = [
  { id: 1, name: "Robert C. Martin" },
  { id: 2, name: "Martin Fowler" },
  { id: 3, name: "Steve McConnell" },
];

const books = [
  {
    id: 1,
    name: "Clean Code: A Handbook of Agile Software Craftsmanship",
    authorId: 1,
  },
  {
    id: 2,
    name: "Refactoring: Improving the Design of Existing Code",
    authorId: 2,
  },
  {
    id: 3,
    name: "Code Complete: A Practical Handbook of Software Construction",
    authorId: 3,
  },
  {
    id: 4,
    name: "Rapid Development: Taming Wild Software Schedules",
    authorId: 3,
  },
  { id: 5, name: "Clean Agile: Back to Basics", authorId: 1 },
  {
    id: 6,
    name: "Software Estimation: Demystifying the Black Art",
    authorId: 3,
  },
  {
    id: 7,
    name: "The Clean Coder: A Code of Conduct for Professional Programmers",
    authorId: 1,
  },
  {
    id: 8,
    name: "Patterns of Enterprise Application Architecture",
    authorId: 2,
  },
];

module.exports = { authors, books };
