import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>nabvar</div>

        <nav class="navbar navbar-expand-lg text-bg-success">
          <div class="container-fluid">
            <a class="navbar-brand" href="./index.html">
              REINA VICTORIA
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="/index.html"
                >
                  Inicio
                </a>
                <a class="nav-link" href="./paginas/contacto.html">
                  Contacto
                </a>
              </div>
            </div>
          </div>
        </nav>

        <div>main</div>

        <div>footer</div>
      </header>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
        crossorigin="anonymous"
      ></script>
    </div>
  )
}

export default App
