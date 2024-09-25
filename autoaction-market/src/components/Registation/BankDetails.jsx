import React, { useState } from 'react';

const BankDetailsForm = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    account: '',
    branch: '',
    ifsc: '',
    chequeFile: null,
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
      chequeFile: file,
    });
    setImagePreview(URL.createObjectURL(file));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic (e.g., API call)
    console.log('Form submitted', formData);
  };

  return (
    <section className='p-5 md:p-10 bg-white
      flex-col md:flex gap-10 px-5 items-center'>


      <div className="fclassName='p-5 md:p-5 bg-white
      flex-col md:flex gap-5 px-5 items-center">
        <img src="/AutoAction DMW Logo.png" alt="logo" />

        <div className='p-5 md:p-5 bg-white
      flex-col md:flex gap-10 px-5 items-center'>
      </div>
      
        <h3>Bank Details</h3>
        <p>Kindly provide the following details carefully.</p>

        <div className="box-body my-form-body">
          <form
            className="form-horizontal"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            acceptCharset="utf-8"
          >
            <div className="rg-form">
              <div className="form-group">
                <label htmlFor="name" className="control-label">
                  Bank Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="account" className="control-label">
                  Account Number
                </label>
                <input
                  type="text"
                  name="account"
                  className="form-control"
                  id="account"
                  value={formData.account}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="branch" className="control-label">
                  Branch
                </label>
                <input
                  type="text"
                  name="branch"
                  className="form-control"
                  id="branch"
                  value={formData.branch}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="ifsc" className="control-label">
                  IFSC
                </label>
                <input
                  type="text"
                  name="ifsc"
                  className="form-control"
                  id="ifsc"
                  value={formData.ifsc}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="file3" className="control-label">
                  Upload Cancel Cheque Image
                </label>
                <input
                  type="file"
                  name="chequeFile"
                  className="form-control chequeFile"
                  id="file3"
                  onChange={handleFileChange}
                />
                <div id="uploaded_image3">
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Cheque Preview"
                      style={{ width: '150px', height: '150px' }}
                    />
                  )}
                </div>
              </div>

              <div className="form-group full">
                <input
                  type="submit"
                  name="submit"
                  value="Save"
                  className="btn btn-style"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BankDetailsForm;
