import Particles from "./Particles";

export default function Contact() {
  return (
    <section
      id="contact"
      className="dark-canvas"
      style={{
        padding: "120px 20px",
        textAlign: "center",
      }}
    >
      <Particles />   {/* ✅ particles added */}

      <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
        Contact
      </h2>

      <p style={{ color: "#cbd5f5", marginBottom: "30px" }}>
        Feel free to reach out.
      </p>

      <div style={{ lineHeight: "2" }}>
        <p>Email: vaishnavipittu20@gmail.com</p>
        <p>LinkedIn: linkedin.com/in/pittu-vaishnavi</p>
        <p>GitHub: github.com/PittuVaishnavi6</p>
      </div>
    </section>
  );
}