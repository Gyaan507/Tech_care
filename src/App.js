"use client"

import { useState, useEffect } from "react"
import "./App.css"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import DiagnosisHistory from "./components/DiagnosisHistory"
import PatientProfile from "./components/PatientProfile"
import DiagnosticList from "./components/DiagnosticList"
import LabResults from "./components/LabResults"

function App() {
  const [patientData, setPatientData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await fetch("https://fedskillstest.coalitiontechnologies.workers.dev")
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const data = await response.json()

        // Find Jessica Taylor's data
        const jessicaData = data.find((patient) => patient.firstName === "Jessica" && patient.lastName === "Taylor")

        if (jessicaData) {
          setPatientData(jessicaData)
        } else {
          throw new Error("Jessica Taylor not found in patient data")
        }

        setLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error)
        setError(error.message)
        setLoading(false)
      }
    }

    fetchPatientData()
  }, [])

  return (
    <div className="app">
      <Navbar patientData={patientData} />
      {error && <div className="error-banner">Error: {error}. Displaying UI with sample data.</div>}
      <div className="main-content">
        <Sidebar patientData={patientData} />
        <div className="center-content">
          <DiagnosisHistory patientData={patientData} />
          <DiagnosticList patientData={patientData} />
        </div>
        <div className="right-content">
          <PatientProfile patientData={patientData} />
          <LabResults patientData={patientData} />
        </div>
      </div>
    </div>
  )
}

export default App

