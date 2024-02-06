import React, { useState } from 'react'
import { FaCheck, FaRegTrashAlt, FaUserEdit } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import StudentEditForm from './StudentEditForm';

const BoysList = ({boys,setBoys,handleDeleteBoys}) => {


  const handleTickClick=(id)=>{
    const tickList=boys.map(boy=>boy.id===id?{...boy,present:!boy.present }:boy)
    setBoys(tickList)
    
  }
  const handleCrossClick=(id)=>{
   const crossList = boys.map(boy=>boy.id===id?{...boy,absent:!boy.absent }:boy)
      setBoys(crossList)
  }
    
  const [editingStudent, setEditingStudent] = useState(null);
  const handleEditClick = (boy) => {
    setEditingStudent(boy);
  }
  
  const handleEditSubmit = (updatedBoy) => {
    const updatedBoys = boys.map(b => {
      if(b.id === updatedBoy.id) {
        return updatedBoy; 
      }
      return b;
    })
    
    setBoys(updatedBoys);
    setEditingStudent(null);
  }
  
  const sortedBoys = [...boys].sort((a, b) => 
  a.firstName.localeCompare(b.firstName)
);
  return (
    <div className='studentTable' style={{overflowX:"auto"}}>  
    {editingStudent && 
      <StudentEditForm 
        student={editingStudent}
        onSubmit={handleEditSubmit} 
      />
    }

    <h1>Boys</h1>
    <table>
    <thead>
    <tr>
    <th>Roll Number</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Attendance</th>
    <th>Edit/Delete</th>
    </tr>
    </thead>
    <tbody>
    {sortedBoys.map((boy)=>(
    <tr key={boy.id}>
    <td>{boy.rollNumber}</td>
    <td>{boy.firstName}</td>
    <td>{boy.lastName}</td> 
    <td className={boy.present ? "ticked":boy.absent ? "crossed":"status"}> <div className='tick'><FaCheck role='button' onClick={()=>handleTickClick(boy.id)}/> </div> <div className='cross'><ImCross role='button' onClick={()=>handleCrossClick(boy.id)}/></div></td>
    <td className='editDelete'> <div className='edit'><FaUserEdit role='button' onClick={() => handleEditClick(boy)}/> </div> <div className='trash'><FaRegTrashAlt role='button' onClick={()=>handleDeleteBoys(boy.id)}/></div></td>
    </tr>
    ))}
    </tbody>
    </table>
    
    </div>
  )
}

export default BoysList