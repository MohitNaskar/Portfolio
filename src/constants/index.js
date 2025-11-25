import { image, li } from "framer-motion/client";
import {
  python,
  pandas,
  numpy,
  genai,
  nlp,  
  ml,
  sql,
  backend,
  web,
  docker,
  git,
  sap,
  ineuron,
  movie_recommender,
  emailspam,
  banking_system,
  gowthami,
  linkedin,
  leetcode,
} from "../assets";

export const hero = [
  {
  title: "linkedIn",
  img : linkedin,
  link: "https://www.linkedin.com/in/mohit-naskar-a595201a6/",
  },
  {
  title: "LeetCode",
  img : leetcode,
  link: "https://leetcode.com/u/Mohit_Naskar/",
  }
]

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI/ML Engineer",
    icon: web,
  },
  {
    title: "Data Scientist",
    icon: backend,
  }
];

const technologies = [
  { name: "MySQL", icon: sql }, //
  { name: "Python", icon: python }, //
  { name: "Data Analysis", icon: pandas }, //
  { name: "NumPy", icon: numpy }, //
  { name: "GenAI", icon: genai }, //
  { name: "Machine Learning", icon: ml }, //
  { name: "NLP", icon: nlp }, //
  { name: "Git", icon: git }, //
  { name: "Docker", icon: docker }, //
];

const experiences = [
  {
    title: "AI ML Developer Associate",
    company_name: "SAP LABS India",
    icon: sap,
    iconBg: "#383E56",
    date: "May 2025 - Present",
    points: [
      "Building a topic modelling solution to analyze customer feedback data using NLP techniques to extract insights.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Understanding and implementing AI/ML algorithms and models to solve supplier-related challenges.",
      "Analyzing large datasets to extract meaningful insights and patterns that can inform decision-making processes for the businesses.",
    ],
  },
  {
    title: "AI Developer",
    company_name: "SAP LABS India",
    icon: sap,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - May 2025",
    points: [
      "Automated business scenarios using joule AI platform to improve efficiency and reduce manual effort.",
      "Understanding Business AI and it's implementation in various SAP modules.",
      "Build a keras chatbot model to assist users with common queries related to SAP products and services.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "ML Developer Intern",
    company_name: "iNeuron AI",
    icon: ineuron,
    iconBg: "#383E56",
    date: "Jun 2023 - July 2023",
    points: [
      "Handled mussing data using various imputation techniques to ensure data quality for analysis.",
      "Used Regression and Classification algorithms to build predictive models for different datasets.",
      "Image classification using Convolutional Neural Networks (CNNs) to accurately categorize images into predefined classes.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I am writing to wholeheartedly recommend Mohit, who has been an integral part of our search team for the past 8 months . As his colleague, I have had the pleasure of observing Mohit's exceptional work ethic, dedication, and intellectual curiosity.Throughout his time with us, Mohit consistently demonstrated a high level of professionalism and a commendable ability to manage his time effectively. He successfully completed all assigned tasks within the given deadlines. His commitment to meeting project milestones was evident in their detailed planning and efficient execution.In conclusion, I am confident that Mohit will excel in any future academic or professional endeavors they choose to pursue. He have proven himself to be a reliable, dedicated, and insightful scholar who adds significant value to any team. I offer my highest recommendation without reservation.",
    name: "Gowthami konakanchi",
    designation: "Developer at SAP Labs on S/4 HANA",
    company: "SAP LABS India",
    image: gowthami,
  },
];

const projects = [
  {
    name: "Movie Recommendation",
    description:
      "This is a movie recommendation system based on Machine Learning, Deep learning and Natural Language Processing. It provides movie recommendations based on user input and various algorithms to suggest similar movies.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "NLP",
        color: "green-text-gradient",
      },
      {
        name: "Pearson Correlation",
        color: "pink-text-gradient",
      },
    ],
    image: movie_recommender,
    source_code_link: "https://github.com/MohitNaskar/movie_recommender",
    live_demo_link: "https://movierecommender-ge7zcwnknapdue4zxtqjrk.streamlit.app/",
  },
  {
    name: "Email Spam Classifier",
    description:
      "An email spam classifier built using machine learning techniques to accurately identify and filter out spam emails from legitimate ones, enhancing email security and user experience.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Logistic Regression",
        color: "green-text-gradient",
      },
      {
        name: "Naive Bayes",
        color: "pink-text-gradient",
      },
    ],
    image: emailspam,
    source_code_link: "https://github.com/MohitNaskar/Spam-Classifier-",
    live_demo_link: "https://spamclassifer.streamlit.app/",
  },
  {
    name: "Banking System",
    description:
      "This is a project based on the development of Banking System. It comprises of creation of customer account and handling the account to money deposits Language used: python 3.10.10, sql database",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
    ],
    image: banking_system,
    source_code_link: "https://github.com/MohitNaskar/Banking-System-",
    live_demo_link: "https://github.com/MohitNaskar/Banking-System-",
  },
];

export { services, technologies, experiences, testimonials, projects };
