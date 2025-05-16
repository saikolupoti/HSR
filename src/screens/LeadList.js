import React from 'react';
import { useNavigate } from 'react-router-dom';

const leads = [
  { id: 1, name: 'Ankit Sharma', phone: '9123456789', source: 'Website', status: 'Contacted' },
  { id: 2, name: 'Sneha Kapoor', phone: '9876543210', source: 'Facebook', status: 'New' },
  { id: 3, name: 'Rahul Mehta', phone: '9012345678', source: 'Google Ads', status: 'Interested' },
];

const LeadList = () => {
  const navigate = useNavigate();

  return (
    <div style={container}>
      <h2 style={header}>📋 Lead Listing</h2>
      <table style={table}>
        <thead>
          <tr>
            <th style={th}>Name</th>
            <th style={th}>Phone</th>
            <th style={th}>Source</th>
            <th style={th}>Status</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} onClick={() => navigate(`/lead/${lead.id}`)} style={row}>
              <td style={td}>{lead.name}</td>
              <td style={td}>{lead.phone}</td>
              <td style={td}>{lead.source}</td>
              <td style={td}><span style={badge}>{lead.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const container = { padding: '40px', fontFamily: 'Segoe UI' };
const header = { color: '#2c3e50', marginBottom: '20px' };
const table = { width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden' };
const th = { background: '#34495e', color: 'white', padding: '14px' };
const td = { padding: '12px', textAlign: 'center', borderBottom: '1px solid #eee' };
const row = { cursor: 'pointer', transition: '0.3s', background: '#fdfdfd' };
const badge = { background: '#d1ecf1', color: '#0c5460', padding: '4px 10px', borderRadius: '20px' };

export default LeadList;
