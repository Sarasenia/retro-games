function TarjetaProducto({ producto }) {
    const precioFormateado = producto.precio.toLocaleString('es-CL', {
        style: 'currency',
        currency: 'CLP',
    });

    return <div className="card m-3" style={{ width: '18rem' }}>
        <img src={producto.imagen} className="card-img-top" alt={producto.titulo} />
        <div className="card-body">
            <h5 className="card-title">{producto.titulo}</h5>
            <p className="card-text">Precio: {precioFormateado}</p>
            <a href="#" className="btn btn-primary">Agregar al carrito</a>
        </div>
    </div>
}

export default TarjetaProducto