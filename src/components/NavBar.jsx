import React from 'react'

export default function Navbar({ conBoton, color, funcionLogin }) {
  return (
    <div>
      <div style={{ backgroundColor: color }}>
        NAVBAR
        <ul>
          <li>
            <a href="http://google.com">ir a google</a>
          </li>
        </ul>
        {conBoton ? (
          <button onClick={() => funcionLogin()}>LOGIN</button>
        ) : null}
      </div>
    </div>
  )
}
