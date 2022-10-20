import './App.css'
import Navbar from './components/NavBar'

function App() {
  function funcionLogin() {
    alert('algo importante sobre el login')
  }
  return (
    <div>
      <Navbar conBoton={true} color={'#ddd'} funcionLogin={funcionLogin} />
    </div>
  )
}

export default App
