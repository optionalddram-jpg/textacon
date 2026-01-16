export default function App() {
  const s = {
    bg: { backgroundColor: '#09090b', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', padding: '20px', fontFamily: 'sans-serif' },
    card: { width: '100%', maxWidth: '350px', backgroundColor: '#18181b', borderRadius: '32px', border: '1px solid #27272a', overflow: 'hidden' },
    header: { width: '100%', maxWidth: '400px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', borderBottom: '1px solid #27272a', marginBottom: '40px' },
    btnMain: { flex: 1, borderRadius: '24px', backgroundColor: 'white', color: 'black', border: 'none', fontWeight: '900', padding: '20px', cursor: 'pointer' }
  };

  return (
    <div style={s.bg}>
      <nav style={s.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '40px', height: '40px', backgroundColor: '#0ea5e9', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900' }}>T</div>
          <span style={{ fontWeight: '900', fontSize: '20px' }}>TEXTACON</span>
        </div>
      </nav>

      <div style={s.card}>
        <div style={{ height: '300px', backgroundColor: '#27272a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#3f3f46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </div>
        <div style={{ padding: '30px' }}>
          <h2 style={{ fontSize: '28px', margin: '0' }}>Caleb, 28</h2>
          <p style={{ color: '#0ea5e9', fontWeight: 'bold' }}>Maricopa County, AZ</p>
          <p style={{ color: '#a1a1aa' }}>System is stable. All dependencies removed.</p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '15px', marginTop: '25px', width: '350px' }}>
        <button style={s.btnMain}>SEND LETTER</button>
      </div>
    </div>
  );
}
