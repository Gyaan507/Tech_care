import "./DiagnosticList.css"

const DiagnosticList = ({ patientData }) => {
  // Sample diagnostic data (would come from API in real implementation)
  const diagnostics = [
    {
      id: 1,
      problem: "Hypertension",
      description: "Chronic high blood pressure",
      status: "Under Observation",
    },
    {
      id: 2,
      problem: "Type 2 Diabetes",
      description: "Insulin resistance and elevated blood sugar",
      status: "Cured",
    },
    {
      id: 3,
      problem: "Asthma",
      description: "Recurrent episodes of bronchial constriction",
      status: "Inactive",
    },
  ]

  const getStatusClass = (status) => {
    switch (status) {
      case "Under Observation":
        return "status-observation"
      case "Cured":
        return "status-cured"
      case "Inactive":
        return "status-inactive"
      default:
        return ""
    }
  }

  return (
    <div className="diagnostic-list card">
      <h2 className="card-title">Diagnostic List</h2>

      <table className="diagnostics-table">
        <thead>
          <tr>
            <th>Problem/Diagnosis</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {diagnostics.map((diagnostic) => (
            <tr key={diagnostic.id}>
              <td>{diagnostic.problem}</td>
              <td>{diagnostic.description}</td>
              <td>
                <span className={`status-tag ${getStatusClass(diagnostic.status)}`}>{diagnostic.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DiagnosticList

