import React from 'react';

const Dashboard = () => {
  return (
    <div style={container}>
      <h2 style={title}>📊 Dashboard</h2>
      <div style={grid}>
        <div style={card}><h3>Total Leads</h3><p>124</p></div>
        <div style={card}><h3>Contacted</h3><p>54</p></div>
        <div style={card}><h3>Converted</h3><p>12</p></div>
        <div style={card}><h3>Dropped</h3><p>30</p></div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h4>📈 Sources</h4>
        <ul>
          <li>Website – 40%</li>
          <li>Facebook – 30%</li>
          <li>Google Ads – 20%</li>
          <li>Offline – 10%</li>
        </ul>

        <h4>👤 Team Performance</h4>
        <ul>
          <li>Priya – 28</li>
          <li>Rakesh – 35</li>
          <li>Ravi – 15</li>
        </ul>
      </div>
    </div>
  );
};

const container = { padding: '40px', fontFamily: 'Segoe UI' };
const title = { color: '#004aad', marginBottom: '20px' };
const grid = { display: 'flex', gap: '20px', flexWrap: 'wrap' };
const card = { background: '#f0f4ff', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', width: '180px', textAlign: 'center' };

export default Dashboard;
