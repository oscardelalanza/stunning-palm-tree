import { Routes, Route, Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <ul>
        <li>
          <Link to="/portfolio/project-1">Project 1</Link>
        </li>
        <li>
          <Link to="/portfolio/project-2">Project 2</Link>
        </li>
      </ul>
      <div>
        <Routes>
          <Route path="/project-1" element={<h2>Project 1</h2>}/>
          <Route path="/project-2" element={<h2>Project 2</h2>}/>
        </Routes>
      </div>
    </div>
  )
}

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
          <Route path="/portfolio/*" element={<Portfolio />} />
          <Route exact path="/" element={<h1>Start</h1>} />
        </Routes>
      </section>
    </div>
  )
}

export default App
