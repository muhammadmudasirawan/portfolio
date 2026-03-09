import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Cuidaapr App</h5>
              </div>
              <h3>01</h3>
            </div>
            <p>
              Built a bilingual healthcare app that connects patients in Puerto Rico
              with verified home health aides. Implemented request posting and
              real-time caregiver accept/decline flows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Aeon App</h5>
              </div>
              <h3>02</h3>
            </div>
            <p>
              Developed a cross-platform school transport app for families and
              drivers with real-time updates, ride status, route planning, and
              student pickup management.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Minimi App</h5>
              </div>
              <h3>03</h3>
            </div>
            <p>
              Built a healthcare app with role-based dashboards for Caregiver,
              Family, and Patient. Delivered monitoring workflows, patient reports,
              and transparent care updates for families.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
