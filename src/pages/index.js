import Create from "@/components/Create";
import Show from "@/components/Show";
import { useState } from "react";


const index = () => {
  
  const [tasks, setTask] = useState([]);
  return (
<>
   <div className="container text-center mt-5 rounded text-bg-primary p-3">
    {/* <h1>experiment of props</h1> */}
    <Create tasks={tasks} setTask={setTask} />
    <hr />
    <Show tasks={tasks} setTask={setTask} />
   
    
   </div>
   </>
  )
}

export default index