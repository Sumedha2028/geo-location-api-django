import React, { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:8000";

function App() {
  const [showModal, setShowModal] = useState(false);

  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [data, setData] = useState(null);

  // 🔥 GEOMETRY STATES
  const [spacing, setSpacing] = useState(2);
  const [girders, setGirders] = useState(3);
  const [overhang, setOverhang] = useState(1);
  const [warning, setWarning] = useState("");

  const carriageway = 10;

  // Fetch states
  useEffect(() => {
    axios.get(`${BASE_URL}/api/states/`)
      .then(res => setStates(res.data))
      .catch(err => console.log(err));
  }, []);

  // Fetch districts
  const handleStateChange = (e) => {
    const id = e.target.value;

    setSelectedState(id);
    setSelectedDistrict("");
    setDistricts([]);
    setData(null);

    if (!id) return;

    axios.get(`${BASE_URL}/api/districts/?state_id=${id}`)
      .then(res => setDistricts(res.data))
      .catch(err => console.log(err));
  };

  // Fetch location data
  const handleDistrictChange = (e) => {
    const id = e.target.value;

    setSelectedDistrict(id);

    axios.get(`${BASE_URL}/api/location-data/?district_id=${id}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  };

  // AUTO CALCULATION + VALIDATION
  useEffect(() => {
    const overallWidth = carriageway + 5;

    if (spacing && overhang) {
      const calc = (overallWidth - overhang) / spacing;
      setGirders(Math.round(calc));

      if (spacing < 1.5) {
        setWarning("Spacing too small ⚠️");
      } else if (spacing > 5) {
        setWarning("Spacing too large ⚠️");
      } else if (overhang > 3) {
        setWarning("Overhang too high ⚠️");
      } else {
        setWarning("");
      }
    }
  }, [spacing, overhang]);

  return (
    <div style={{ display: "flex", padding: "20px" }}>
      
      {/* LEFT PANEL */}
      <div style={{
        width: "50%",
        padding: "20px",
        background: "#f9f9f9",
        borderRadius: "10px"
      }}>
        <h2>Group Design</h2>

        {/* STATE */}
        <div>
          <label>State</label><br />
          <select value={selectedState} onChange={handleStateChange}>
            <option value="">Select State</option>
            {states.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </div>

        <br />

        {/* DISTRICT */}
        <div>
          <label>District</label><br />
          <select
            value={selectedDistrict}
            onChange={handleDistrictChange}
          >
            <option value="">Select District</option>
            {districts.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name}
              </option>
            ))}
          </select>

          <p>Districts loaded: {districts.length}</p>
          {districts.length === 0 && <p>Loading districts...</p>}
        </div>

        <br />

        {/* BUTTON */}
        <button
          onClick={() => setShowModal(true)}
          style={{
            padding: "8px 12px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Modify Additional Geometry
        </button>

        <br /><br />

        {/* ✅ GEOMETRY DISPLAY */}
        <p><b>Spacing:</b> {spacing}</p>
        <p><b>Girders:</b> {girders}</p>
        <p><b>Overhang:</b> {overhang}</p>

        <br />

        {/* DATA */}
        {data && (
          <div style={{
            background: "lightgreen",
            padding: "10px",
            borderRadius: "8px"
          }}>
            <p>Wind Speed: {data.wind_speed}</p>
            <p>Seismic Zone: {data.seismic_zone}</p>
            <p>Max Temp: {data.max_temp}</p>
            <p>Min Temp: {data.min_temp}</p>
            <p>{data.recommendation}</p>
          </div>
        )}
      </div>

      {/* RIGHT PANEL */}
      <div style={{ width: "50%", textAlign: "center" }}>
        <h3>Bridge Cross Section</h3>

        <p>(Bridge image here)</p>
      </div>

      {/* MODAL */}
      {showModal && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <div style={{
            background: "white",
            padding: "20px",
            width: "300px",
            borderRadius: "8px"
          }}>
            <h3>Modify Geometry</h3>

            <label>Girder Spacing</label><br />
            <input
              type="number"
              value={spacing}
              onChange={(e) => setSpacing(parseFloat(e.target.value))}
            /><br /><br />

            <label>No. of Girders</label><br />
            <input type="number" value={girders} readOnly /><br /><br />

            <label>Deck Overhang</label><br />
            <input
              type="number"
              value={overhang}
              onChange={(e) => setOverhang(parseFloat(e.target.value))}
            /><br /><br />

            {warning && (
              <p style={{ color: "red", fontWeight: "bold" }}>
                {warning}
              </p>
            )}

            <button onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;