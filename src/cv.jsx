import React from 'react'
import './cv.css'
import profilePhoto from './assets/yo.jpg' 
const Cv = () => {
  return (
    <div className="cv-container">
      <header className="cv-header">
        <img
          src={profilePhoto} 
          alt="Profile"
          className="cv-photo"
        />
        <h1>Carlos Eduardo Gómez Torres</h1>
        <p>Informatic Engineer</p>
      </header>
      <section className="cv-section">
        <h2>Profile</h2>
        <p>
          I am a 22-year-old informatic engineer born on October 1, 2002, with
          5 years of experience specializing in React, Next.js, and Expo. I am
          passionate about building modern, scalable, and user-friendly
          applications.
        </p>
      </section>
      <section className="cv-section">
        <h2>Skills</h2>
        <ul>
          <li>React, Next.js, Expo</li>
          <li>JavaScript, TypeScript</li>
          <li>HTML, CSS, TailwindCSS</li>
          <li>Git, CI/CD, Agile Development</li>
        </ul>
      </section>
      <section className="cv-section">
        <h2>Experience</h2>
        <div className="cv-experience">
          <h3>Senior Frontend Developer</h3>
          <p>XYZ Company (2018 - Present)</p>
          <p>
            Led the development of scalable web and mobile applications using
            React, Next.js, and Expo. Collaborated with cross-functional teams
            to deliver high-quality products.
          </p>
        </div>
        <div className="cv-experience">
          <h3>Frontend Developer Intern</h3>
          <p>ABC Inc. (2017 - 2018)</p>
          <p>
            Assisted in building responsive web applications and debugging
            frontend issues. Gained hands-on experience with modern frameworks.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Cv
