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
    title: 'Shopify E-Commerce Web App',
    description: 'Developed and deployed a full-stack e-commerce platform using React (TypeScript), Tailwind CSS, external product APIs, and Node.js and Express, featuring dynamic product listings, secure checkout, and efficient cart management. Integrated Razorpay payment gateway and improved application reliability by debugging, optimizing performance, and designing a responsive UI/UX for smooth cross-device user experience.',
    category: 'web',
    image: './AI-Integrated-Todo-List-Web-App.jpg',
    technologies: ['React', 'Javascript', 'Vite', 'Typescript', 'Tailwind CSS', 'Node JS', 'Express', 'Fakestore API', 'Firebase', 'Razorpay Test Mode'],
    // liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/RLNarasimham/shopify---e-commerce-website',
  },
  {
    id: 2,
    title: 'AI-Assisted ShowTimeGo Web App',
    description: 'Built a full-stack movie ticket booking application with AI chatbot, seat selection, TMDB API integration, and JWT authentication using React (TypeScript), Node.js/Express, and Redux for scalable state management. Deployed and optimized a cloud-ready solution with CI/CD and Razorpay integration; enhanced reliability through debugging, performance tuning, and responsive UI/UX design for seamless booking across devices.',
    category: 'web',
    image: './Grocery Store App.jpg',
    technologies: ['React', 'Javascript', 'Typescript', 'Node JS', 'Express', 'Tailwind CSS', 'Gemini API', 'TMDB API'],
    // liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/RLNarasimham/SHOWTIMEGO-Movie-Ticket-Booking-App',
  },
  {
    id: 3,
    title: 'Employee Burnout Prediction',
    description: ' Implemented and evaluated a predictive model for employee burn rate, achieving R² = 0.920 and RMSE = 0.056, with robust preprocessing (scaling, feature engineering, train/test split). Created an end-to-end, deployment-ready data pipeline, including exploratory analysis (Matplotlib/Seaborn), processed dataset exports, and persisted scaler for reproducible inference.',
    category: 'web',
    image: './Full Stack Chat.jpg',
    technologies: ['Numpy', 'Matplotlib', 'Scikit Learn', 'Seaborn', 'Pickle'],
    // liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/RLNarasimham/Employee-Burnout-Prediction-Project/tree/main',
  },
  {
    id: 4,
    title: 'AI-Driven Security Analysis of Encrypted Communications - UTP , Malaysia',
    description: ' Implemented a reproducible end-to-end ML pipeline (data loading → train-only preprocessing → scaling → model training & evaluation) to run memory-efficient baselines (SGD, LinearSVC, SVM) on large encrypted-traffic datasets.). Established a lightweight interpretability suite (Cohen’s d, point-biserial, model importances) to rank top features and auto-export CSV/Markdown summaries for reporting.',
    category: 'web',
    image: './Full Stack Chat.jpg',
    technologies: ['Scikit Learn', 'Numpy', 'Joblib', 'OS', 'Pandas', 'Matplotlib'],
    // liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/RLNarasimham/AI-driven-Security-Analysis-on-Encrypted-Communications-UTP-Malaysia',
  },
];
