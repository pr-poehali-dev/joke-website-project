
export interface Joke {
  id: number;
  setup: string;
  punchline: string;
  category: string;
}

export const jokes: Joke[] = [
  {
    id: 1,
    setup: "Why don't scientists trust atoms?",
    punchline: "Because they make up everything!",
    category: "Science"
  },
  {
    id: 2,
    setup: "Did you hear about the mathematician who's afraid of negative numbers?",
    punchline: "He'll stop at nothing to avoid them!",
    category: "Math"
  },
  {
    id: 3,
    setup: "Why did the scarecrow win an award?",
    punchline: "Because he was outstanding in his field!",
    category: "Puns"
  },
  {
    id: 4,
    setup: "I told my wife she was drawing her eyebrows too high.",
    punchline: "She looked surprised.",
    category: "Oneliners"
  },
  {
    id: 5,
    setup: "What do you call a fake noodle?",
    punchline: "An impasta!",
    category: "Food"
  },
  {
    id: 6,
    setup: "How do you organize a space party?",
    punchline: "You planet!",
    category: "Space"
  },
  {
    id: 7,
    setup: "Why don't eggs tell jokes?",
    punchline: "They'd crack each other up!",
    category: "Food"
  },
  {
    id: 8,
    setup: "Why did the bicycle fall over?",
    punchline: "Because it was two-tired!",
    category: "Puns"
  }
];

export const getJokesByCategory = (category: string): Joke[] => {
  return jokes.filter(joke => joke.category.toLowerCase() === category.toLowerCase());
};

export const getRandomJoke = (): Joke => {
  return jokes[Math.floor(Math.random() * jokes.length)];
};

export const getCategories = (): string[] => {
  return [...new Set(jokes.map(joke => joke.category))];
};
