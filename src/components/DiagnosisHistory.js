"use client"

import { useEffect, useRef } from "react"
import Chart from "chart.js/auto"
import "./DiagnosisHistory.css"
import Icon from "./Icon"

const DiagnosisHistory = ({ patientData }) => {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      const ctx = chartRef.current.getContext("2d")

      // Sample blood pressure data (would come from API in real implementation)
      const months = ["Oct, 2023", "Nov, 2023", "Dec, 2023", "Jan, 2024", "Feb, 2024", "Mar, 2024"]
      const systolicData = [130, 125, 160, 120, 140, 160]
      const diastolicData = [110, 70, 110, 90, 75, 80]

      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: months,
          datasets: [
            {
              label: "Systolic",
              data: systolicData,
              borderColor: "#e83e8c",
              backgroundColor: "rgba(232, 62, 140, 0.1)",
              tension: 0.4,
              pointBackgroundColor: "#e83e8c",
              pointRadius: 4,
              pointHoverRadius: 6,
            },
            {
              label: "Diastolic",
              data: diastolicData,
              borderColor: "#6f42c1",
              backgroundColor: "rgba(111, 66, 193, 0.1)",
              tension: 0.4,
              pointBackgroundColor: "#6f42c1",
              pointRadius: 4,
              pointHoverRadius: 6,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              mode: "index",
              intersect: false,
              backgroundColor: "white",
              titleColor: "#1e293b",
              bodyColor: "#1e293b",
              borderColor: "#e2e8f0",
              borderWidth: 1,
              padding: 12,
              boxPadding: 5,
              callbacks: {
                title: (tooltipItems) => tooltipItems[0].label,
                label: (context) => `${context.dataset.label}: ${context.raw}`,
              },
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
              ticks: {
                font: {
                  size: 12,
                  family: "'Inter', sans-serif",
                  color: "#64748b",
                },
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                color: "rgba(203, 213, 225, 0.2)",
              },
              ticks: {
                font: {
                  size: 12,
                  family: "'Inter', sans-serif",
                  color: "#64748b",
                },
              },
            },
          },
        },
      })
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  // Use patientData if available, otherwise use sample data
  const bloodPressure = patientData?.bloodPressure || { systolic: 160, diastolic: 78 }
  const respiratoryRate = patientData?.respiratoryRate || 20
  const temperature = patientData?.temperature || 98.6
  const heartRate = patientData?.heartRate || 78

  return (
    <div className="diagnosis-history card">
      <div className="section-header">
        <h2 className="card-title">Diagnosis History</h2>
      </div>

      <div className="blood-pressure-section">
        <div className="bp-header">
          <h3>Blood Pressure</h3>
          <div className="time-filter">
            <span>Last 6 months</span>
            <Icon name="chevronDown" className="dropdown-icon" />
          </div>
        </div>

        <div className="bp-chart-container">
          <div className="chart-container">
            <canvas ref={chartRef} height="200"></canvas>
          </div>

          <div className="bp-readings">
            <div className="bp-reading systolic">
              <div className="reading-indicator"></div>
              <div className="reading-label">Systolic</div>
              <div className="reading-value">{bloodPressure.systolic}</div>
              <div className="reading-status higher">
                <Icon name="arrowUp" className="status-icon" />
                Higher than Average
              </div>
            </div>

            <div className="bp-reading diastolic">
              <div className="reading-indicator"></div>
              <div className="reading-label">Diastolic</div>
              <div className="reading-value">{bloodPressure.diastolic}</div>
              <div className="reading-status lower">
                <Icon name="arrowDown" className="status-icon" />
                Lower than Average
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="vitals-container">
        <div className="vital-card respiratory">
          <div className="vital-icon">
            <Icon name="lungs" className="fa-icon" />
          </div>
          <div className="vital-title">Respiratory Rate</div>
          <div className="vital-value">{respiratoryRate} bpm</div>
          <div className="vital-status normal">Normal</div>
        </div>

        <div className="vital-card temperature">
          <div className="vital-icon">
            <Icon name="temperature" className="fa-icon" />
          </div>
          <div className="vital-title">Temperature</div>
          <div className="vital-value">{temperature}°F</div>
          <div className="vital-status normal">Normal</div>
        </div>

        <div className="vital-card heart-rate">
          <div className="vital-icon">
            <Icon name="heart" className="fa-icon" />
          </div>
          <div className="vital-title">Heart Rate</div>
          <div className="vital-value">{heartRate} bpm</div>
          <div className="vital-status lower">Lower than Average</div>
        </div>
      </div>
    </div>
  )
}

export default DiagnosisHistory

