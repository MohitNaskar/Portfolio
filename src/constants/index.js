import {
  sap,
  ineuron,
  gpt15b,
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
    items: ["PyTorch", "Neural Networks", "Transformers", "CNNs", "Keras", "Hugging Face"],
  },
  {
    label: "LLM Engineering",
    items: ["RAG", "Agentic AI", "MCP", "LLM Evaluation", "Fine-tuning", "Tool Calling", "LangChain", "LangGraph", "Vector DB"],
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
      "Developing and delivering AI/ML solutions for enterprise business challenges, leveraging NLP, Generative AI, and agentic AI to improve operational efficiency, analytical accuracy, and decision-making across supplier-related workflows.",
    points: [
      "Developed a topic-modelling solution for seller engagement using traditional ML on SAP data, achieving 95% topic accuracy and enabling structured insights from unstructured data.",
      "Built AI/ML solutions encompassing traditional ML, Generative AI, and agentic AI approaches to address supplier-related business challenges, achieving up to 93% accuracy.",
      "Collaborated on client-facing AI initiatives for enterprise engagements involving Sree Cement, Tech Mahindra, and KPMG.",
      "Worked closely with product managers, designers, and engineering teams to translate business requirements into AI-driven solutions, including ARIBA engagement optimisation based on product visit patterns.",
      "Analysed large-scale datasets to identify patterns, refine model performance, and support data-informed business decisions.",
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
      "Built AI-powered internal tools and automated business scenarios using SAP's Joule AI platform, contributing to intelligent workflows and improved employee onboarding experiences.",
    points: [
      "Automated business scenarios using SAP's Joule AI platform, extending AI-powered workflows with navigational and transactional capabilities across SAP use cases.",
      "Developed a Keras-based chatbot for new-joiner onboarding, achieving 91% model accuracy at a 0.05 learning rate to assist with common SAP-related queries.",
      "Explored and implemented AI capabilities across SAP business modules, developing an understanding of enterprise AI integration and business workflows.",
      "Participated in code reviews and collaborative development practices, strengthening software engineering, version control, and team-based development workflows.",
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
    name: "GPT-1.5 Billion Model",
    category: "Deep Learning · LLM",
    description:
      "A 1.5B-parameter GPT model designed to be compiled and run locally, enabling private AI assistance, data analysis, and intelligent workflows without sending sensitive data to cloud-based models.",
    tags: [
      { name: "Python" },
      { name: "PyTorch" },
      { name: "Transformers" },
      { name: "Deep Learning" },
      { name: "NLP" },
    ],
    image: gpt15b,
    source_code_link: "https://github.com/MohitNaskar/GPT1.5BIL",
    live_demo_link: null,
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
    date: "Nov 2026",
    category: "Deep Learning",
    title: "Training a 1.5B Parameter GPT from Scratch",
    description:
      "Implementation notes on training a GPT-2 XL-scale language model — architecture decisions, tokenisation, gradient checkpointing, and what breaks at 1.5B parameters that works fine at smaller scale.",
    link: "https://github.com/MohitNaskar/GPT1.5BIL",
  },
  {
    date: "Nov 2026",
    category: "Applied AI",
    title: "Building a Real-Time Voice Assistant with LiveKit",
    description:
      "How I wired together LiveKit's WebRTC transport, speech-to-text, an LLM inference step, and text-to-speech into a low-latency voice assistant — latency budget, turn detection, and the edge cases that matter.",
    link: "https://github.com/MohitNaskar/VoiceAssistant",
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
    date: "Nov 2026",
    category: "LLM Engineering",
    title: "Building LLM Chains with LangChain",
    description:
      "A practical look at LangChain's abstractions — chains, retrievers, memory, and output parsers — where they help, where they add friction, and patterns that hold up in production.",
    link: "https://github.com/MohitNaskar/LangchainFundamentals",
  },
  {
    date: "Nov 2026",
    category: "Agentic AI",
    title: "Stateful Agent Workflows with LangGraph",
    description:
      "Using LangGraph to build multi-step agentic systems where state needs to persist across nodes — graph construction, conditional edges, human-in-the-loop checkpoints, and debugging cycles.",
    link: "https://github.com/MohitNaskar/LangGraph_Fundamentals",
  },
  {
    date: "Nov 2026",
    category: "Deep Learning",
    title: "Understanding Transformers Through Implementation",
    description:
      "Working through the transformer architecture by implementing it from scratch in PyTorch—attention mechanisms, positional encodings, and training dynamics.",
    link: "https://github.com/MohitNaskar/NANOGPT10M",
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
