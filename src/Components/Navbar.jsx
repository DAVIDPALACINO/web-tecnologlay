import React from 'react' 
import './Navbar.css'

import logo from '../assets/Nube.png'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const[menu,setMenu] = useState("INICIO")

    return (
        <div className='Navbar'>
            <div className="nav-logo">
                <img src={logo} alt= "" />
                <p>Tecnologaly</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("INICIO")}}>hola</li>
                {/* <li onClick={()=>{setMenu("PC")}}><Link to='/PC'>PC</Link>{menu==="PC"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("PORTATIL")}}><Link to='/PORTATIL'>PORTATIL</Link>{menu==="PORTATIL"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("ACCESORIOS")}}><Link to='/ACCESORIOS'>ACCESORIOS</Link>{menu==="ACCESORIOS"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("LISTA DE PRECIOS")}}><Link to='/LISTADEPRECIOS'>LISTADEPRECIOS</Link>{menu==="LISTA DE PRECIOS"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("CONTACTO")}}><Link to='/CONTACTO'>CONTACTO</Link>{menu==="CONTACTO"?<hr/>:<></>}</li> */}
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>login</button></Link>
                <Link to='/logo'><img src={logo}alt="" /></Link>
            </div>
        </div>
    )
}

export default Navbar 