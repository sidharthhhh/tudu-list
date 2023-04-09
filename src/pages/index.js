import { useState } from "react";
import { nanoid } from "nanoid";


const index = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tasks, setTask] = useState([]);

  const taskhandler = (e) => {
    e.preventDefault();
    let tudu = {
      id: nanoid(),
      title,
      desc,
    }
    // console.log(tudu);

    setTask([...tasks, tudu]);
    setTitle("");
    setDesc("");
  }
  
  // const changeHandler = (e) =>{
  //   setTitle(e.target.value);
  //   console.log(e.target.value);
  // }

  const deletehandler = (id) =>{
    let filterTask = tasks.filter((task) => task.id !== id);
    setTask(filterTask);
  }

  let taskslist = () =>{
    <h4>no pending task is found</h4>
  }

  if (tasks.length > 0) {
    taskslist = tasks.map((task, index) => (
        <li
            key={task.id}
            className="fs-4 d-flex justify-content-between list-group-item"
        >
            {task.title}
            <i
                onClick={() => deletehandler(task.id)}
                className="text-danger ri-delete-bin-2-line"
            ></i>
        </li>
    ));
}
 
  return (
<>
   <div className="container text-center mt-5 rounded text-bg-primary p-3">
    <h1>Todo list on React</h1>
    <form onSubmit={taskhandler}>
      <input type="text" placeholder="title" className="form-control mt-3 p-2" onChange={(e)=> setTitle(e.target.value)} value={title}/>
      <input type="text" placeholder="description" className="form-control mt-5 mb-5 p-2" onChange={(e) => setDesc(e.target.value)} value={desc} />
      <button className="btn btn-danger">Add to list</button>
    </form>

    <hr />
    <ul className="list-group">
     <h3>list of pending task</h3>
      {taskslist}

    </ul>
    
   </div>
   </>
  )
}

export default index