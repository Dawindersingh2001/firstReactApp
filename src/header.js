import './App.css';
import { Link } from 'react-router-dom';


const Header = () => {
        return <>
        <div className="topnav">
                  <Link className="active" to="/">Home</Link>
                  <Link to="/new">New</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/about">About</Link>
            </div>
        </>
}

export default Header;