import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useGetProjectsQuery } from '../../features/projecs/projectApi';
import { unSelect, userSelect } from '../../features/projecs/projectSlice';
import { useGetTasksQuery } from '../../features/tasks/tasksApi';
const Project = ({item, isSuccess}) => {
  const {id, projectName, colorClass} = item;
  const dispatch =  useDispatch();
  const {data:projectdata} = useGetProjectsQuery();
  const {data:tasklistdata} = useGetTasksQuery()
  const [checkboxs, setCheckboxs] = useState(false);

  const handleChange = (e) => {
    var checkboxed = e.target.checked;
    setCheckboxs(checkboxed)
  
      
    if(checkboxed === true){
     const newItems = projectdata?.filter((item) => item.projectName === projectName) || {};
     
     const rulsletProject = newItems[0];
     dispatch(userSelect(rulsletProject));

    }
    if(checkboxed === false){
       dispatch(unSelect(projectName))
      
     }
  }
   
  return (
    <div className="checkbox-container" key={id}>
    <input type="checkbox" className={colorClass} onChange={handleChange }  checked = {checkboxs }/>
    <p className="label">{ projectName }</p>
  </div>
  )
}

export default Project
