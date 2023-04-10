import { useRef, useState } from "react";
import { nanoid } from "nanoid";
// import css from "../styles/create.module.css"
const Create = (props) => {

  const inputuseref = useRef()

  const { tasks, setTask } = props
  const [error, setError] = useState(false)
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

  //  console.log(props)

  // internal csss
  // const style = {
  //   color: "red",
  //   backgroundColor: "yellow",
  // }


  const changeTitle = (e) => {
    let inputlength = inputuseref.current.value.length;
    // console.log(inputlength);    //jo bhi type hora hai uski length aarhi hai
    if (inputlength >= 5) {
       setError(false)
    }else{
      setError(true)
    }
    // console.log(e.target.value)
    setTitle(e.target.value)
  }

  


  return (
    <>
     {/* <h1 style={style}>{props.children}</h1> */}
     {/* <h1 style={{color : "red"}}></h1> */}
     {/* <h3  className={`${css.h1} bg-danger`}>Todo app</h3> */}
     <h1>Todo list</h1>
    <form onSubmit={taskhandler}>
      <div>
      <input
        ref={inputuseref}
       type="text"
        placeholder="title"
         className="form-control mt-3 p-2"
          // onChange={(e)=> setTitle(e.target.value)} 
          onChange={changeTitle}
          value={title}
          />
            <small className="text-danger">
                        {error && "Invalid Title value"}
                    </small>
      </div>
      <input
       type="text" 
       placeholder="description" 
       className="form-control mt-5 mb-5 p-2"
        onChange={(e) => setDesc(e.target.value)} 
        value={desc} 
        />


      <button className="btn btn-danger">Add to list</button>
    </form>
    </>
  )
}

export default Create