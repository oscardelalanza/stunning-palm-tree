import { Routes, Route, Link, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Start</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route exact path="/portfolio" element={<h1>Portfolio</h1>}/>
          <Route exact path="/" element={<h1>Start</h1>}/>
        </Routes>
      </section>
    </div>
  )
}

export default App
