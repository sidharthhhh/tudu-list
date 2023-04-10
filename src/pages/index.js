import Create from "@/components/Create";
import Show from "@/components/Show";
import { useState } from "react";


const index = () => {
  
  const [tasks, setTask] = useState([]);

  
  
  // const changeHandler = (e) =>{
  //   setTitle(e.target.value);
  //   console.log(e.target.value);
  // }

  
 
  return (
<>
   <div className="container text-center mt-5 rounded text-bg-primary p-3">
   
    <Create tasks={tasks} setTask={setTask} />
    <hr />
    <Show tasks={tasks} setTask={setTask} />
   
    
   </div>
   </>
  )
}

export default index