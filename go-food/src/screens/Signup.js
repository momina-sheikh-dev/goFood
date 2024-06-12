import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Signup() {

    const [credentials, setcredentials] = useState({name:"",email:"",password:"",geolocation:""});

    const handleSubmit = async(e)=>{
        e.preventDefault();  //Synthetic event
        const response = await fetch("http://localhost:5000/api/createuser",{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password, location:credentials.geolocation})
    });

    const json = await response.json();
    console.log(json);

    if(!json.success){
        alert("Enter valid credentials");
    }
}


     const onChange = (event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
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
            backgroundColor: '#000080', /* Navy background for submit button */
            borderColor: '#000080', /* Navy border for submit button */
            color: '#ffffff', /* White text for submit button */
            margin: '15px'
        },
        btnDanger: {
            backgroundColor: '#ffffff', /* White background for already user button */
            borderColor: '#000080', /* Navy border for already user button */
            color: '#000080', /* Navy text for already user button */
            margin: '15px'
        }
     };

  return (
    <>
    <div style={styles.body}>
        <div style={styles.container}>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label" style={styles.formLabel}>Name</label>
                    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} style={styles.formControl} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label" style={styles.formLabel}>Email address</label>
                    <input type="email" className="form-control" name='email' value={credentials.email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} style={styles.formControl} />
                    <div id="emailHelp" className="form-text" style={{ color: styles.formLabel.color }}>We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" style={styles.formLabel}>Password</label>
                    <input type="password" className="form-control" name='password' value={credentials.password} id="exampleInputPassword1" onChange={onChange} style={styles.formControl} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" style={styles.formLabel}>Address</label>
                    <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} id="exampleInputPassword1" onChange={onChange} style={styles.formControl} />
                </div>
                <button type="submit" className="btn btn-success" style={styles.btnSuccess}>Submit</button>
                <Link to="/login" className="btn btn-danger" style={styles.btnDanger}>Already a user</Link>
            </form>
        </div>
    </div>
    </>
  )
}
