import React, { useState } from 'react';


function BusinessDetailsForm() {
  const [formData, setFormData] = useState({
    company: '',
    address: '',
    zip: '',
    country: '101', // Default to India
    state: '',
    city: '',
    pan_no: '',
    file1: null,
    gst_no: '',
    file2: null,
    location: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    fetch('/', {
      method: 'POST',
      body: form,
      headers: {
        'Accept': 'multipart/form-data',
      },
    })
      
  };

 
  return (
    <div class="box-body my-form-body bg-black">
    <section className='p-5 md:p-10 bg-white
      flex-col md:flex gap-10 px-5 items-center'>



      <div className="form-holder reg-formholder items-center">
        <img src="AutoAction DMW Logo.png" alt="Logo" />
        
        <div className='p-5 md:p-5 bg-white
      flex-col md:flex gap-10 px-5 items-center'>
      <h4>Business Details</h4>
      </div> 

        <div className="box-body my-form-body">
          <form className="form-horizontal" onSubmit={handleSubmit} encType="multipart/form-data">

            <div className="rg-form">
              <div className="form-group">
                <label htmlFor="company" className="control-label">Business name</label>
                <input
                  type="text"
                  name="company"
                  className="form-control"
                  value={formData.company}
                  onChange={handleChange}
                  id="company"
                  placeholder="Business name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="address" className="control-label">Address</label>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  value={formData.address}
                  onChange={handleChange}
                  id="address"
                  placeholder="Address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="zip" className="control-label">Postal Code</label>
                <input
                  type="text"
                  name="zip"
                  className="form-control"
                  value={formData.zip}
                  onChange={handleChange}
                  id="zip"
                  placeholder="Postal Code"
                />
              </div>

              <div className="form-group">
                <label htmlFor="country" className="control-label">Country</label>
                <select
                  name="country"
                  id="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="101">India</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="state" className="control-label">State</label>
                <select
                  name="state"
                  id="state"
                  value={formData.state}
                  onChange={handleChange}
                >
                  <option>Select State</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="city" className="control-label">City</label>
                <select
                  name="city"
                  id="city"
                  value={formData.city}
                  onChange={handleChange}
                >
                  <option>Select City</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="pan_no" className="control-label">Pan No</label>
                <input
                  type="text"
                  name="pan_no"
                  className="form-control"
                  value={formData.pan_no}
                  onChange={handleChange}
                  id="pan_no"
                  placeholder="Pan No"
                />
              </div>

              <div className="form-group">
                <label htmlFor="file1" className="control-label">Pan Card Image</label>
                <input
                  type="file"
                  name="file1"
                  className="form-control"
                  onChange={handleChange}
                  id="file1"
                />
                <div id="uploaded_image1"></div>
              </div>

              <div className="form-group">
                <label htmlFor="gst_no" className="control-label">GST No</label>
                <input
                  type="text"
                  name="gst_no"
                  className="form-control"
                  value={formData.gst_no}
                  onChange={handleChange}
                  id="gst_no"
                  placeholder="GST No"
                />
              </div>

              <div className="form-group">
                <label htmlFor="file2" className="control-label">GST Image</label>
                <input
                  type="file"
                  name="file2"
                  className="form-control"
                  onChange={handleChange}
                  id="file2"
                />
                <div id="uploaded_image2"></div>
              </div>

              <div className="form-group">
                <label htmlFor="location" className="control-label">Location</label>
                <input
                  type="text"
                  name="location"
                  className="form-control"
                  value={formData.location}
                  onChange={handleChange}
                  id="location"
                  placeholder="Location"
                />
              </div>

              <div className="form-group full">
              <strong>
              <a href="/BankDetails">
                Save&Next
              </a>
            </strong>
              </div>
            </div>

          </form>
        </div>
      </div>
    </section>
    </div>
  );
}

export default BusinessDetailsForm;
