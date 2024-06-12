import './App.css';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'; //npm i bootstrap-dark-5 boostrap
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from './screens/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './screens/Login';
import SignupScreen from './screens/Signup'; // Rename to SignupScreen to avoid conflict
import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder';
import CreateUser from './screens/Signup.js'; // Import CreateUser component

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignupScreen />} /> {/* Use SignupScreen here */}
            <Route exact path="/myorder" element={<MyOrder />} />
            <Route exact path="/createuser" element={<CreateUser />} /> {/* Add route for /createuser */}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
