import { useState } from "react";
import { nanoid } from "nanoid";


const Create = (props) => {
  const { tasks, setTask } = props
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

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



  return (
    <>
     <h1>Todo list on React</h1>
    <form onSubmit={taskhandler}>
      <input type="text" placeholder="title" className="form-control mt-3 p-2" onChange={(e)=> setTitle(e.target.value)} value={title}/>
      <input type="text" placeholder="description" className="form-control mt-5 mb-5 p-2" onChange={(e) => setDesc(e.target.value)} value={desc} />
      <button className="btn btn-danger">Add to list</button>
    </form>
    </>
  )
}

export default Create