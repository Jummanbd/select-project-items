import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useGetTasksQuery, useItemDeleteMutation } from '../../features/tasks/tasksApi'
import Error from '../ui/Error'
import TaskList from './TaskList'
const TaskLists = () => {
      const {data:tasklistdata, isLoading, isError, error, isSuccess} = useGetTasksQuery();
      const [itemDelete] = useItemDeleteMutation();
       const {search} = useSelector((state) => state.taskslist);

     // decide what to render
     let content = null;

     if(isLoading){
       content =  <div>Loading...</div>
   
     } else if(!isLoading && isError){
       content = <Error message={error?.data}/>
     } else if(!isLoading && !isError && tasklistdata.length === 0){
       content = <div>Not found!</div>
     } else if(!isLoading && !isError && tasklistdata.length > 0) {
        content = tasklistdata.map((tasklist) => <TaskList tasklist={tasklist} itemDelete = {itemDelete}  key={tasklist.id} isSuccess={isSuccess}/>);
     } 
  if(search.length > 0){
    const searchItems = tasklistdata.filter((user) =>
    user.taskName.toLowerCase().includes(search.toLowerCase()));
    content =  searchItems.map((tasklist) => <TaskList tasklist={tasklist} itemDelete = {itemDelete}  key={tasklist.id}/>);
    
  }



   
  return (
    <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
    <div className="justify-between mb-10 space-y-2 md:flex md:space-y-0">
      <Link to="/add" className="lws-addnew group">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" className="w-6 h-6 group-hover:text-indigo-500">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        <span className="group-hover:text-indigo-500">Add New</span>
      </Link>
    </div>
    <div className="lws-task-list">
        {content}
      
    </div>
  </main>
  )
}

export default TaskLists
