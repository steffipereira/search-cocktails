import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
      <main className="error-page section">
        <div className="error-container">
          <h1>Oops its a dead end</h1>
          <Link to="/" className="btn btn-primary">Back Home</Link>
        </div>
      </main>
    </>
  );
}

export default Error;
