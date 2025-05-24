export type Category = 'web' | 'mobile' | 'design';

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  category: Category;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: 'AI-Integrated To-Do List Web App',
    description: 'A responsive and user-friendly task management app built with React.js, Vite, and JSON Server. Features include CRUD operations, user authentication, task filtering, and offline support.',
    category: 'web',
    image: './AI-Integrated-Todo-List-Web-App.jpg',
    technologies: ['React', 'Javascript', 'Vite', 'Local Storage', 'CSS','HTML','JSON Server'],
    // liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/RLNarasimham/AI-Integrated-Todo-List-Web-App',
  },
  {
    id: 2,
    title: 'Best Store - Grocery Web App',
    description: 'Built a responsive Grocery Store web application using React.js and JSON Server. Designed a clean, user-friendly interface and implemented core e-commerce features including a cart system, product search, and category-based filtering for an optimized shopping experience.',
    category: 'web',
    image: './Grocery Store App.jpg',
    technologies: ['React', 'Javascript', 'JSON Server','HTML','CSS'],
    // liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/RLNarasimham/Best-Store---Grocery-App',
  },
  {
    id: 3,
    title: 'Secure Pass – Password Manager App',
    description: 'Developed a secure password management web application using Express.js, SQLite3, and Tailwind CSS. Implemented session management and CORS for secure authentication, and integrated AES encryption for safe password storage and retrieval.',
    category: 'web',
    image: './Secure Pass - Password Manager.jpg',
    technologies: ['Express.js', 'HTML', 'SQLite3', 'Tailwind CSS','AES Encryption','Javascript'],
    // liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/RLNarasimham/SecurePass---Password-Manager',
  },
];