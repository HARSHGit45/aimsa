import React from "react";

export const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-wrapper">
          {/* About Image Section */}
          <div className="about-image">
            <div className="about-image-container">
              <img
                src="https://res.cloudinary.com/dgfxygdz7/image/upload/v1734956841/intro-bg_iupdej.jpg"
                alt="About AiMSA"
                className="abt-img"
              />
            </div>
          </div>

          {/* About Text Section */}
          <div className="about-content">
            <div className="about-content-wrapper">
              <h2 className="section-title">About Us</h2>
              <p className="about-text">
                AiMSA is a student association that has been established for the
                benefit of students in the CSE AIML branch at PCCOE. Our mission
                is to provide a platform for students to engage in meaningful
                academic, social, and professional activities that will enhance
                their educational experience. We aim to create an environment
                that fosters learning and growth by organizing workshops,
                seminars, and guest lectures on various topics related to
                computer science, artificial intelligence, and machine learning.
                Additionally, we facilitate opportunities for students to
                connect with industry professionals and build networks that can
                lead to future career prospects. Our association is committed to
                promoting teamwork, leadership, and innovation among our
                members, and we strive to make a positive impact on the larger
                community.
              </p>

              <div className="cards-grid">
                <div className="info-card">
                  <h3>Vision</h3>
                  <p>To empower students by fostering innovation, learning, and growth in the fields of Artificial Intelligence and Machine Learning, creating a positive impact on academia and society</p>
                </div>
                <div className="info-card">
                  <h3>Mission</h3>
                  <p>To provide a platform for students to engage in academic, professional, and leadership activities, facilitating opportunities to connect with industry experts and explore AI/ML technologies for a better future.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
