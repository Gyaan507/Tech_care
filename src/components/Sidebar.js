import "./Sidebar.css"
import Icon from "./Icon"

const patients = [
  {
    id: 1,
    name: "Emily Williams",
    gender: "Female",
    age: 18,
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 2,
    name: "Ryan Johnson",
    gender: "Male",
    age: 42,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Brandon Mitchell",
    gender: "Male",
    age: 35,
    avatar: "https://randomuser.me/api/portraits/men/91.jpg",
  },
  {
    id: 4,
    name: "Jessica Taylor",
    gender: "Female",
    age: 28,
    avatar: "https://randomuser.me/api/portraits/women/85.jpg",
  },
  {
    id: 5,
    name: "Samantha Johnson",
    gender: "Female",
    age: 56,
    avatar: "https://randomuser.me/api/portraits/women/40.jpg",
  },
  {
    id: 6,
    name: "Ashley Martinez",
    gender: "Female",
    age: 54,
    avatar: "https://randomuser.me/api/portraits/women/54.jpg",
  },
  {
    id: 7,
    name: "Olivia Brown",
    gender: "Female",
    age: 32,
    avatar: "https://randomuser.me/api/portraits/women/26.jpg",
  },
  {
    id: 8,
    name: "Tyler Davis",
    gender: "Male",
    age: 19,
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 9,
    name: "Kevin Anderson",
    gender: "Male",
    age: 30,
    avatar: "https://randomuser.me/api/portraits/men/64.jpg",
  },
  {
    id: 10,
    name: "Dylan Thompson",
    gender: "Male",
    age: 36,
    avatar: "https://randomuser.me/api/portraits/men/83.jpg",
  },
]

const Sidebar = ({ patientData }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Patients</h2>
        <div className="search-icon">
          <Icon name="search" />
        </div>
      </div>
      <div className="patients-list">
        {patients.map((patient) => (
          <div key={patient.id} className={`patient-item ${patient.name === "Jessica Taylor" ? "active" : ""}`}>
            <img src={patient.avatar || "/placeholder.svg"} alt={patient.name} className="patient-avatar" />
            <div className="patient-info">
              <div className="patient-name">{patient.name}</div>
              <div className="patient-details">
                {patient.gender}, {patient.age}
              </div>
            </div>
            <div className="patient-actions">
              <Icon name="ellipsis" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar

