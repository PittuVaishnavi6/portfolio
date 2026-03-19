export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Portfolio</div>

      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li><a href="#publications">Publications</a></li> {/* ADD THIS */}
  <li><a href="#certificates">Certificates</a></li>
      </ul>

      <a href="#contact" className="contact-btn">
        Contact Me
      </a>
    </nav>
  );
}