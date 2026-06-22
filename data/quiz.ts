export type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  category: string;
};

export const quizCategories = [
  "JavaScript",
  "HTML & CSS",
  "Programming Basics",
] as const;

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    category: "JavaScript",
    question: "Which keyword is used to declare a block-scoped variable in JavaScript?",
    options: ["var", "let", "function", "define"],
    correctIndex: 1,
  },
  {
    id: 2,
    category: "JavaScript",
    question: "What does `typeof null` return in JavaScript?",
    options: ["null", "undefined", "object", "number"],
    correctIndex: 2,
  },
  {
    id: 3,
    category: "JavaScript",
    question: "Which method adds an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correctIndex: 0,
  },
  {
    id: 4,
    category: "JavaScript",
    question: "What is the output of `2 + '2'` in JavaScript?",
    options: ["4", "22", "NaN", "Error"],
    correctIndex: 1,
  },
  {
    id: 5,
    category: "HTML & CSS",
    question: "Which HTML tag is used for the largest heading?",
    options: ["<h6>", "<h1>", "<head>", "<header>"],
    correctIndex: 1,
  },
  {
    id: 6,
    category: "HTML & CSS",
    question: "Which CSS property controls the space between the border and content?",
    options: ["margin", "padding", "border", "gap"],
    correctIndex: 1,
  },
  {
    id: 7,
    category: "HTML & CSS",
    question: "Which attribute makes an input field required in HTML?",
    options: ["mandatory", "required", "validate", "needed"],
    correctIndex: 1,
  },
  {
    id: 8,
    category: "HTML & CSS",
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style System",
      "Colorful Style Sheets",
    ],
    correctIndex: 1,
  },
  {
    id: 9,
    category: "Programming Basics",
    question: "Which data structure uses FIFO (First In, First Out)?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    correctIndex: 1,
  },
  {
    id: 10,
    category: "Programming Basics",
    question: "What is the time complexity of binary search on a sorted array?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    correctIndex: 1,
  },
  {
    id: 11,
    category: "Programming Basics",
    question: "Which SQL command is used to retrieve data from a database?",
    options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
    correctIndex: 2,
  },
  {
    id: 12,
    category: "Programming Basics",
    question: "What does DRY stand for in software development?",
    options: [
      "Don't Repeat Yourself",
      "Do Repeat Yearly",
      "Data Runs Yearly",
      "Design Rules Yourself",
    ],
    correctIndex: 0,
  },
];

export function getQuestionsByCategory(category: string) {
  return quizQuestions.filter((q) => q.category === category);
}
