import "./Header.css"

function Header(){
    return<><div className="container">
        <div className="row align-items-center py-3">
            <div className="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
                <h1 className="h3 mb-0">Retro Games Store</h1>
            </div>
            <div className="col-12 col-md-6 text-center text-md-end">
                <img src="./img/logo.png" alt="Logo de Retro Games Store" className="img-fluid" style={{ maxHeight: '60px' }} />
            </div>

        </div>
    </div></>
}

export default Header