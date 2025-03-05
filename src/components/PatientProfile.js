import "./PatientProfile.css"
import Icon from "./Icon"

const PatientProfile = ({ patientData }) => {
  return (
    <div className="patient-profile card">
      <div className="profile-header">
        <img src="https://randomuser.me/api/portraits/women/85.jpg" alt="Jessica Taylor" className="profile-avatar" />
        <h2 className="profile-name">Jessica Taylor</h2>
      </div>

      <div className="profile-details">
        <div className="profile-detail">
          <div className="detail-icon">
            <Icon name="calendar" className="fa-icon" />
          </div>
          <div className="detail-content">
            <div className="detail-label">Date Of Birth</div>
            <div className="detail-value">August 23, 1996</div>
          </div>
        </div>

        <div className="profile-detail">
          <div className="detail-icon">
            <Icon name="gender" className="fa-icon" />
          </div>
          <div className="detail-content">
            <div className="detail-label">Gender</div>
            <div className="detail-value">Female</div>
          </div>
        </div>

        <div className="profile-detail">
          <div className="detail-icon">
            <Icon name="phone" className="fa-icon" />
          </div>
          <div className="detail-content">
            <div className="detail-label">Contact Info</div>
            <div className="detail-value">(415) 555-1234</div>
          </div>
        </div>

        <div className="profile-detail">
          <div className="detail-icon">
            <Icon name="emergency" className="fa-icon" />
          </div>
          <div className="detail-content">
            <div className="detail-label">Emergency Contacts</div>
            <div className="detail-value">(415) 555-5678</div>
          </div>
        </div>

        <div className="profile-detail">
          <div className="detail-icon">
            <Icon name="insurance" className="fa-icon" />
          </div>
          <div className="detail-content">
            <div className="detail-label">Insurance Provider</div>
            <div className="detail-value">Sunrise Health Assurance</div>
          </div>
        </div>
      </div>

      <button className="btn btn-primary show-all-btn">Show All Information</button>
    </div>
  )
}

export default PatientProfile

