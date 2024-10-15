import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetMembersQuery } from '../../features/members/membersApi';
import { useGetProjectsQuery } from '../../features/projecs/projectApi';
import { useFullItemUpdateMutation } from '../../features/tasks/tasksApi';

const From = ({data}) => {
    
    
    const [taskname, setTaskname] = useState(data.taskName);
    const [jobselect, setJobselect] = useState(data.teamMember.name);
    const [category, setCategory] = useState(data.project.projectName);
    const [deadlined, setDeadline] = useState(data.deadline);

        
    const {data:projectData} = useGetProjectsQuery();
    const {data:teamMamberDate} = useGetMembersQuery();
      
    const [fullItemUpdate] = useFullItemUpdateMutation();
    const navigate = useNavigate();
    const projectItems = projectData?.filter((item) => item.projectName === category) || {};
    const teamMamberItems =  teamMamberDate?.filter((item) => item.name === jobselect) || {};
    const handleSubmit = (e) => {
        e.preventDefault();
            fullItemUpdate({
              id:data.id,
              taskName:taskname,
              teamMember:teamMamberItems[0],
              project:projectItems[0], 
              deadline:deadlined,
              
      
             });
        
       navigate("/");
  };
  return (
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
          <option>Sadh Hasan</option>
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
        <input type="date" name="deadline" id="lws-deadline" value={deadlined}
          onChange={(e) => setDeadline(e.target.value)} required />
      </div>

      <div className="text-right">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded lws-submit">Save</button>
      </div>
    </form>
  </div>
  )
}

export default From
