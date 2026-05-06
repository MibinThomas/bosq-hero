export default function AdminDashboard() {
  return (
    <div>
      <h2 style={{ marginBottom: '2rem' }}>Dashboard Overview</h2>
      
      <div className="grid">
        <div className="card" style={{ padding: '1.5rem' }}>
          <h4 style={{ color: 'var(--text-muted)' }}>Total Views</h4>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>12,450</p>
        </div>
        <div className="card" style={{ padding: '1.5rem' }}>
          <h4 style={{ color: 'var(--text-muted)' }}>Contact Submissions</h4>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>84</p>
        </div>
        <div className="card" style={{ padding: '1.5rem' }}>
          <h4 style={{ color: 'var(--text-muted)' }}>Active Pages</h4>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>5</p>
        </div>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <h3 style={{ marginBottom: '1.5rem' }}>Recent Activity</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '2px solid #eee' }}>
              <th style={{ padding: '1rem' }}>Action</th>
              <th style={{ padding: '1rem' }}>Date</th>
              <th style={{ padding: '1rem' }}>User</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '1rem' }}>Updated Homepage Hero Image</td>
              <td style={{ padding: '1rem' }}>Today, 10:30 AM</td>
              <td style={{ padding: '1rem' }}>Admin</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '1rem' }}>Modified Services Text</td>
              <td style={{ padding: '1rem' }}>Yesterday, 04:15 PM</td>
              <td style={{ padding: '1rem' }}>Admin</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
