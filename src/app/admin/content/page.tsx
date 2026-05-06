'use client';

import { useState } from 'react';

export default function ContentManagement() {
  const [activeTab, setActiveTab] = useState('homepage');

  return (
    <div>
      <h2 style={{ marginBottom: '2rem' }}>Content Management System</h2>
      
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
        <button 
          className="btn" 
          style={{ backgroundColor: activeTab === 'homepage' ? 'var(--primary-color)' : 'transparent', color: activeTab === 'homepage' ? 'white' : 'var(--text-main)' }}
          onClick={() => setActiveTab('homepage')}
        >
          Homepage
        </button>
        <button 
          className="btn" 
          style={{ backgroundColor: activeTab === 'services' ? 'var(--primary-color)' : 'transparent', color: activeTab === 'services' ? 'white' : 'var(--text-main)' }}
          onClick={() => setActiveTab('services')}
        >
          Services
        </button>
      </div>

      {activeTab === 'homepage' && (
        <form onSubmit={(e) => { e.preventDefault(); alert('Content Saved!'); }}>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--secondary-color)' }}>Hero Section</h3>
          
          <div className="form-group">
            <label>Hero Title</label>
            <input type="text" className="form-control" defaultValue="Innovation meets Excellence" />
          </div>
          
          <div className="form-group">
            <label>Hero Subtitle</label>
            <textarea className="form-control" rows={3} defaultValue="We craft digital experiences that help your business grow and stand out in the modern world. Partner with BOSQ for next-generation solutions."></textarea>
          </div>

          <h3 style={{ margin: '2.5rem 0 1.5rem', color: 'var(--secondary-color)' }}>About Section</h3>
          
          <div className="form-group">
            <label>About Title</label>
            <input type="text" className="form-control" defaultValue="About BOSQ" />
          </div>
          
          <div className="form-group">
            <label>About Content</label>
            <textarea className="form-control" rows={4} defaultValue="We are a team of passionate creators, developers, and strategists dedicated to delivering exceptional results for our clients."></textarea>
          </div>

          <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>Save Changes</button>
        </form>
      )}

      {activeTab === 'services' && (
        <div>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--secondary-color)' }}>Manage Services</h3>
          <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>Edit your service offerings below.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { title: 'Web Development', desc: 'Custom, responsive websites built with modern technologies.' },
              { title: 'UI/UX Design', desc: 'Intuitive and engaging user interfaces that delight your customers.' },
              { title: 'Digital Marketing', desc: 'Data-driven strategies to grow your online presence and reach.' },
              { title: 'Brand Strategy', desc: 'Cohesive branding that communicates your core values effectively.' }
            ].map((service, idx) => (
              <div key={idx} style={{ padding: '1.5rem', border: '1px solid #eee', borderRadius: '8px' }}>
                <div className="form-group">
                  <label>Service Title</label>
                  <input type="text" className="form-control" defaultValue={service.title} />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Description</label>
                  <input type="text" className="form-control" defaultValue={service.desc} />
                </div>
              </div>
            ))}
          </div>

          <button className="btn btn-primary" style={{ marginTop: '2rem' }} onClick={() => alert('Services Updated!')}>Save Services</button>
        </div>
      )}
    </div>
  );
}
