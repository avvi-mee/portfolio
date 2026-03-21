export default function NotFound() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#0B0B0B', color: '#ECEAE4', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '80px', fontWeight: 800, margin: 0, color: '#C8FF00' }}>404</h1>
      <p style={{ color: '#525050', marginTop: '12px' }}>Page not found.</p>
      <a href="/" style={{ marginTop: '24px', color: '#C8FF00', fontSize: '13px' }}>← Go home</a>
    </div>
  );
}
