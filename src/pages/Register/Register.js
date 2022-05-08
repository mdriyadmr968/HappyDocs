import React from 'react';

const Register = () => {
    return (
      <div>
        <h2>register</h2>
        <form onSubmit="">
          <input type="email" name="" id="" placeholder="your email" />
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter your password"
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="confirm your password"
          />
          <input type="submit" value="submit" />
        </form>
        <p>
          already have an account? <a href="/login">Login</a>
        </p>
        <div>------------ or ------------</div>
        <button className="btn-regular">Google Signin</button>
      </div>
    );
};

export default Register;