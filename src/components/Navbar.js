import "./Navbar.css"
import logo from "../assets/logo.svg"
import Icon from "./Icon"

const Navbar = ({ patientData }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src={logo || "/placeholder.svg"} alt="Tech.Care Logo" />
          <span className="logo-text">
            Tech<span className="logo-dot">.</span>Care
          </span>
        </div>
        <div className="nav-links">
          <a href="#" className="nav-link">
            <Icon name="overview" className="nav-icon" />
            Overview
          </a>
          <a href="#" className="nav-link active">
            <Icon name="patients" className="nav-icon" />
            Patients
          </a>
          <a href="#" className="nav-link">
            <Icon name="schedule" className="nav-icon" />
            Schedule
          </a>
          <a href="#" className="nav-link">
            <Icon name="message" className="nav-icon" />
            Message
          </a>
          <a href="#" className="nav-link">
            <Icon name="transactions" className="nav-icon" />
            Transactions
          </a>
        </div>
      </div>
      <div className="navbar-right">
        <div className="doctor-profile">
          <img src="https://randomuser.me/api/portraits/men/36.jpg" alt="Doctor Profile" className="doctor-avatar" />
          <div className="doctor-info">
            <div className="doctor-name">Dr. Jose Simmons</div>
            <div className="doctor-role">General Practitioner</div>
          </div>
        </div>
        <div className="navbar-actions">
          <button className="icon-button settings">
            <Icon name="settings" className="action-icon" />
          </button>
          <button className="icon-button more">
            <Icon name="more" className="action-icon" />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

