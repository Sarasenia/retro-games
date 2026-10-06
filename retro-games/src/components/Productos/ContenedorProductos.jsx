import TarjetaProducto from "./TarjetaProducto.jsx"
import "./ContenedorProductos.css"
import IndicadorCarga from "../IndicadorCarga.jsx"
import React, { useEffect } from "react"            


function ContenedorProductos(){
    const [cargando, setCargando] = React.useState(true)
    const [error, setError] = React.useState(false)
    const [productos, setProductos] = React.useState([])

   useEffect(() => {
        const obtenerProductos = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 2000))
                const response = await fetch("/api/productos")

                if (!response.ok)
                    throw new Error()

                const data = await response.json()
                if (!Array.isArray(data)) {
                    throw new Error("La respuesta no contiene una lista de productos")
                }
                setProductos(data)
            } 
            catch {
                setError(true)
            } 
            finally {
                setCargando(false)
            }
        }
        

        obtenerProductos()
    }, [])

    if (cargando) return <IndicadorCarga />
    if (error) return <p role="alert">No se pudieron cargar los productos.</p>

    return <div className="cont-tarjetas w-100">
        {productos.map(producto =>
            <TarjetaProducto
                key={producto.id}
                producto={producto}
            />
        )}
    </div>
}

export default ContenedorProductos