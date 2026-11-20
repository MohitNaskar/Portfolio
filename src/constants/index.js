import {
  sap,
  ineuron,
  movie_recommender,
  emailspam,
  banking_system,
  gowthami,
  darren,
} from "../assets";

export const navLinks = [
  { id: "work", title: "Work" },
  { id: "experience", title: "Experience" },
  { id: "notes", title: "Notes" },
  { id: "about", title: "About" },
  { id: "contact", title: "Contact" },
];

export const techCategories = [
  {
    label: "Machine Learning",
    items: ["Python", "Scikit-learn", "XGBoost", "Statistics", "Feature Engineering", "Model Evaluation"],
  },
  {
    label: "Deep Learning",
    items: ["PyTorch", "Neural Networks", "Transformers", "CNNs", "Keras"],
  },
  {
    label: "LLM Engineering",
    items: ["RAG", "Agentic AI", "MCP", "LLM Evaluation", "Fine-tuning", "Tool Calling"],
  },
  {
    label: "Data & Analysis",
    items: ["Pandas", "NumPy", "NLP", "Data Analysis", "EDA"],
  },
  {
    label: "Backend & Engineering",
    items: ["FastAPI", "SQL", "Docker", "Git", "REST APIs", "Python 3.x"],
  },
];

export const experiences = [
  {
    title: "AI/ML Developer Associate",
    company_name: "SAP Labs India",
    icon: sap,
    iconBg: "#1C1C1C",
    date: "May 2025 — Present",
    location: "Bengaluru, India",
    description:
      "Working on AI/ML solutions for supplier-related business challenges, applying NLP, generative AI, and agentic AI approaches to improve analysis accuracy and business outcomes.",
    points: [
      "Built a topic modelling solution to analyze customer feedback using NLP, increasing topic accuracy by 95%.",
      "Implemented AI/ML models—including traditional models and GenAI/Agentic AI approaches—capable of resolving supplier-related issues with up to 93% accuracy.",
      "Collaborating with cross-functional teams including designers and product managers to define requirements and validate solutions.",
      "Analyzing large datasets to extract insights and patterns that inform decision-making and improve model performance.",
    ],
  },
  {
    title: "AI Developer",
    company_name: "SAP Labs India",
    icon: sap,
    iconBg: "#1C1C1C",
    date: "Aug 2024 — May 2025",
    location: "Bengaluru, India",
    description:
      "Automated business scenarios using the Joule AI platform and built internal tooling to support SAP product teams.",
    points: [
      "Automated business scenarios using the Joule AI platform, adding navigational and transactional capabilities specific to SAP AI.",
      "Built a Keras chatbot model to assist new joiners with common SAP queries, achieving 91% accuracy on a 0.05 learning rate.",
      "Developed understanding of Business AI and its application across SAP modules.",
      "Participated in code reviews, expanding version control and collaborative engineering practices.",
    ],
  },
  {
    title: "ML Developer Intern",
    company_name: "iNeuron AI",
    icon: ineuron,
    iconBg: "#1C1C1C",
    date: "Jun 2023 — Jul 2023",
    location: "Remote",
    description:
      "Hands-on ML internship focused on data preparation, predictive modelling, and computer vision.",
    points: [
      "Handled missing data using imputation techniques, achieving 98% data quality success rate.",
      "Applied regression and classification algorithms to build predictive models for customer POC projects.",
      "Implemented image classification using CNNs to categorize images into predefined classes.",
    ],
  },
];

export const testimonials = [
  {
    testimonial:
      "I've worked closely with Mohit on AI/ML initiatives and have consistently seen him take strong ownership of complex problem statements. He approaches work with a solid technical mindset, explores solutions deeply, and delivers with a high level of professionalism. His ability to balance experimentation with execution makes him a dependable contributor in AI/ML projects. I would confidently recommend him for data science or machine learning roles.",
    name: "Darren Savio Dsouza",
    designation: "Senior Data Scientist",
    company: "SAP Labs India",
    image: darren,
    testimonial_link: "https://www.linkedin.com/in/mohit-naskar-a595201a6/",
  },
  {
    testimonial:
      "I am writing to wholeheartedly recommend Mohit, who has been an integral part of our search team. Throughout his time with us, Mohit consistently demonstrated a high level of professionalism and a commendable ability to manage his time effectively. He successfully completed all assigned tasks within the given deadlines. His commitment to meeting project milestones was evident in their detailed planning and efficient execution.",
    name: "Gowthami Konakanchi",
    designation: "Developer, S/4 HANA",
    company: "SAP Labs India",
    image: gowthami,
    testimonial_link: "https://www.linkedin.com/in/mohit-naskar-a595201a6/",
  },
];

export const projects = [
  {
    name: "Movie Recommendation System",
    category: "Machine Learning · NLP",
    description:
      "A content-based and collaborative filtering recommendation system using NLP and Pearson Correlation to suggest movies based on user input and viewing patterns.",
    tags: [
      { name: "Python" },
      { name: "NLP" },
      { name: "Pearson Correlation" },
      { name: "Streamlit" },
    ],
    image: movie_recommender,
    source_code_link: "https://github.com/MohitNaskar/movie_recommender",
    live_demo_link: "https://movierecommender-ge7zcwnknapdue4zxtqjrk.streamlit.app/",
  },
  {
    name: "Email Spam Classifier",
    category: "Machine Learning · NLP",
    description:
      "A multi-model spam classification system using Logistic Regression and Naive Bayes to filter spam from legitimate email, with a deployed Streamlit interface for real-time classification.",
    tags: [
      { name: "Python" },
      { name: "Logistic Regression" },
      { name: "Naive Bayes" },
      { name: "Scikit-learn" },
    ],
    image: emailspam,
    source_code_link: "https://github.com/MohitNaskar/Spam-Classifier-",
    live_demo_link: "https://spamclassifer.streamlit.app/",
  },
  {
    name: "Banking System",
    category: "Backend Engineering",
    description:
      "A Python and SQL-based banking system supporting account creation, deposits, withdrawals, and transaction history. Demonstrates backend data modelling, state management, and relational database design.",
    tags: [
      { name: "Python" },
      { name: "SQL" },
      { name: "Data Modelling" },
    ],
    image: banking_system,
    source_code_link: "https://github.com/MohitNaskar/Banking-System-",
    live_demo_link: null,
  },
];

export const engineeringNotes = [
  {
    date: "Coming soon",
    category: "Machine Learning",
    title: "Building a Spam Classifier from Scratch",
    description:
      "A walkthrough of building a production-ready spam classifier: data preprocessing, feature engineering, model selection trade-offs, and evaluation methodology.",
    link: null,
  },
  {
    date: "Coming soon",
    category: "LLM Engineering",
    title: "Designing and Evaluating RAG Pipelines",
    description:
      "Notes on the architecture decisions behind retrieval-augmented generation systems—chunking strategies, embedding choices, retrieval evaluation, and generation quality.",
    link: null,
  },
  {
    date: "Coming soon",
    category: "Deep Learning",
    title: "Understanding Transformers Through Implementation",
    description:
      "Working through the transformer architecture by implementing it from scratch in PyTorch—attention mechanisms, positional encodings, and training dynamics.",
    link: null,
  },
  {
    date: "Coming soon",
    category: "Agentic AI",
    title: "Engineering Agentic Workflows with MCP",
    description:
      "Practical notes on building agentic AI systems using the Model Context Protocol—tool calling, context management, and reliability patterns.",
    link: null,
  },
];
