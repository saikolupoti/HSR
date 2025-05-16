import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const LeadDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div style={container}>
      <div style={card}>
        <h2 style={title}>🧾 Lead Detail (ID: {id})</h2>
        <p><strong>👤 Name:</strong> Ankit Sharma</p>
        <p><strong>📞 Phone:</strong> 9123456789</p>
        <p><strong>🌐 Source:</strong> Website</p>
        <p><strong>✅ Status:</strong> Contacted</p>
        <p><strong>🧑‍💼 Assigned To:</strong> Priya Verma</p>
        <p><strong>🚘 Interested In:</strong> Hyundai Creta</p>
        <button onClick={() => navigate(`/manage/${id}`)} style={button}>➕ Manage Lead</button>
      </div>
    </div>
  );
};

const container = { padding: '50px', display: 'flex', justifyContent: 'center', backgroundColor: '#f7faff', fontFamily: 'Segoe UI' };
const card = { background: '#ffffff', padding: '30px', borderRadius: '12px', width: '500px', boxShadow: '0 6px 20px rgba(0,0,0,0.15)' };
const title = { color: '#2c3e50', marginBottom: '20px' };
const button = { backgroundColor: '#27ae60', color: 'white', padding: '10px 20px', borderRadius: '6px', border: 'none', marginTop: '20px', cursor: 'pointer' };

export default LeadDetail;
