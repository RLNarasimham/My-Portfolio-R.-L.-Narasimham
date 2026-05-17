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
    title: 'HEALTHCARE API APP',
    description: 'Developed a Django and Django REST Framework–based healthcare management application to handle patient and doctor data through RESTful APIs and dynamic web pages, using Django models, serializers, and the MVT architecture.',
    category: 'web',
    image: './HEALTHCARE API PROJECT.png',
    technologies: ['Python', 'Django', 'SQLite 3', 'Django REST Framework', 'Bootstrap', 'HTML'],
    liveUrl: 'https://raditya.pythonanywhere.com/home/',
    githubUrl: 'https://github.com/RLNarasimham/HEALTHCARE-API',
  },
  {
    id: 2,
    title: 'EMPLOYEE MANAGEMENT SYSTEM',
    description: 'This is a Django-based employee management web application built for internal HR and employee workflows. The UI is branded as **Clevertech Solutions** in the project templates.',
    category: 'web',
    image: './EMPLOYEE MANAGEMENT SYSTEM.png',
    technologies: ['Python', 'Django', 'SQLite 3', 'Bootstrap', 'HTML', 'Django Model Forms'],
    liveUrl: 'https://rallabandilnarasimham.pythonanywhere.com/home/',
    githubUrl: 'https://github.com/RLNarasimham/EMPLOYEE-MANAGEMENT-SYSTEM',
  },
  {
    id: 3,
    title: 'BRIGHT MINDS EDUCATIONAL WEBSITE',
    description: 'Bright Minds Educational Website is a Django-based web application built to present school information through dynamic pages, forms, and static content. The project includes sections for home, about us, class 8, class 9, class 10, contact us, latest news, photos, videos, parent registration, and an admin data page.',
    category: 'web',
    image: './BRIGHT MINDS EDUCATIONAL WEBSITE.png',
    technologies: ['Python', 'Django', 'SQLite 3', 'Bootstrap', 'HTML'],
    liveUrl: 'https://rlnaditya.pythonanywhere.com/home/',
    githubUrl: 'https://github.com/RLNarasimham/EDUCATIONAL-WEBSITE',
  }
];
