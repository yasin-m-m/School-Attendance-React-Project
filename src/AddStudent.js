import React from 'react'

const AddStudent = ({firstName,setFirstName,lastName,setLastName,gender,setGender,handleSubmit}) => {
  return (
    <div className='addStudentForm'>
    <form className='addForm' onSubmit={handleSubmit}>
    <div className='name'>
    <input type="text" required placeholder='firstName' value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
    <input type="text" required placeholder='lastName' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
    </div>
    <div className="radio">
    <input type="radio" name="gender" id="boy" value="boy"  required onChange={(e)=>setGender(e.target.value)}/>
    <label htmlFor="boy">Boy</label>
    <input type="radio" name="gender" id="girl" value="girl"  required onChange={(e)=>setGender(e.target.value)}/>
    <label htmlFor="girl">Girl</label>
    </div>
    <div className='submitForm'>
    <button type='submit'>
    Add Student
    </button>
    </div>
    </form>
    
    </div>
  )
}

export default AddStudent