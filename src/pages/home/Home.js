import React from 'react';
import Projects from '../../components//projects/Projects';
import TaskLists from '../../components//tasklist/TaskLists';
import Members from '../../components/members/Members';
import Navbar from '../../components/navbar/Navbar';
const Home = () => {
  return (
    <div>
      <Navbar/>
    <div className="container relative">
    <div className="sidebar">
      <Projects/>
      <Members/>


    </div>
    <div className="lg:pl-[16rem] 2xl:pl-[23rem]">
      <TaskLists/>
    </div>

    </div>
    </div>
    

  )
};

export default Home;