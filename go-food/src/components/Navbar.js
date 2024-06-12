import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import Modal from '../Modal';
import Cart from '../screens/Cart'; 
import { useCart } from './ContextReducer';


export default function Navbar() {

  const [cartView, setCartView] = useState(false);
  let data = useCart();
  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('authToken');
    navigate("/login");
  }

  const styles = {
    navbar: {
      backgroundColor: '#000080' /* Navy blue background */,
      color: 'white' /* White text color */
    },
    link: {
      color: 'white' /* White text color for links */
    },
    btnWhiteText: {
      backgroundColor: 'white',
      color: '#000080' /* Navy text color for buttons */
    },
    btnDanger: {
      backgroundColor: 'white',
      color: 'red' /* Red text color for logout button */
    },
    navbarTogglerIcon: {
      filter: 'invert(100%)' /* Makes the hamburger menu icon white */
    }
  };

  return (
   <div>
   <nav className="navbar navbar-expand-lg" style={styles.navbar}>
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic" to="/" style={styles.link}>GoFood</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" style={styles.navbarTogglerIcon}></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav me-auto mb-2">
        {/* <Link className="nav-link active" aria-current="page" to="/" style={styles.link}>Home</Link> */}
      </div>
      {(!localStorage.getItem("authToken"))?
      <div className='d-flex'>
        <Link className="btn mx-1" to="/login" style={styles.btnWhiteText}>Login</Link>
        <Link className="btn mx-1" to="/createuser" style={styles.btnWhiteText}>SignUp</Link>
        
      </div>
      : 
      <div>
      <div className='btn mx-2' style={styles.btnWhiteText} onClick={()=>setCartView(true)}>
        My Cart {" "}
        <Badge pill bg="danger">{data.length}</Badge>
        </div>
        {cartView? <Modal onClose={()=>setCartView(false)}><Cart /></Modal>:null}
      <div className='btn mx-2' style={styles.btnDanger} onClick={handleLogout}>
        Logout
        </div>
      </div>
      }
    </div>
  </div>
</nav>
</div>
  )
}
