import React from 'react';
import { useGetMembersQuery } from '../../features/members/membersApi';
import Error from '../ui/Error';
import Member from './Member';
const Members = () => {
  const {data:memberdata, isError, isLoading,error} = useGetMembersQuery();
    // decide what to render
    let content = null;

    if(isLoading){
      content =  <div>Loading...</div>
  
    } else if(!isLoading && isError){
      content = <Error message={error?.data}/>
    } else if(!isLoading && !isError && memberdata.length === 0){
      content = <div>Not found!</div>
    } else if(!isLoading && !isError && memberdata.length > 0) {
      content = memberdata.map((team) => <Member team={team} key={team.id}/>);
    }
  
  
  return (
  // Team Members 
    <div className="mt-8">
      <h3 className="text-xl font-bold">Team Members</h3>
      <div className="mt-3 space-y-4">
        {content}
      </div>
    </div>
  )
}

export default Members;