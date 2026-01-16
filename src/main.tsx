import ReactDOM from 'react-dom/client'

const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <div style={{ padding: '20px', color: 'white' }}>
      <h1 style={{ color: '#0ea5e9' }}>REACT_LAYER_WORKING</h1>
      <p>If you see this, we can finally bring back the Textacon UI.</p>
    </div>
  );
}
