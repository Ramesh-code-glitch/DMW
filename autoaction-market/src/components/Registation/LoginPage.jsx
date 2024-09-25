import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  return (
    <div class="box-body my-form-body bg-black">
    <section className='p-5 md:p-10 bg-white
      flex-col md:flex gap-10 px-5 items-center'>

      <div className="fclassName='p-5 md:p-5 bg-white
      flex-col md:flex gap-5 px-5 items-center">
        <img src="/AutoAction DMW Logo.png" alt="logo" />

        
        <h3>Parts Provider Login Only</h3>
        <h4>Enter your login details below:</h4>
        </div>

        <div className="box-body my-form-body">
          
            <div className="form-group">
              <input
                type="text"
                
                required
                placeholder="Username"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                
                required
                placeholder="Password"
              />
              <p className="fg-pass">
                <a href="#" className="">
                  Forgot Password
                </a>
              </p>
            </div>
            <div className="form-group full">
            <strong>
            <a href='/HOME'>
              LOGIN
            </a>
          </strong>
            </div>

            <div className="form-group full">
            <strong>
            <a href='/RegForm'>
            Click Here if you don't have an account
            </a>
          </strong>
            </div>
              
            
        </div>
      
    </section>
    </div>
  );
};

export default LoginForm;
