import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [health, setHealth] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // The Vite proxy forwards /api requests to the Express server.
    fetch('/api/health')
      .then((res) => {
        if (!res.ok) throw new Error(`Server responded with status ${res.status}`);
        return res.json();
      })
      .then((data) => setHealth(data))
      .catch(() => setError('Backend is unavailable. Make sure the server is running on port 5000.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="container">
      <h1>TaskFlow Lite</h1>
      <p className="subtitle">A simple way to manage your tasks.</p>

      <section className="card">
        <h2>Backend status</h2>
        {loading && <p className="loading">Loading... contacting the server</p>}
        {error && <p className="error">{error}</p>}
        {health && (
          <div className="success">
            <p><strong>Status:</strong> {health.status}</p>
            <p><strong>Message:</strong> {health.message}</p>
            <p><strong>Time:</strong> {health.timestamp}</p>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
