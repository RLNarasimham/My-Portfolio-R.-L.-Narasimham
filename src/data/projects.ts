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
    title: 'Shoplify E-Commerce Web App',
    description: 'Developed and deployed a full-stack e-commerce platform using React (TypeScript), Tailwind CSS, external product APIs, and Node.js and Express, featuring dynamic product listings, secure checkout, and efficient cart management. Integrated Razorpay payment gateway and improved application reliability by debugging, optimizing performance, and designing a responsive UI/UX for smooth cross-device user experience.',
    category: 'web',
    image: './Shopify e commerce website.jpg',
    technologies: ['React', 'Javascript', 'Vite', 'Typescript', 'Tailwind CSS', 'Node JS', 'Express', 'Fakestore API', 'Firebase', 'Razorpay Test Mode'],
    // liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/RLNarasimham/shopify---e-commerce-website',
  },
  {
    id: 2,
    title: 'Notemotion Admin Dashboard Web App',
    description: 'Built a full-stack admin dashboard using React, Node.js, Express, and MongoDB with secure JWT-based authentication, role-based access, and RESTful APIs for managing users and notes. Implemented CRUD operations, search and filtering, admin analytics endpoints, and responsive UI using Tailwind CSS, ensuring seamless frontend–backend integration via Axios.',
    category: 'web',
    image: './.jpg',
    technologies: ['React', 'Javascript', 'Vite', 'Nodemon', 'Node JS', 'Express JS', 'Tailwind CSS', 'MongoDB', 'Axios', 'Lucide-react (for icons)'],
    // liveUrl: 'https://example.com',
    githubUrl: 'https://frontend-assignment-primetrade-ai.vercel.app',
  },
  {
    id: 3,
    title: 'Employee Burnout Prediction',
    description: ' Implemented and evaluated a predictive model for employee burn rate, achieving R² = 0.920 and RMSE = 0.056, with robust preprocessing (scaling, feature engineering, train/test split). Created an end-to-end, deployment-ready data pipeline, including exploratory analysis (Matplotlib/Seaborn), processed dataset exports, and persisted scaler for reproducible inference.',
    category: 'web',
    image: './Employee Burnout Prediction.jpg',
    technologies: ['Numpy', 'Matplotlib', 'Scikit Learn', 'Seaborn', 'Pickle'],
    // liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/RLNarasimham/Employee-Burnout-Prediction-Project/tree/main',
  },
  {
    id: 4,
    title: 'AI-Driven Security Analysis of Encrypted Communications - UTP , Malaysia',
    description: ' Implemented a reproducible end-to-end ML pipeline (data loading → train-only preprocessing → scaling → model training & evaluation) to run memory-efficient baselines (SGD, LinearSVC, SVM) on large encrypted-traffic datasets.). Established a lightweight interpretability suite (Cohen’s d, point-biserial, model importances) to rank top features and auto-export CSV/Markdown summaries for reporting.',
    category: 'web',
    image: './AI-driven Security Analysis.jpg',
    technologies: ['Scikit Learn', 'Numpy', 'Joblib', 'OS', 'Pandas', 'Matplotlib'],
    // liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/RLNarasimham/AI-driven-Security-Analysis-on-Encrypted-Communications-UTP-Malaysia',
  },
];
