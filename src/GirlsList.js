import React, { useState } from 'react'
import { FaCheck, FaRegTrashAlt, FaUserEdit } from 'react-icons/fa'
import { ImCross } from "react-icons/im";
import StudentEditForm from './StudentEditForm';


const GirlsList = ({girls,setGirls,handleDeleteGirls,handleEdit}) => {

  const handleTickClick=(id)=>{
    const tickList=girls.map(girl=>girl.id===id?{...girl,present:!girl.present }:girl)
    setGirls(tickList)
    
  }
  const handleCrossClick=(id)=>{
   const crossList = girls.map(girl=>girl.id===id?{...girl,absent:!girl.absent }:girl)
      setGirls(crossList)
  }
  const [editingStudent, setEditingStudent] = useState(null);
  const handleEditClick = (girl) => {
    setEditingStudent(girl);
  }
  
  const handleEditSubmit = (updatedGirl) => {
    const updatedGirls = girls.map(g => {
      if(g.id === updatedGirl.id) {
        return updatedGirl; 
      }
      return g;
    })
    
    setGirls(updatedGirls);
    setEditingStudent(null);
  }

  const sortedGirls = [...girls].sort((a, b) =>
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
    <h1>Girls</h1>
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
    {sortedGirls.map((girl)=>(
    <tr key={girl.id}>
    <td>{girl.rollNumber}</td>
    <td>{girl.firstName}</td>
    <td>{girl.lastName}</td>
    <td className={girl.present ? "ticked":girl.absent ? "crossed":"status"}> <div className='tick'><FaCheck role='button' onClick={()=>handleTickClick(girl.id)}/> </div> <div className='cross'><ImCross role='button' onClick={()=>handleCrossClick(girl.id)}/></div></td>
    <td className='editDelete'> <div className='edit'><FaUserEdit role='button' onClick={()=>handleEditClick(girl)}/> </div> <div className='trash'><FaRegTrashAlt role='button' onClick={()=>handleDeleteGirls(girl.id)}/></div></td>
    </tr>
    ))}
    </tbody>
    </table>
    
    </div>
  )
}

export default GirlsList