import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (count !== 0) {
      setMessage("Component ReRendered")
    }
  }, [count])



  return (
    <main className="profile-container">

      {/* Profile Header */}
      <header className="profile-header">
        <div className="avatar">WA</div>

        <p className="welcome">WELCOME TO MY SPACE</p>
        <h1>My Profile</h1>
        <h2>Waleeja Atif</h2>

        <p className="subtitle">BS Computer Science Student</p>

        <div className="header-tags">
          <span>Creative Learner</span>
          <span>Tech Enthusiast</span>
        </div>
      </header>

      {/* About Me */}
      <section className="info-section about-section">
        <div className="section-heading">
          <span className="section-icon">✦</span>
          <h3>About Me</h3>
        </div>

        <p>
          I am a Computer Science student interested in web development
          and learning new technologies. I enjoy exploring new ideas,
          improving my programming skills and building useful projects.
        </p>
      </section>

      {/* Education */}
      <section className="info-section education-section">
        <div className="section-heading">
          <span className="section-icon">🎓</span>
          <h3>Education</h3>
        </div>

        <div className="education-item">
          <span className="education-dot"></span>
          <div>
            <h4>Bachelor of Science in Computer Science</h4>
            <p>PAF-IAST</p>
            <span className="education-label">Undergraduate Student</span>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="info-section skills-section">
        <div className="section-heading">
          <span className="section-icon">✧</span>
          <h3>My Skills</h3>
        </div>

        <p className="section-description">
          Technologies and tools I am learning and working with.
        </p>

        <div className="skills-list">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Flutter</span>
          <span>Python</span>
        </div>
      </section>

      {/* Counter App */}
      <section className="info-section counter-section">
        <div className="section-heading">
          <span className="section-icon">＋</span>
          <h3>My Counter App</h3>
        </div>

        <p className="counter-description">
          Use the buttons to increase or decrease the number.
        </p>

        <div className="counter-display">
          {count}
        </div>

        <div className="counter-buttons">
          <button onClick={() => setCount(count + 1)}>
            Increment +
          </button>

          <button onClick={() => setCount(count - 1)}>
            Decrement -
          </button>
        </div>

        {/* Re-render Message */}
        <p className="effect-message">{message}</p>
      </section>

      {/* Footer */}
      <footer className="profile-footer">
        <p>Learning • Growing • Creating</p>
        <span>© 2026 My Profile</span>
      </footer>

    </main>
  )
}

export default App
