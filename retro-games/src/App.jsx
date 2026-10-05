import './App.css'
import Header from './components/layout/Header'
import Menu from './components/layout/Menu'
import Header2 from './components/layout/Header2'
import Principal from './components/layout/Principal'

function App() {
  return <div className="contenedor">
      <div className="header">
         <Header />
      </div>

       <div className="header2">
         <Header2 />
      </div>

      <div className="menu">
        <Menu /> 
      </div>

      <div className="principal">
        <Principal />
      </div>


      <div className="footer">
        footer 
      </div>
    </div>
  
}

export default App
