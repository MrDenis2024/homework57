import React from 'react';

const UserForm = () => {
  return (
    <form>
      <h4>Add new user</h4>
      <div className='form-group mb-2'>
        <label htmlFor='name'>Name</label>
        <input type="text" name='name' id='name' className='form-control' required/>
      </div>
      <div className='form-group mb-2'>
        <label htmlFor='email'>Email</label>
        <input type="email" name='email' id='email' className='form-control' required/>
      </div>
      <div className='form-group d-flex justify-content-between mb-3'>
        <label htmlFor='active'>User active</label>
        <input type="checkbox" name='active' id='active' className='ms-3'/>
      </div>
      <div className='form-group d-flex justify-content-between mb-4' >
        <label htmlFor='role'>User role</label>
        <select name="role" id="role" required>
          <option value="">Select role</option>
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type='submit' className='btn btn-primary mt-2'>Add user</button>
    </form>
  );
};

export default UserForm;