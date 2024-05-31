

import Card from "./Card";

const Skills = () => {
  return (
    <div className="w-full mt-52">
      <div className="lg:w-3/4  mx-auto text-center py-12"><span className="text-gradient font-medium text-2xl">MY SKiLLS</span></div>
      <div className="lg:w-3/4 w-full lg:px-0 px-6 mx-auto grid lg:grid-cols-2 gap-6   ">
            <Card skill='HTML'/>
            <Card skill='CSS'/>
            <Card skill='JAVASCRIPT'/>
            <Card skill='C++'/>
            <Card skill='REACT'/>
            <Card skill='RESAX'/>
            <Card skill='NEXT'/>
            <Card skill='MYSQL'/>
            <Card skill='LARAVAL'/>
            <Card skill='SASS'/>
            <Card skill='PYTHON'/>
      </div>
    </div>
  )
}

export default Skills
