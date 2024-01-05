import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Navbar = () => {
    return ( 
        <div className="navbar">
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/add'>New User</Link>
                </li>
            </ul>
        </div>
     );
}
 
export default Navbar;