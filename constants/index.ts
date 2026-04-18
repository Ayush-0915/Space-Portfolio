import { FaWhatsapp } from "react-icons/fa";
import {
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "Python",
    image: "python.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TensorFlow",
    image: "tensorflow.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PyTorch",
    image: "pytorch.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Scikit-learn",
    image: "scikitlearn.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Pandas",
    image: "pandas.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "NumPy",
    image: "numpy.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "OpenCV",
    image: "opencv.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Jupyter",
    image: "jupyter.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Hugging Face",
    image: "huggingface.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "OpenAI",
    image: "openai.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "LangChain",
    image: "langchain.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Keras",
    image: "keras.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MLflow",
    image: "mlflow.svg",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/ayush_xo._/",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    link: "https://wa.me/919589981849?text=Hi%20Ayush%2C%20I%20visited%20your%20portfolio%20and%20want%20to%20connect.",
  },
  {
    name: "Linkedin",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/ayush-singh-0915ap",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/Ayush-0915",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "Matplotlib",
    image: "matplotlib.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Seaborn",
    image: "seaborn.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Plotly",
    image: "plotly.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Streamlit",
    image: "streamlit.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "FastAPI",
    image: "fastapi.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Gradio",
    image: "gradio.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Weights & Biases",
    image: "wandb.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Kaggle",
    image: "kaggle.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Apache Spark",
    image: "spark.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "DuckDB",
    image: "duckdb.svg",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Docker",
    image: "docker.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Kubernetes",
    image: "kubernetes.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "GitHub Actions",
    image: "githubactions.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Apache Airflow",
    image: "airflow.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.svg",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "AWS",
    image: "aws.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Google Cloud",
    image: "gcp.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Mac",
    image: "apple.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Windows",
    image: "windows.svg",
    width: 80,
    height: 80,
  },

  {
    skill_name: "Git",
    image: "git.svg",
    width: 80,
    height: 80,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Prompt Engineering",
    image: "prompt.svg",
    width: 80,
    height: 80,
  },
] as const;

export const PROJECTS = [
  {
    title: "Uber Trip Insights Dashboard",
    description:
      "An interactive Uber analytics dashboard built with Python and Power BI to track trip demand, peak hours, fare patterns, and location-wise ride performance for smarter operational decisions.",
    image: "/projects/uber.jpg",
    link: "https://github.com/Ayush-0915/Uber-Data-Analysis",
  },
  {
    title: "Netflix Data Analysis Dashboard",
    description:
      "An interactive Netflix analytics dashboard built with Python and Power BI to uncover trends in content types, genres, release patterns, and country-wise distribution.",
    image: "/projects/netflix-dashboard-v2.png",
    link: "https://github.com/Ayush-0915/Netflix-Data-Analysis",
  },
  {
    title: "Car Evaluation Dashboard",
    description:
      "A machine learning dashboard that predicts car acceptability using a Decision Tree model and visualizes key factors like safety, cost, doors, and seating in Power BI.",
    image: "/projects/car-evaluation.png",
    link: "https://github.com/Ayush-0915/Car-evaluation",
  },
  {
    title: "Shifra Virtual Assistant",
    description:
      "An AI-powered virtual assistant interface focused on natural interaction, fast response handling, and smart task support. Shifra is designed to deliver a futuristic conversational experience with a clean, immersive visual identity.",
    image: "/projects/shifra.jpg",
    link: "https://github.com/Ayush-0915/Shifra-2.O",
  },
  {
    title: "Personal 3D Portfolio",
    description:
      "A visually immersive 3D personal portfolio featuring smooth animations, interactive sections, and a modern UI to highlight my profile, projects, and skills through a live web experience.",
    image: "/projects/personal-3d-v2.png",
    link: "https://ayush-0915.github.io/Personal-3D-Portfolio/",
  },
  {
    title: "Tips Data Analysis",
    description:
      "An end-to-end exploratory data analysis project on restaurant tipping behavior, uncovering patterns across total bill, party size, time, and service context to derive practical business insights.",
    image: "/projects/tips-data-analysis.jpg",
    link: "https://github.com/Ayush-0915/Tips-Data-Analysis",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Ayush-0915",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/ayush_xo._/",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/ayush-singh-0915ap",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Ayush-0915",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:ayushofficaluse@gmail.com",
      },
      {
        name: "WhatsApp",
        icon: FaWhatsapp,
        link: "https://wa.me/919589981849?text=Hi%20Ayush%2C%20I%20visited%20your%20portfolio%20and%20want%20to%20connect.",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "My Work Experience",
    link: "#experience",
  },
  {
    title: "Certificates",
    link: "#certificates",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};
