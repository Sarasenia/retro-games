import "./Productos.css"    

function Productos(){
    return<div class="productos">
        <div class="cont-tarjetas">
            <div id="loading">Loading...</div>
            <div id="indicador-error" style="display: none;">No se pudieron cargar los productos.</div>
        </div>
    </div>
}

export default Productos;