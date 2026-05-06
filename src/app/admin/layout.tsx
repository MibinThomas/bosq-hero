import Link from 'next/link';
import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2>BOSQ Admin</h2>
        <nav className="admin-nav">
          <Link href="/admin">Dashboard</Link>
          <Link href="/admin/content">Content Management</Link>
          <Link href="/admin/settings">Settings</Link>
          <Link href="/" style={{ marginTop: '2rem', color: 'rgba(255,255,255,0.5)' }}>&larr; Back to Site</Link>
        </nav>
      </aside>
      <main className="admin-main">
        <header className="admin-header">
          <h3>Admin Panel</h3>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span>Admin User</span>
            <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--primary-color)', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
              A
            </div>
          </div>
        </header>
        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
          {children}
        </div>
      </main>
    </div>
  );
}
