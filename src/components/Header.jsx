import Particles from "./Particles";

export default function Header() {
  return (
    <section id ="home" className="hero">
      <Particles />

      <div className="hero-content">
        <h4 className="role">Computer Science Engineering (AI & ML)</h4>

        <h1 className="hero-title-multi">

  <div className="typing-row row1">
    {"PITTU".split("").map((l, i) => (
      <span key={i} style={{ animationDelay: `${i * 0.2}s` }}>{l}</span>
    ))}
  </div>

  <div className="typing-row row2">
    {"VAISHNAVI".split("").map((l, i) => (
      <span key={i} style={{ animationDelay: `${i * 0.2 + 1.5}s` }}>{l}</span>
    ))}
  </div>

  <div className="typing-row row3">
    {"PORTFOLIO".split("").map((l, i) => (
      <span key={i} style={{ animationDelay: `${i * 0.2 + 3.5}s` }}>{l}</span>
    ))}
  </div>

</h1>



        <p className="hero-sub">
  Building intelligent systems using AI, Machine Learning, and scalable software engineering.
</p>

        <div className="hero-buttons">
          <a href="#projects" className="view-btn">
  View Projects →
</a>
        </div>
      </div>
    </section>
  );
}
