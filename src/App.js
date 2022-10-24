import './App.css'
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
import ResponsiveAppBar from './components/NavBar'

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <ItemListContainer greeting={true} />
      <Footer />
    </div>
  )
}

export default App
