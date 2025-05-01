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
        <h2>Contact Information</h2>
        <p>Location: Colima, Mexico</p>
        <p>Phone: +52 3121900736</p>
        <p>Email: carlos.t.10@hotmail.com</p>
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
          <h3>Informatic Engineering Student</h3>
          <p>6th Semester</p>
          <p>
            Currently pursuing a degree in informatic engineering. I have
            certifications in React, Next.js, and Expo, which demonstrate my
            expertise in modern web and mobile development frameworks.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Cv
