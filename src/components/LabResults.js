import "./LabResults.css"
import Icon from "./Icon"

const LabResults = ({ patientData }) => {
  const labTests = [
    { id: 1, name: "Blood Tests" },
    { id: 2, name: "CT Scans" },
    { id: 3, name: "Radiology Reports" },
    { id: 4, name: "X-Rays" },
    { id: 5, name: "Urine Test" },
  ]

  return (
    <div className="lab-results card">
      <h2 className="card-title">Lab Results</h2>

      <div className="lab-results-list">
        {labTests.map((test) => (
          <div key={test.id} className="lab-item">
            <div className="lab-name">{test.name}</div>
            <div className="download-icon">
              <Icon name="download" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LabResults

