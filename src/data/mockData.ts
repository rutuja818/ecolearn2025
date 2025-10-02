export interface Student {
  id: string;
  name: string;
  class: string;
  college: string;
  email: string;
  mentor: string;
  ecoPoints: number;
  streak: number;
  rank: number;
  badges: Badge[];
  challengesCompleted: {
    easy: number;
    medium: number;
    hard: number;
  };
  avatar?: string;
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  earnedAt: string;
  description: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
  duration: string;
  category: string;
  icon: string;
  status?: 'available' | 'active' | 'completed';
}

export const currentStudent: Student = {
  id: "1",
  name: "Rutuja Patil",
  class: "Class 10",
  college: "Green Valley High School",
  email: "rutuja.patil@greenvalley.edu",
  mentor: "Shakapure Sir, Environmental Studies",
  ecoPoints: 15240,
  streak: 12,
  rank: 1,
  badges: [
    {
      id: "1",
      name: "Water Warrior",
      icon: "💧",
      earnedAt: "2024-01-15",
      description: "Completed Water Conservation Week"
    },
    {
      id: "2",
      name: "Tree Planter",
      icon: "🌳",
      earnedAt: "2024-01-10",
      description: "Planted 5 trees"
    },
    {
      id: "3",
      name: "Energy Saver",
      icon: "⚡",
      earnedAt: "2024-01-05",
      description: "Reduced energy consumption by 20%"
    },
    {
      id: "4",
      name: "Zero Waste Champion",
      icon: "♻️",
      earnedAt: "2024-01-01",
      description: "Maintained zero waste for 7 days"
    }
  ],
  challengesCompleted: {
    easy: 12,
    medium: 7,
    hard: 4
  }
};

export const availableChallenges: Challenge[] = [
  {
    id: "1",
    title: "Water Conservation Week",
    description: "Track and reduce daily water usage for 7 consecutive days",
    difficulty: "medium",
    points: 500,
    duration: "7 days",
    category: "Water",
    icon: "💧",
    status: "available"
  },
  {
    id: "2",
    title: "Plant a Tree",
    description: "Plant a tree and submit photo with geotag",
    difficulty: "easy",
    points: 200,
    duration: "One-time",
    category: "Forest",
    icon: "🌱",
    status: "available"
  },
  {
    id: "3",
    title: "Zero Waste Challenge",
    description: "Maintain zero waste by composting and recycling for 14 days",
    difficulty: "hard",
    points: 1000,
    duration: "14 days",
    category: "Waste",
    icon: "♻️",
    status: "available"
  },
  {
    id: "4",
    title: "Energy Saver Sprint",
    description: "Reduce electricity consumption by 25% this month",
    difficulty: "medium",
    points: 600,
    duration: "30 days",
    category: "Energy",
    icon: "⚡",
    status: "available"
  },
  {
    id: "5",
    title: "Plastic-Free Week",
    description: "Avoid single-use plastics for 7 days and document alternatives",
    difficulty: "easy",
    points: 300,
    duration: "7 days",
    category: "Waste",
    icon: "🚫",
    status: "available"
  },
  {
    id: "6",
    title: "Community Clean Drive",
    description: "Organize and lead a neighborhood cleanup event",
    difficulty: "hard",
    points: 1200,
    duration: "One-time",
    category: "Community",
    icon: "🧹",
    status: "available"
  }
];

export const leaderboard: Student[] = [
  currentStudent,
  {
    id: "2",
    name: "Arjun Sharma",
    class: "Class 10",
    college: "Green Valley High School",
    email: "arjun.sharma@greenvalley.edu",
    mentor: "Shakapure Sir, Environmental Studies",
    ecoPoints: 14800,
    streak: 10,
    rank: 2,
    badges: [],
    challengesCompleted: { easy: 10, medium: 6, hard: 3 }
  },
  {
    id: "3",
    name: "Priya Deshmukh",
    class: "Class 10",
    college: "Green Valley High School",
    email: "priya.d@greenvalley.edu",
    mentor: "Shakapure Sir, Environmental Studies",
    ecoPoints: 13950,
    streak: 8,
    rank: 3,
    badges: [],
    challengesCompleted: { easy: 11, medium: 5, hard: 3 }
  },
  {
    id: "4",
    name: "Rohan Kulkarni",
    class: "Class 10",
    college: "Green Valley High School",
    email: "rohan.k@greenvalley.edu",
    mentor: "Shakapure Sir, Environmental Studies",
    ecoPoints: 13200,
    streak: 15,
    rank: 4,
    badges: [],
    challengesCompleted: { easy: 9, medium: 6, hard: 4 }
  },
  {
    id: "5",
    name: "Sneha Pawar",
    class: "Class 10",
    college: "Green Valley High School",
    email: "sneha.p@greenvalley.edu",
    mentor: "Shakapure Sir, Environmental Studies",
    ecoPoints: 12780,
    streak: 7,
    rank: 5,
    badges: [],
    challengesCompleted: { easy: 10, medium: 5, hard: 3 }
  }
];

export interface LearningTopic {
  id: string;
  class: string;
  title: string;
  videoUrl: string;
  description: string;
  quiz: QuizQuestion[];
  game: GameData;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface GameData {
  name: string;
  type: 'drag-drop' | 'match' | 'simulation';
  description: string;
  steps: string;
}

export const learningTopics: LearningTopic[] = [
  {
    id: "class4-trees",
    class: "Class 4",
    title: "Trees and Benefits",
    videoUrl: "https://example.com/trees-video",
    description: "Learn about the amazing journey of trees and their vital role in our ecosystem",
    quiz: [
      {
        id: "q1",
        question: "What do trees produce that humans need to breathe?",
        options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        correctAnswer: 1,
        explanation: "Trees produce oxygen through photosynthesis, which is essential for humans and animals to breathe."
      },
      {
        id: "q2",
        question: "Which part of the tree absorbs water from the soil?",
        options: ["Leaves", "Trunk", "Roots", "Branches"],
        correctAnswer: 2,
        explanation: "Roots absorb water and nutrients from the soil and anchor the tree."
      },
      {
        id: "q3",
        question: "What process do trees use to make food?",
        options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"],
        correctAnswer: 1,
        explanation: "Photosynthesis is the process where trees use sunlight, water, and CO2 to make food."
      },
      {
        id: "q4",
        question: "Why are trees called the lungs of Earth?",
        options: [
          "They breathe like humans",
          "They produce oxygen",
          "They have lung-like structures",
          "They help humans exercise"
        ],
        correctAnswer: 1,
        explanation: "Trees are called lungs of Earth because they produce oxygen and remove carbon dioxide from the air."
      },
      {
        id: "q5",
        question: "What do trees provide to birds and animals?",
        options: ["Food only", "Shelter only", "Both food and shelter", "Nothing"],
        correctAnswer: 2,
        explanation: "Trees provide both food (fruits, seeds) and shelter (nesting places) to various animals and birds."
      }
    ],
    game: {
      name: "Virtual Tree Gardener",
      type: "simulation",
      description: "Plant, water, and protect your virtual tree to watch it grow!",
      steps: "🌱 ➕ 💧 ➕ 🛡️ = 🌳"
    }
  },
  {
    id: "class5-animals",
    class: "Class 5",
    title: "Animals – Friends of Man",
    videoUrl: "https://example.com/animals-video",
    description: "Discover local animals and their essential role in maintaining ecosystem balance",
    quiz: [
      {
        id: "q1",
        question: "Which animal helps in pollination?",
        options: ["Cow", "Bee", "Dog", "Cat"],
        correctAnswer: 1,
        explanation: "Bees are important pollinators that help plants reproduce by transferring pollen."
      },
      {
        id: "q2",
        question: "What do we call animals that eat only plants?",
        options: ["Carnivores", "Omnivores", "Herbivores", "Insectivores"],
        correctAnswer: 2,
        explanation: "Herbivores are animals that eat only plants and plant materials."
      },
      {
        id: "q3",
        question: "Which habitat do fish live in?",
        options: ["Forest", "Desert", "Water", "Grassland"],
        correctAnswer: 2,
        explanation: "Fish are aquatic animals that live in water bodies like rivers, lakes, and oceans."
      },
      {
        id: "q4",
        question: "Why should we protect wild animals?",
        options: [
          "They are scary",
          "They maintain ecosystem balance",
          "They are useless",
          "They are too many"
        ],
        correctAnswer: 1,
        explanation: "Wild animals play crucial roles in maintaining ecosystem balance through food chains and biodiversity."
      },
      {
        id: "q5",
        question: "What do earthworms do for soil?",
        options: [
          "Make it hard",
          "Eat all nutrients",
          "Make it fertile and aerated",
          "Destroy plants"
        ],
        correctAnswer: 2,
        explanation: "Earthworms improve soil by making it more fertile, well-aerated, and better for plant growth."
      }
    ],
    game: {
      name: "Animal Habitat Match",
      type: "match",
      description: "Match animals with their correct habitats - forests, water bodies, or grasslands",
      steps: "🦌🏞️, 🐟💧, 🦅🌲"
    }
  },
  {
    id: "class6-water",
    class: "Class 6",
    title: "Water and Water Cycle",
    videoUrl: "https://example.com/water-video",
    description: "Explore the fascinating water cycle and learn why conservation is critical",
    quiz: [
      {
        id: "q1",
        question: "What percentage of Earth's water is freshwater?",
        options: ["50%", "25%", "3%", "75%"],
        correctAnswer: 2,
        explanation: "Only about 3% of Earth's water is freshwater, and much of it is frozen in ice caps."
      },
      {
        id: "q2",
        question: "What is the process of water turning into vapor called?",
        options: ["Condensation", "Evaporation", "Precipitation", "Collection"],
        correctAnswer: 1,
        explanation: "Evaporation is when water changes from liquid to vapor due to heat."
      },
      {
        id: "q3",
        question: "Which of these saves water?",
        options: [
          "Taking long showers",
          "Fixing leaking taps",
          "Leaving taps running",
          "Washing car daily"
        ],
        correctAnswer: 1,
        explanation: "Fixing leaking taps prevents water wastage and helps conserve this precious resource."
      },
      {
        id: "q4",
        question: "What forms when water vapor cools in the sky?",
        options: ["Rain", "Clouds", "Snow", "Hail"],
        correctAnswer: 1,
        explanation: "When water vapor cools and condenses in the atmosphere, it forms clouds."
      },
      {
        id: "q5",
        question: "Why is rainwater harvesting important?",
        options: [
          "To waste water",
          "To store and reuse rainwater",
          "To increase pollution",
          "To flood areas"
        ],
        correctAnswer: 1,
        explanation: "Rainwater harvesting helps store rainwater for future use, reducing dependence on groundwater."
      }
    ],
    game: {
      name: "Water Saver Mission",
      type: "simulation",
      description: "Complete daily water-saving tasks and track your conservation impact",
      steps: "🚿💧🚫 + 💧✅"
    }
  }
];
