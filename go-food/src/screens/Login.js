import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Synthetic event
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter valid credentials");
    } else {
      // Set an authentication token or any identifier in localStorage
      localStorage.setItem("authToken", "some-auth-token");
      navigate("/");
    }
  }

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  }

  const styles = {
    body: {
      backgroundColor: '#f0f8ff', /* Light blue background */
      color: '#000080', /* Navy text color */
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#ffffff', /* White background for form container */
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      color: '#000080' /* Navy color for container */
    },
    formLabel: {
      color: '#000080' /* Navy color for labels */
    },
    formControl: {
      backgroundColor: 'white',
      border: '1px solid #000080', /* Navy border for input fields */
      borderRadius: '4px',
      color: '#000080' /* Navy text color for input fields */
    },
    btnSuccess: {
      backgroundColor: '#000080', /* Navy background for login button */
      borderColor: '#000080', /* Navy border for login button */
      color: '#ffffff', /* White text for login button */
      margin: '15px'
    },
    btnDanger: {
      backgroundColor: '#ffffff', /* White background for register button */
      borderColor: '#000080', /* Navy border for register button */
      color: '#000080', /* Navy text for register button */
      margin: '15px'
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label" style={styles.formLabel}>Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} style={styles.formControl} />
            <div id="emailHelp" className="form-text" style={{ color: styles.formLabel.color }}>We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label" style={styles.formLabel}>Password</label>
            <input type="password" className="form-control" name='password' value={credentials.password} id="exampleInputPassword1" onChange={onChange} style={styles.formControl} />
          </div>
          <button type="submit" className="btn btn-success" style={styles.btnSuccess}>Login</button>
          <Link to="/createuser" className='btn btn-danger' style={styles.btnDanger}>Register Here</Link>
        </form>
      </div>
    </div>
  );
}
