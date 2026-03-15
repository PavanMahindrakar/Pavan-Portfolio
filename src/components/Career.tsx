import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {/* Current Internship */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Intern</h4>
                <h5>Suryank Technologies</h5>
              </div>
              <h3>Feb 2026 – Present</h3>
            </div>
            <p>
              Currently working with the Software Development team on the
              AlgoAuto Bot project, contributing to automation workflows,
              backend development, and system reliability. Actively involved in
              implementing features, debugging modules, and collaborating with
              the team on production-ready software solutions.
            </p>
          </div>

          {/* Previous Internship */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Intern</h4>
                <h5>Apprely Technologies</h5>
              </div>
              <h3>Jun 2025 - Dec 2025</h3>
            </div>
            <p>
              Contributed to an AI and computer vision research project by
              annotating high-resolution multi-view video frames using Animal
              Part Tracker (APT). Designed efficient annotation pipelines and
              ensured high-quality datasets for machine learning model
              development.
              <a href="/certificates/ds-internship.pdf" target="_blank">
                <h5>View Certificate</h5>
              </a>
            </p>
          </div>

          {/* Education */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MCA</h4>
                <h5>MIT Vishwaprayag University • CGPA: 8.5 / 10</h5>
              </div>
              <h3>2024 – Present</h3>
            </div>
            <p>
              Pursuing Master of Computer Applications with focus on Artificial
              Intelligence, Machine Learning, Data Engineering, and scalable AI
              system development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
