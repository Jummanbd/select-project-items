import React from 'react';
import { useGetProjectsQuery } from '../../features/projecs/projectApi';
import Error from '../ui/Error';
import Project from './Project';

function Projects() {
const {data:projectdata, isLoading, isError,error, isSuccess} = useGetProjectsQuery();


  // decide what to render
  let content = null;

  if(isLoading){
    content =  <div>Loading...</div>

  } else if(!isLoading && isError){
    content = <Error message={error?.data}/>
  } else if(!isLoading && !isError && projectdata.length === 0){
    content = <div>Not found!</div>
  } else if(!isLoading && !isError && projectdata.length > 0) {
    content = projectdata.map((item) => <Project item={item} key={item.id} isSuccess={ isSuccess}/>);
  }


  return (
    // Projects List 
    <div>
      <h3 className="text-xl font-bold text-blue-500">Projects</h3>
      <div className="mt-3 space-y-4">
        {/* <Project/> */}
        {content}
      </div>
    </div>
  )
}

export default Projects;
