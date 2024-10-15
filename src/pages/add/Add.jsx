import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetMembersQuery } from '../../features/members/membersApi';
import { useGetProjectsQuery } from '../../features/projecs/projectApi';
import { useAddNewTaskMutation } from '../../features/tasks/tasksApi';

const Add = () => {
 
  
  const [taskname, setTaskname] = useState("");
  const [jobselect, setJobselect] = useState("");
  const [category, setCategory] = useState("");
  const [deadline, setDdeadline] = useState("");
  const [addNewTask] = useAddNewTaskMutation();
  const {data:projectData} = useGetProjectsQuery();
  const {data:teamMamberDate} = useGetMembersQuery();
  const projectItems = projectData?.filter((item) => item.projectName === category) || {};
  const teamMamberItems =  teamMamberDate?.filter((item) => item.name === jobselect) || {};
 const navigate = useNavigate();

  const handleSubmit = (e) => {
        e.preventDefault();
            addNewTask({
              taskName:taskname,
              teamMember:teamMamberItems[0],
              project:projectItems[0], 
              deadline:deadline,
              status:"inProgress"
      
             });
        
       navigate("/");
  };

  
  
  return (
    <div className="container relative">
    <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
      <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
        Create Task for Your Team
      </h1>

      <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="fieldContainer">
            <label for="lws-taskName">Task Name</label>
            <input
              type="text"
              name="taskName"
              id="lws-taskName"
              required
              placeholder="Implement RTK Query"
              value={taskname}
              onChange={(e) => setTaskname(e.target.value)}
            />
          </div>

          <div className="fieldContainer">
            <label>Assign To</label>
            <select name="teamMember" id="lws-teamMember" className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'value={jobselect}
              onChange={(e) => setJobselect(e.target.value)} required>
              <option value="" hidden selected>Select Job</option>
              <option>Sumit Saha</option>
              <option>Saad Hasan</option>
              <option>Akash Ahmed</option>
              <option>Md Salahuddin</option>
              <option>Riyadh Hassan</option>
              <option>Ferdous Hassan</option>
              <option>Arif Almas</option>
            </select>
          </div>
          <div className="fieldContainer">
            <label for="lws-projectName">Project Name</label>
            <select id=" lws-projectName" className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline' name="projectName" value={category}
              onChange={(e) => setCategory(e.target.value)} required>
              <option value="" hidden selected>Select Project</option>
              <option>Scoreboard</option>
              <option>Flight Booking</option>
              <option>Product Cart</option>
              <option>Book Store</option>
              <option>Blog Application</option>
              <option>Job Finder</option>
            </select>
          </div>

          <div className="fieldContainer">
            <label for="lws-deadline">Deadline</label>
            <input type="date" name="deadline" id="lws-deadline" value={deadline}
              onChange={(e) => setDdeadline(e.target.value)} required />
          </div>

          <div className="text-right">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded lws-submit">Save</button>
          </div>
        </form>
      </div>
    </main>
  </div>
  )
}

export default Add