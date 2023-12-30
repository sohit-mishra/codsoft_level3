import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

const Signup = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        phonenumber: "",
        password: ""
    });

    const { storeTokenInLS } = useAuth();

    const handleInput = (e) => {
        const name = e.target.id;
        const value = e.target.value;

        setUser({
            ...user,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);

        try {
            const response = await fetch(`http://localhost:5000/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            });

            const data = await response.json();
            if (response.ok) {
                alert("Signup Sucessfully");

                storeTokenInLS(data.token);

                setUser({
                    name: "",
                    email: "",
                    phonenumber: "",
                    password: ""
                });
                navigate("/");

            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' placeholder='Name' autoComplete='off' value={user.name} required onChange={handleInput} name='name' />
                <label htmlFor="email">Email</label>
                <input type="email" id='email' placeholder='Email Address' autoComplete='off' required onChange={handleInput} name='email' value={user.email} />
                <label htmlFor="phonenumber">Phone Number</label>
                <input type="tel" id='phonenumber' placeholder="Phone Number" required autoComplete='off' onChange={handleInput} name='phonenumber' value={user.phonenumber} />
                <label htmlFor="password">Password</label>
                <input type="password" id='password' placeholder="Password" required autoComplete='off' onChange={handleInput} value={user.password} />
                <button>Sumbit</button>
                <p style={{ textAlign: 'center' }}>Already have an Account? <Link to="/Signin">Sign in</Link></p>
            </form>
        </div>
    )
}

export default Signup;