const projects = [
  {
    title: "Wealth Wise – AI Powered Financial Management System",
    stack: ["Python", "Flask", "MongoDB", "JWT", "AI Chatbot"],
    description:
      "An AI-powered financial management platform for tracking expenses, budgeting, and personalized investment recommendations.",
    points: [
      "Developed using Flask backend and MongoDB database",
      "Implemented JWT-based authentication for secure APIs",
      "AI chatbot for personalized savings and investment suggestions",
      "Real-time dashboards for expense tracking and budget analysis",
    ],
  },

  {
    title: "Smart Resume Analyzer",
    stack: ["Java", "Spring Boot", "MySQL", "Apache Tika", "NLP"],
    description:
      "An AI-powered resume analysis platform that parses, scores, and evaluates resumes automatically.",
    points: [
      "Resume parsing using Apache Tika",
      "AI-based skill matching with NLP",
      "Admin dashboard with role-based access",
      "PDF & CSV report generation",
    ],
    GitHub: "https://github.com/PittuVaishnavi6/Advanced_Smart_Resume_Analyzer",
  },

  {
    title:
      "AI-Powered Traffic Violation Detection & Automated E-Challan System",
    stack: ["Python", "YOLOv5", "OpenCV", "EasyOCR", "Twilio API"],
    description:
      "An AI-based traffic monitoring system that detects helmet violations and automatically generates digital e-challans.",
    points: [
      "Helmet detection using YOLOv5 deep learning model",
      "License plate detection and recognition using OCR",
      "Vehicle number extraction from captured images",
      "Automated e-challan generation with database verification",
      "Admin dashboard to monitor violations and logs",
    ],
  },

  {
    title: "Taste Hunt",
    stack: ["React", "TypeScript", "Tailwind", "Vite", "Machine Learning"],
    description:
      "A smart food discovery platform using anomaly detection and personalized recommendations.",
    points: [
      "Order history–based food recommendations",
      "Anomaly detection with OTP verification",
      "Location-based smart deals system",
    ],
    GitHub: "https://github.com/PittuVaishnavi6/Taste-Hunt",
  },

  {
    title: "Virtual Glasses Try-On",
    stack: ["Java", "Python", "OpenCV", "Swing"],
    description:
      "A real-time computer vision system that overlays virtual eyewear on live video feeds.",
    points: [
      "Face & eye detection using Haar Cascades",
      "Real-time transparent overlay rendering",
      "Java Swing GUI with keyboard controls",
    ],
    GitHub: "https://github.com/PittuVaishnavi6/Virtual-Try-On-using-Java-OpenCV",
  },
];

import Particles from "./Particles";
export default function Projects() {
  return (
    <section id="projects" className="projects-section dark-canvas">
      <Particles />

      <h2 className="section-title">Projects</h2>

      <p className="section-subtitle">
        Intelligent systems I’ve built by combining AI, backend engineering,
        and real-world problem solving.
      </p>

      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.title} className="project-card">

            <h3>{p.title}</h3>

            <p className="project-desc">{p.description}</p>

            <div className="tech-stack">
              {p.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <ul>
              {p.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>

            <div className="project-actions">
  {p.GitHub && (
    <a
      href={p.GitHub}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-outline"
    >
      GitHub
    </a>
  )}
</div>

          </div>
        ))}
      </div>
    </section>
  );
}