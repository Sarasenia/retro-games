import './App.css'
import Header from './components/layout/Header'
import Menu from './components/layout/Menu'
import Principal from './components/layout/Principal'

function App() {
  return <div className="Contenedor">
      <div className="header">
         <Header />
      </div>

      <div className="menu">
        <Menu /> 
      </div>

      <div className="principal">
        <Principal />
      </div>

      <div className="productos">
        <Productos />
      </div>

      <div className="footer">
        footer 
      </div>
    </div>
  
}

export default App
