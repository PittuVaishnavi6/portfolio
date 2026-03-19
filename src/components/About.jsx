export default function About() {
  return (
    <section id="about" className="about-section">
      {/* LEFT SIDE */}
      <div className="about-left">
        <img
          src="/profile.jpg"
          alt="Pittu Vaishnavi"
          className="about-img"
        />

        <h3 className="about-name">Pittu Vaishnavi</h3>
        <p className="about-role">AI & ML Engineering Student</p>

        <a
          href="mailto:vaishnavipittu20@gmail.com"
          className="about-btn dark"
        >
          Email me
        </a>

        <div className="about-socials">
          <a
            href="https://github.com/PittuVaishnavi6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/pittu-vaishnavi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="about-right">
        <h2>About Me</h2>

        <p>
          I am a Computer Science Engineering student specializing in Artificial
          Intelligence and Machine Learning. I enjoy building real-world
          applications using Java, Python, and modern web technologies.
        </p>

        <p>
          I am passionate about continuously improving my technical skills,
          solving meaningful problems, and working on innovative AI-driven
          projects.
        </p>

        <div className="about-actions">

  <a href="/Resume.pdf" target="_blank" className="about-btn dark">
    Resume
  </a>

</div>
      </div>
    </section>
  );
}
