import React from "react";
import "./App.css";

// Replace the existing Join Us Column in your footer with:

const App = () => {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img
            src="tech_vayuna_logo_1_-removebg-preview.png"
            alt="Tech Vayuna Logo"
          />
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#events">Events</a>
            </li>
            <li>
              <a href="#our-team">Our Team</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#join-us">Join Us!</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <img
          src="IMG_0637.JPG" // Replace with your image path
          alt="Team collaborating together"
          className="hero-image"
        />
      </section>

      {/* About Us Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Left Content */}
        <div style={{ width: "60%", paddingRight: "20px" }}>
          <h2>About Us:</h2>
          <p>
            Welcome to TechVayuna club, where a squad of tech enthusiasts unites
            to turn wild ideas into reality!
          </p>
          <p>
            As a premier technical club, we are dedicated to empowering
            individuals like you with cutting-edge knowledge and hands-on
            experience in various technological domains.
          </p>
          <p>
            Whether you're an aspiring programmer, engineer, or tech enthusiast,
            our club offers a dynamic platform to delve into the latest
            technologies, coding challenges, and hands-on projects. But we don't
            stop there!
          </p>
        </div>

        {/* Right Content */}
        <div style={{ width: "30%", textAlign: "center" }}>
          <img
            src="phoenix.png" // Ensure this path is correct
            alt="Phoenix Logo"
            style={{
              width: "100%",
              maxWidth: "200px",
              height: "auto",
              objectFit: "contain", // Ensures the image scales properly
            }}
          />
        </div>
      </div>

      {/* Success Section */}
      <section
        id="success"
        className="success"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
          color: "white",
        }}
      >
        {/* Left Content - Image */}
        <div style={{ width: "40%", textAlign: "center" }}>
          <img
            src="srm logo.jpg" // Update this path
            alt="People working together around a table"
            style={{
              width: "100%",
              maxWidth: "300px",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Right Content - Text */}
        <div style={{ width: "55%" }}>
          <p>
            But we understand that true success in the tech industry requires
            more than technical know-how alone.
          </p>
          <p>
            That’s why Tech Vayuna places equal focus on developing essential
            soft skills that set you apart as a well-rounded professional.
          </p>
          <p>
            From effective communication and leadership to problem-solving and
            teamwork, we provide comprehensive training to enhance your personal
            and professional growth.
          </p>
        </div>
      </section>
      {/* Domains Section */}
      <section
        className="domains-section"
        style={{
          padding: "40px 20px",
          // Remove or comment out this line:
          // background: "linear-gradient(180deg, #1a103f 0%, #020B2D 100%)",
        }}
      >
        <h2
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "2rem",
          }}
        >
          Our Domains
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "20px",
            maxWidth: "800px",
            margin: "0 auto",
            padding: "20px",
          }}
        >
          {["TECHNICAL", "DESIGN", "R & D", "P R", "CONTENT", "MEDIA"].map(
            (domain) => (
              <button
                key={domain}
                style={{
                  background: "rgba(147, 112, 219, 0.2)", // More transparent background
                  border: "1px solid rgba(147, 112, 219, 0.3)", // Optional: adds subtle border
                  borderRadius: "25px",
                  padding: "12px 25px",
                  color: "white",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 0 15px rgba(147, 112, 219, 0.3)",
                  backdropFilter: "blur(5px)",
                  textAlign: "center",
                  width: "100%",
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.05)";
                  e.target.style.boxShadow =
                    "0 0 25px rgba(147, 112, 219, 0.5)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow =
                    "0 0 15px rgba(147, 112, 219, 0.3)";
                }}
              >
                {domain}
              </button>
            )
          )}
        </div>
      </section>
      {/* Footer Section */}
      <footer
        style={{
          padding: "40px 20px",
          color: "white",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "40px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Menu Column */}
          <div>
            <h3 style={{ marginBottom: "20px", fontSize: "1.2rem" }}>Menu</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "10px" }}>
                <a href="/" style={{ color: "white", textDecoration: "none" }}>
                  Home
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a
                  href="#about-us"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  About Us
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a
                  href="#our-team"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Our Team
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a
                  href="#events"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          {/* Contact Column */}
          <div>
            <h3 style={{ marginBottom: "20px", fontSize: "1.2rem" }}>
              Contact
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "10px" }}>
                <a
                  href="mailto:techvayuna@gmail.com"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    transition: "opacity 0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.opacity = "0.7")}
                  onMouseOut={(e) => (e.target.style.opacity = "1")}
                >
                  Email
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a
                  href="https://www.linkedin.com/company/techvayuna"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    transition: "opacity 0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.opacity = "0.7")}
                  onMouseOut={(e) => (e.target.style.opacity = "1")}
                >
                  LinkedIn
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a
                  href="https://www.instagram.com/techvayuna"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    transition: "opacity 0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.opacity = "0.7")}
                  onMouseOut={(e) => (e.target.style.opacity = "1")}
                >
                  Instagram
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a
                  href="https://twitter.com/techvayuna"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    transition: "opacity 0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.opacity = "0.7")}
                  onMouseOut={(e) => (e.target.style.opacity = "1")}
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Address Column */}
          <div>
            <h3 style={{ marginBottom: "20px", fontSize: "1.2rem" }}>
              Address
            </h3>
            <p style={{ lineHeight: "1.6" }}>
              SRM Institute Of Science And Technology
              <br />
              Bharathi Salai, Ramapuram, Chennai,
              <br />
              Tamil Nadu 600089
            </p>
          </div>

          {/* Join Us Column */}
          <div>
            <h3 style={{ marginBottom: "20px", fontSize: "1.2rem" }}>
              Join us!
            </h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{ display: "flex", gap: "10px" }}
            >
              <input
                type="email"
                placeholder="Email"
                style={{
                  padding: "8px 12px",
                  borderRadius: "4px",
                  border: "none",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                  flex: 1,
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "8px 20px",
                  borderRadius: "4px",
                  border: "none",
                  backgroundColor: "#9370DB",
                  color: "white",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#8A5FD7")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#9370DB")}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
