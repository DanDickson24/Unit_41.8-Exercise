import React, { useState } from 'react';

function NewBoxForm({ addBox }) {
  const initialState = {
    backgroundColor: '',
    width: '',
    height: '',
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData);
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="backgroundColor">Background Color:</label>
      <input
        type="text"
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />
      <label htmlFor="width">Width:</label>
      <input
        type="text"
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor="height">Height:</label>
      <input
        type="text"
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />
      <button>Add Box</button>
    </form>
  );
}

export default NewBoxForm;
