import "./App.css";
import { useState } from "react";
import TechSphere from "./TechSphere";
import ScrollAnimations from "./ScrollAnimations";
import FuturisticBackground from "./FuturisticBackground";
import MouseEffect from "./MouseEffect";
import TiltCards from "./TiltCards";
import MagneticButtons from "./MagneticButtons";
import CustomCursor from "./CustomCursor";
import Admin from "./Admin";
import LoadingScreen from "./LoadingScreen";
import JoinForm from "./JoinForm";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleJoin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const member = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      technology: formData.get("technology"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/join",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(member),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        e.target.reset();
      } else {
        alert("Something went wrong.");
      }

    } catch (error) {
      console.error(error);
      alert("Backend server is not running.");
    }
  };
  if (window.location.pathname === "/admin") {
    return <Admin />;
  }
  return (
    <div className="app">
      <LoadingScreen />
      <FuturisticBackground />
      <MouseEffect />
      <ScrollAnimations />
      <TiltCards />
      <MagneticButtons />
      <CustomCursor />

      {/* NAVBAR */}
      <nav className="navbar">

        <a href="#home" className="logo">
          TECHNOVA
        </a>

        <div className="nav-links">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#events">Events</a>
          <a href="#team">Team</a>

        </div>

        <a href="#join" className="join-btn">
          Join Us
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </nav>
      {menuOpen && (
        <div className="mobile-menu">

          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#technologies" onClick={() => setMenuOpen(false)}>
            Technologies
          </a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <a href="#events" onClick={() => setMenuOpen(false)}>
            Events
          </a>

          <a href="#team" onClick={() => setMenuOpen(false)}>
            Team
          </a>

          <a href="#join" onClick={() => setMenuOpen(false)}>
            Join Us
          </a>

        </div>
      )}

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hero-small">WELCOME TO THE FUTURE</p>

          <h1>
            INNOVATE.
            <br />
            <span>CREATE.</span>
            <br />
            TRANSFORM.
          </h1>

          <p className="hero-description">
            A community of passionate innovators, developers and
            technology enthusiasts building the future together.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Explore Projects →
            </button>

            <button className="secondary-btn">
              Join TechNova
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="circle circle-one"></div>
          <div className="circle circle-two"></div>

          <div className="tech-3d">
            <TechSphere />
          </div>

          <div className="floating-card card-one">AI</div>
          <div className="floating-card card-two">WEB</div>
          <div className="floating-card card-three">IoT</div>
        </div>
      </section>


      {/* ABOUT SECTION */}
      <section className="about-section" id="about">

        <div className="section-heading">
          <p>01 — ABOUT US</p>
          <h2>WE BUILD<br /><span>WHAT'S NEXT.</span></h2>
        </div>

        <div className="about-content">

          <div className="about-text">
            <p>
              TechNova is a technology and innovation community
              created for students who love to build, experiment
              and solve real-world problems.
            </p>

            <p>
              We bring together developers, designers and
              technology enthusiasts to transform ideas into
              meaningful digital products.
            </p>

            <button className="outline-btn">
              Discover TechNova →
            </button>
          </div>

          <div className="about-stats">

            <div className="stat-box">
              <h3>50+</h3>
              <p>Members</p>
            </div>

            <div className="stat-box">
              <h3>20+</h3>
              <p>Projects</p>
            </div>

            <div className="stat-box">
              <h3>15+</h3>
              <p>Events</p>
            </div>

            <div className="stat-box">
              <h3>10+</h3>
              <p>Technologies</p>
            </div>

          </div>

        </div>

      </section>


      {/* TECHNOLOGIES SECTION */}
      <section className="tech-section" id="technologies">

        <div className="section-heading center">
          <p>02 — TECHNOLOGIES</p>
          <h2>TOOLS TO<br /><span>CREATE THE FUTURE.</span></h2>
        </div>

        <div className="tech-grid">

          <div className="tech-card">
            <div className="tech-number">01</div>
            <h3>Python</h3>
            <p>AI, automation and powerful backend applications.</p>
          </div>

          <div className="tech-card">
            <div className="tech-number">02</div>
            <h3>React</h3>
            <p>Modern and interactive web applications.</p>
          </div>

          <div className="tech-card">
            <div className="tech-number">03</div>
            <h3>FastAPI</h3>
            <p>Fast and scalable APIs for modern applications.</p>
          </div>

          <div className="tech-card">
            <div className="tech-number">04</div>
            <h3>AI / ML</h3>
            <p>Machine learning solutions for real-world problems.</p>
          </div>

          <div className="tech-card">
            <div className="tech-number">05</div>
            <h3>IoT</h3>
            <p>Connecting smart devices with intelligent systems.</p>
          </div>

          <div className="tech-card">
            <div className="tech-number">06</div>
            <h3>Docker</h3>
            <p>Containerization and modern application deployment.</p>
          </div>
          {/* PROJECTS SECTION */}
          <section className="projects-section" id="projects">

            <div className="section-heading">
              <p>03 — OUR PROJECTS</p>
              <h2>
                IDEAS INTO<br />
                <span>REALITY.</span>
              </h2>
            </div>

            <div className="projects-grid">

              <div className="project-card">
                <div className="project-top">
                  <span>01</span>
                  <span>AI / ML</span>
                </div>

                <div className="project-icon">AI</div>

                <h3>Smart Attendance</h3>

                <p>
                  An AI-powered attendance system using
                  facial recognition technology.
                </p>

                <button>View Project →</button>
              </div>


              <div className="project-card featured-project">
                <div className="project-top">
                  <span>02</span>
                  <span>IoT</span>
                </div>

                <div className="project-icon">EV</div>

                <h3>EV Charging Hub</h3>

                <p>
                  A smart platform for finding and managing
                  electric vehicle charging stations.
                </p>

                <button>View Project →</button>
              </div>


              <div className="project-card">
                <div className="project-top">
                  <span>03</span>
                  <span>WEB</span>
                </div>

                <div className="project-icon">&lt;/&gt;</div>

                <h3>Smart Campus</h3>

                <p>
                  A digital campus platform connecting students,
                  teachers, events and facilities.
                </p>

                <button>View Project →</button>
              </div>


              <div className="project-card">
                <div className="project-top">
                  <span>04</span>
                  <span>SECURITY</span>
                </div>

                <div className="project-icon">✓</div>

                <h3>Document Verify</h3>

                <p>
                  A secure digital document verification
                  and certificate validation platform.
                </p>

                <button>View Project →</button>
              </div>

            </div>

          </section>


          {/* EVENTS SECTION */}
          <section className="events-section" id="events">

            <div className="section-heading center">
              <p>04 — EVENTS</p>

              <h2>
                BUILD.<br />
                <span>LEARN. COMPETE.</span>
              </h2>
            </div>


            <div className="events-list">

              <div className="event-item">

                <div className="event-date">
                  <strong>15</strong>
                  <span>OCT 2026</span>
                </div>

                <div className="event-info">
                  <p>HACKATHON</p>
                  <h3>TechNova Hack 2026</h3>
                  <span>
                    24-hour innovation challenge
                  </span>
                </div>

                <button>Register →</button>

              </div>


              <div className="event-item">

                <div className="event-date">
                  <strong>22</strong>
                  <span>OCT 2026</span>
                </div>

                <div className="event-info">
                  <p>WORKSHOP</p>
                  <h3>AI & Machine Learning</h3>
                  <span>
                    Learn the fundamentals of AI
                  </span>
                </div>

                <button>Register →</button>

              </div>


              <div className="event-item">

                <div className="event-date">
                  <strong>05</strong>
                  <span>NOV 2026</span>
                </div>

                <div className="event-info">
                  <p>COMPETITION</p>
                  <h3>Code Wars</h3>
                  <span>
                    Competitive programming challenge
                  </span>
                </div>

                <button>Register →</button>

              </div>

            </div>

          </section>
        </div>

      </section>
      {/* TEAM SECTION */}
      <section className="team-section" id="team">

        <div className="section-heading">
          <p>05 — OUR TEAM</p>

          <h2>
            THE PEOPLE<br />
            <span>BEHIND THE IDEAS.</span>
          </h2>
        </div>

        <div className="team-grid">

          <div className="team-card">
            <div className="team-avatar">RB</div>
            <p>01 — PRESIDENT</p>
            <h3>Ritesh Badakane</h3>
            <span>Technology & Innovation</span>
          </div>

          <div className="team-card">
            <div className="team-avatar">AD</div>
            <p>02 — TECH LEAD</p>
            <h3>Aditya Deshmukh</h3>
            <span>Full Stack Developer</span>
          </div>

          <div className="team-card">
            <div className="team-avatar">PS</div>
            <p>03 — DESIGN LEAD</p>
            <h3>Priya Sharma</h3>
            <span>UI / UX Designer</span>
          </div>

          <div className="team-card">
            <div className="team-avatar">AK</div>
            <p>04 — AI LEAD</p>
            <h3>Akash Kumar</h3>
            <span>AI / ML Developer</span>
          </div>

        </div>

      </section>


      {/* JOIN SECTION */}
      <section id="join" className="join-section">

        <div className="section-heading">
          <span>JOIN TECHNOVA</span>
          <h2>HAVE AN IDEA?<br />LET'S BUILD IT.</h2>
        </div>

        <div className="join-container">

          <div className="join-info">

            <h3>Become a TechNova Member</h3>

            <p>
              Join a community of developers, designers,
              innovators and technology enthusiasts.
            </p>

            <div className="join-points">
              <div>⚡ Build real projects</div>
              <div>🚀 Learn new technologies</div>
              <div>🤝 Work with a team</div>
              <div>💡 Turn ideas into products</div>
            </div>

          </div>


          <form
            className="join-form"
            onSubmit={handleJoin}
          >

            <div className="form-group">
              <label>Full Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>


            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>


            <div className="form-group">
              <label>Phone Number</label>

              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                required
              />
            </div>


            <div className="form-group">
              <label>Interested Technology</label>

              <select name="technology" required>
                <option value="">Select technology</option>
                <option>Python</option>
                <option>React</option>
                <option>FastAPI</option>
                <option>AI / ML</option>
                <option>IoT</option>
                <option>Docker</option>
              </select>

            </div>


            <div className="form-group">

              <label>Why do you want to join?</label>

              <textarea
                name="message"
                rows="4"
                placeholder="Tell us about yourself..."
                required
              ></textarea>
            </div>


            <button
              type="submit"
              className="primary-btn"
            >
              JOIN TECHNOVA →
            </button>

          </form>

        </div>
        <JoinForm />
      </section>

      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-top">

          <div className="footer-brand">
            <div className="logo">
              TECH<span>NOVA</span>
            </div>

            <p>
              Innovate. Create. Transform.
            </p>
          </div>

          <div className="footer-links">

            <div>
              <h4>Explore</h4>
              <a href="#about">About</a>
              <a href="#technologies">Technologies</a>
              <a href="#projects">Projects</a>
            </div>

            <div>
              <h4>Community</h4>
              <a href="#events">Events</a>
              <a href="#team">Team</a>
              <a href="#home">Join Us</a>
            </div>

            <div>
              <h4>Social</h4>
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
            </div>

          </div>

        </div>

        <div className="footer-bottom">
          <span>© 2026 TechNova</span>
          <span>Built with technology & creativity.</span>
        </div>

      </footer>
    </div>
  );
}

export default App;