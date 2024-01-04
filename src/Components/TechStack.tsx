import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";
import { PiToolboxFill } from "react-icons/pi";



const TechStack = () => {
  return (

<div className=" rounded-lg animate-border  bg-white bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] p-1">
  
<div style={{backgroundColor:"#191825"}}  className=" rounded-lg ">

  <div className="flex items-center justify-center py-4 space-x-2 bg-slate-700 rounded-t-lg">
    <p className="font-medium md:text-lg">Skills</p>
    <PiToolboxFill className="text-amber-500 md:text-xl " />
  </div>

  <div className="text-4xl grid grid-cols-4 place-items-center py-8 gap-y-4 lg:text-6xl">
  <DiMongodb className="text-green-400" />
  <SiExpress className="text-white" />
  <RiReactjsFill className="text-blue-400" />
  <FaNodeJs className="text-green-300" />
  <BiLogoTypescript className="text-blue-600" />
  <SiTailwindcss className="text-indigo-500" />
  <FaBootstrap className="text-purple-600" />
  <FaGitAlt className="text-red-600" />
  </div>

</div>
</div>

  )
}

export default TechStack