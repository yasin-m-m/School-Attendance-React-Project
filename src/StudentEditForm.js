import React, { useState } from 'react';

const StudentEditForm = ({ student, onSubmit }) => {
  const [firstName, setFirstName] = useState(student.firstName);
  const [lastName, setLastName] = useState(student.lastName);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...student,
      firstName,
      lastName 
    });
  }

  return (
    <form onSubmit={handleSubmit} className='editForm'>
      <input 
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)} 
      />
      <input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}  
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default StudentEditForm;