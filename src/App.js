import './App.css'
import ItemListContainer from './components/ItemListContainer'
import ResponsiveAppBar from './components/NavBar'

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <ItemListContainer />
    </div>
  )
}

export default App
