import React, { useState } from 'react';

const LeadManage = () => {
  const [status, setStatus] = useState('Contacted');
  const [rep, setRep] = useState('Priya Verma');
  const [template, setTemplate] = useState('');
  const [followup, setFollowup] = useState('');
  const [saved, setSaved] = useState(false);

  const saveChanges = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div style={container}>
      <h2 style={title}>🛠️ Manage Lead</h2>

      <div style={section}>
        <p><strong>Lead:</strong> Ankit Sharma</p>
        <p><strong>Phone:</strong> 9123456789</p>
        <p><strong>Source:</strong> Website</p>
      </div>

      <label>Status</label>
      <select value={status} onChange={(e) => setStatus(e.target.value)} style={input}>
        <option>New 🆕</option>
        <option>Contacted ☎️</option>
        <option>Interested ✅</option>
        <option>Not Interested ❌</option>
      </select>

      <label>Assign to Sales Rep</label>
      <select value={rep} onChange={(e) => setRep(e.target.value)} style={input}>
        <option>Priya Verma 👩‍💼</option>
        <option>Rakesh Singh 👨‍💼</option>
      </select>

      <label>Follow-up Date</label>
      <input type="date" value={followup} onChange={(e) => setFollowup(e.target.value)} style={input} />

      <label>Message Template</label>
      <select value={template} onChange={(e) => setTemplate(e.target.value)} style={input}>
        <option value="">-- Select --</option>
        <option>📩 Thanks for your interest</option>
        <option>📎 Brochure attached</option>
        <option>📞 Schedule a call?</option>
      </select>

      <button onClick={saveChanges} style={button}>💾 Save Changes</button>
      {saved && <p style={alert}>✅ Changes saved!</p>}
    </div>
  );
};

const container = { maxWidth: '600px', margin: '40px auto', padding: '30px', background: '#ffffff', borderRadius: '12px', boxShadow: '0 0 15px rgba(0,0,0,0.1)', fontFamily: 'Segoe UI' };
const title = { textAlign: 'center', color: '#2980b9', marginBottom: '20px' };
const section = { background: '#ecf0f1', padding: '10px', borderRadius: '8px', marginBottom: '20px' };
const input = { width: '100%', padding: '10px', margin: '10px 0', borderRadius: '6px', border: '1px solid #ccc' };
const button = { marginTop: '20px', padding: '12px 18px', background: '#2980b9', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' };
const alert = { marginTop: '10px', color: '#155724', background: '#d4edda', padding: '10px', borderRadius: '6px' };

export default LeadManage;
