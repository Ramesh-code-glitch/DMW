import React, { useState } from 'react';
import { Button } from '../ui/button';

const RegisterForm = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    phone1: '',
    phone2: '',
    password: '',
    confirmPassword: '',
    file: null,
  });

  // State for image preview
  const [imagePreview, setImagePreview] = useState(null);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      file: file,
    });
    setImagePreview(URL.createObjectURL(file));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here (e.g., API call)
    console.log('Form submitted', formData);
  };

  return (
    <section className='p-5 md:p-10 bg-white
      flex-col md:flex gap-10 px-5 items-center'>


      <div className="fclassName='p-5 md:p-5 bg-white
      flex-col md:flex gap-5 px-5 items-center">
        <img src="/AutoAction DMW Logo.png" alt="logo" />

       
        <h3>Wants to Register as a Part Supplier?</h3>
        <h4>Please fill the form below:</h4>
        </div>

        <div className="box-body my-form-body">
          <form 
            className="form-horizontal"
            onSubmit={handleSubmit}
            acceptCharset="utf-8"
          >
            <div className="rg-form">
              <div className="form-group">
                <label htmlFor="file" className="control-label">
                  Profile Image
                </label>
                <input
                  type="file"
                  name="file"
                  className="form-control profileFile"
                  id="file"
                  onChange={handleFileChange}
                />
                <div id="uploaded_image">
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Profile Preview"
                      style={{ width: '150px', height: '150px' }}
                    />
                  )}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="username" className="control-label">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  id="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="User Name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="name" className="control-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="control-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone1" className="control-label">
                  Phone
                </label>
                <input
                  type="number"
                  name="phone1"
                  className="form-control"
                  id="phone1"
                  value={formData.phone1}
                  onChange={handleInputChange}
                  placeholder="Phone"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone2" className="control-label">
                  Alternate Phone
                </label>
                <input
                  type="number"
                  name="phone2"
                  className="form-control"
                  id="phone2"
                  value={formData.phone2}
                  onChange={handleInputChange}
                  placeholder="Alternate Phone"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="control-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword" className="control-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm Password"
                  required
                />
              </div>

              <div className="form-group full">
              <strong>
              <a href="/BusinessDetails">
                Registation
              </a>
            </strong>
              </div>
            </div>
          </form>
          <p className="bot-note">
            Already have an account?{' '}
            <strong>
              <a href="/login">
                Login Now
              </a>
            </strong>
          </p>
        </div>
     
    </section>
  );
};


export default RegisterForm;
