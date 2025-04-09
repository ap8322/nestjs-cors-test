import { useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState<string>('')
  const [loading, setLoading] = useState(false)

  const testCors = async () => {
    setLoading(true)
    try {
      const response = await fetch('http://localhost:3000/test-cors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          test: 'Hello from frontend',
          timestamp: new Date().toISOString()
        }),
        credentials: 'include'
      })
      
      const data = await response.json()
      setResult(JSON.stringify(data, null, 2))
    } catch (error) {
      setResult(String(error))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <h1>CORS Test</h1>
      <button onClick={testCors} disabled={loading}>
        {loading ? 'Sending...' : 'Test CORS POST Request'}
      </button>
      {result && (
        <pre className="result">
          {result}
        </pre>
      )}
    </div>
  )
}

export default App
