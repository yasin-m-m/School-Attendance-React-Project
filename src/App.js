import { useState } from "react";
import AddStudent from "./AddStudent";
import BoysList from "./BoysList";
import GirlsList from "./GirlsList";
import Footer from "./Footer";


function App() {

  const [boys, setBoys] = useState([
    { id: 1, rollNumber: 1001, firstName: "John", lastName: "Doe", present:false, absent:false },
    { id: 2, rollNumber: 1002, firstName: "Michael", lastName: "Smith",present:false, absent:false },
    { id: 3, rollNumber: 1003, firstName: "William", lastName: "Johnson",present:false, absent:false },
    { id: 4, rollNumber: 1004, firstName: "James", lastName: "Brown",present:false, absent:false },
    { id: 5, rollNumber: 1005, firstName: "Benjamin", lastName: "Davis",present:false, absent:false },
    { id: 6, rollNumber: 1006, firstName: "Daniel", lastName: "Miller",present:false, absent:false },
    { id: 7, rollNumber: 1007, firstName: "Matthew", lastName: "Wilson",present:false, absent:false },
    { id: 8, rollNumber: 1008, firstName: "Ethan", lastName: "Anderson",present:false, absent:false },
    { id: 9, rollNumber: 1009, firstName: "Joseph", lastName: "Taylor",present:false, absent:false },
    { id: 10, rollNumber: 1010, firstName: "David", lastName: "Thomas",present:false, absent:false }
  ]);

  const [girls, setGirls] = useState([
    { id: 1, rollNumber: 2001, firstName: "Emma", lastName: "Johnson",present:false, absent:false },
    { id: 2, rollNumber: 2002, firstName: "Olivia", lastName: "Smith",present:false, absent:false },
    { id: 3, rollNumber: 2003, firstName: "Ava", lastName: "Brown",present:false, absent:false },
    { id: 4, rollNumber: 2004, firstName: "Isabella", lastName: "Davis",present:false, absent:false },
    { id: 5, rollNumber: 2005, firstName: "Sophia", lastName: "Miller",present:false, absent:false },
    { id: 6, rollNumber: 2006, firstName: "Mia", lastName: "Wilson",present:false, absent:false },
    { id: 7, rollNumber: 2007, firstName: "Charlotte", lastName: "Anderson",present:false, absent:false },
    { id: 8, rollNumber: 2008, firstName: "Amelia", lastName: "Taylor",present:false, absent:false },
    { id: 9, rollNumber: 2009, firstName: "Harper", lastName: "Thomas",present:false, absent:false },
    { id: 10, rollNumber: 2010, firstName: "Evelyn", lastName: "Martin",present:false, absent:false }
  ]);
const [gender, setGender] = useState("")
const [firstName, setFirstName] = useState("")
const [lastName, setLastName] = useState("")

const handleSubmit=(e)=>{

  e.preventDefault();
  console.log(firstName,lastName,gender); 

  if (gender==="boy") {
    const boysId=boys.length ? boys[boys.length-1].id + 1:1;
    const boysRollNumber=boysId+1000;
    const newBoy= {id:boysId,rollNumber:boysRollNumber,firstName:firstName,lastName:lastName}
    const allBoys=[...boys,newBoy]
    setBoys(allBoys)
  }
  if (gender==="girl") {
    const girlsId=girls.length ? girls[girls.length-1].id+1+boys.length:1+boys.length;
    const girlsRollNumber=girls.length+2000+1;
    const newGirl= {id:girlsId,rollNumber:girlsRollNumber,firstName:firstName,lastName:lastName}
    const allGirls=[...girls,newGirl]
    setGirls(allGirls)
  }

  setFirstName("")
  setLastName("")
  
}

const handleDeleteBoys=(id)=>{
const newBoys=boys.filter((boy)=>boy.id!==id)
setBoys(newBoys)

}
const handleDeleteGirls=(id)=>{
const newGirls=girls.filter((girl)=>girl.id!==id)
setGirls(newGirls)

}

  return (
    <div className="App">
      <div className="header">
      Students Attendance
      </div>
      <div className="studentDetails">
      <div className="addStudent">
      <AddStudent firstName={firstName}
                  lastName={lastName}
                  gender={gender}
                  setFirstName={setFirstName}
                  setLastName={setLastName}
                  setGender={setGender} 
                  handleSubmit={handleSubmit}/>
      </div>
      <div className="studentList">
      
      <BoysList boys={boys}
                setBoys={setBoys}
                handleDeleteBoys={handleDeleteBoys}/>
      <GirlsList girls={girls}
                handleDeleteGirls={handleDeleteGirls}
                setGirls={setGirls}
                />
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
