import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="left-side">
                <h2>REACT STOCK</h2>
            </div>
            <div className="right-side">
                <Link to={'/'}>Início</Link>
                <Link to={'/items'}>Itens</Link>
            </div>
        </div>
    )
}

export default Navbar