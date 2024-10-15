import React from 'react';
import { useParams } from 'react-router-dom';
import Error from '../../components/ui/Error';
import { useGetTasksIdQuery } from '../../features/tasks/tasksApi';
import From from './From';

const Editing = () => {
    const {id} = useParams();

    const {data, isLoading, isError, error} = useGetTasksIdQuery(id) || {};
      
    let content = null;
    
    if(isLoading) {
      content =  <div>Loading...</div>
    } else if(!isLoading && isError) {
      content = <Error message={error?.data}/>
    } else if(!isLoading && !isError && data?.id){
      content = <From data = {data}/>
    }



    return (
        <div className="container relative">
        <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
          <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
            Editing Task for Your Team
          </h1>
          {content}

        </main>
      </div>
      )
}

export default Editing;
