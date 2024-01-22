import './styles.css';
import { Link } from 'react-router-dom';
import CartIcon from '../CartIcon';

export default function HeaderClient() {
    return (

        <header className="dsc-header-client">
            <nav className="dsc-container">
                <Link to={"/"}>
                    <h1>DSCommerce</h1>
                </Link>
                <div className="dsc-navbar-right">
                    <Link to="/cart">
                        <div className="dsc-menu-items-container">
                            <div className="dsc-menu-item">
                                <CartIcon />
                            </div>
                        </div>
                    </Link>
                    <Link to={"/login"}>
                        Entrar
                    </Link>
                </div>
            </nav>
        </header>

    );
}