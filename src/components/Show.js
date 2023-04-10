import React from 'react'

const Show = (props) => {
  const { tasks, setTask } = props



  const deletehandler = (id) =>{
    let filterTask = tasks.filter((task) => task.id !== id);
    setTask(filterTask);
  }

  let taskslist = <h4>no pending task is found</h4>

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
    <ul className="list-group">
    {/* <h3>list of pending task</h3> */}
     {taskslist}

   </ul>
  )
}

export default Show