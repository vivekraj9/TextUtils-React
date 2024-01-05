import React from 'react'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg" style={{ color: props.mode === 'dark' ? '#E6DFFF' : '#140A14', backgroundColor: props.mode === 'dark' ? '#140A14' : '#E6DFFF' }}>
      <div className="container-fluid">
        <div className="navbar-brand" style={{ color: props.mode === 'dark' ? '#E6DFFF' : '#140A14', backgroundColor: props.mode === 'dark' ? '#140A14' : '#E6DFFF' }}>{props.title}</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <a className="nav-link active" style={{ color: props.mode === 'dark' ? '#E6DFFF' : '#140A14', backgroundColor: props.mode === 'dark' ? '#140A14' : '#E6DFFF' }} aria-current="page" href="/">Home Page</a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="/">{props.about}</a>
            </li> */}
          </ul>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Change mode</label>
          </div>

        </div>
      </div>
    </nav>
  )
}
