import React from 'react'

export default function ItemListContainer({ greeting }) {
  return greeting ? (
    <div
      style={{
        backgroundColor: 'blue',
        color: 'yellow',
        textAlign: 'center',
        height: 300,
        fontSize: 50,
      }}
    >
      <h2> ¡Bienvenido a elemento madera! </h2>
    </div>
  ) : (
    <div
      style={{ backgroundColor: 'red', color: 'white', textAlign: 'center' }}
    >
      <h2> No eres bienvenido </h2>
    </div>
  )
}
