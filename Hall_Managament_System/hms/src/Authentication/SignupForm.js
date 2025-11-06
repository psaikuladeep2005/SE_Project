import React, { useState } from 'react';

const SignupForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Signup data:', form);
    alert('Signed up successfully!');
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Sign Up</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    height: '100vh', backgroundColor: '#f0f4f8',
  },
  form: {
    backgroundColor: '#fff', padding: 30, borderRadius: 8,
    boxShadow: '0 0 10px rgba(0,0,0,0.1)', width: 300,
    display: 'flex', flexDirection: 'column',
  },
  heading: {
    textAlign: 'center', marginBottom: 20,
  },
  input: {
    marginBottom: 15, padding: 10,
    border: '1px solid #ccc', borderRadius: 4,
  },
  button: {
    padding: 10, backgroundColor: '#007bff',
    color: '#fff', border: 'none', borderRadius: 4,
    cursor: 'pointer',
  }
};

export default SignupForm;
