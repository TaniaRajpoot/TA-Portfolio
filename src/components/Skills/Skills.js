
import {FaHtml5,FaCss3Alt,FaReact,FaNodeJs,FaGithub,FaDocker} from "react-icons/fa"
import {TbBrandJavascript} from "react-icons/tb"
import {SiMongodb,SiRedux,SiExpress,SiBootstrap,SiNetlify,SiTailwindcss,SiVercel,SiMysql} from "react-icons/si"
import './Skills.css'

function Skills  () {

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title about_skills'>Skills</h2>
     

      <div id='container' className='skills__list'>
         <li  className='skills__list-item btn btn--plain'>
          <FaHtml5 size={80} id="color" />
        </li>

        <li  className='skills__list-item btn btn--plain'>
          <FaCss3Alt size={80} id="color"/>
        </li>

        {/* <li  className='skills__list-item btn btn--plain'>
          <SiBootstrap size={80} id="color"/>
        </li> */}

        <li  className='skills__list-item btn btn--plain'>
          <SiTailwindcss size={80} id="color"/>
        </li>

        <li  className='skills__list-item btn btn--plain'>
          <TbBrandJavascript size={80} id="color"/>
        </li>

        <li  className='skills__list-item btn btn--plain'>
          <FaReact size={80} id="color"/>
        </li>

        <li  className='skills__list-item btn btn--plain'>
          <SiMongodb size={80} id="color"/>
        </li>
{/* 
        <li  className='skills__list-item btn btn--plain'>
          <SiRedux size={80} id="color"/>
        </li> */}

        <li  className='skills__list-item btn btn--plain'>
          <SiExpress size={80} id="color"/>
        </li>

        <li  className='skills__list-item btn btn--plain'>
          <FaNodeJs size={80} id="color"/>
        </li>

        <li  className='skills__list-item btn btn--plain'>
          <FaGithub size={80} id="color"/>
        </li>

        <li  className='skills__list-item btn btn--plain'>
          <SiNetlify size={80} id="color"/>
        </li>

<li  className='skills__list-item btn btn--plain'>
          <SiVercel size={80} id="color"/>  
        </li>
        
        {/* <li  className='skills__list-item btn btn--plain'>
          <FaDocker size={80} id="color"/>
        </li> */}

       {/* <li  className='skills__list-item btn btn--plain'>
          <SiMysql size={80} id="color"/>
        </li> */}

      </div>
    </section>
  )
}

export default Skills
