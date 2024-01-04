import pp from "../images/IMG_4624.jpg"
import { FaTwitter } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { GiLaptop } from "react-icons/gi";

const MyBio = () => {
  return (
    <div className=" rounded-lg animate-border  bg-white bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] p-1">

    <div style={{backgroundColor:"#191825"}} className="rounded-lg py-6 flex justify-center space-x-7 md:py-12 lg:py-16 lg:space-x-10">

    <img src={pp} alt="my profile" className="h-20 rounded-full md:h-24 lg:h-32"/>
  
    <div className="space-y-1">
      <div className="font-bold mb-1 md:text-lg lg:text-xl">I am Jayaditya 👋</div>
      <div className="text-sm md:text-base lg:text-lg" >GITAM university <span className="inline-block"><FaUniversity /></span></div>
      <div className="text-sm md:text-base lg:text-lg">CS major<span className="inline-block"><GiLaptop /></span></div>
      <div className="text-sm md:text-base lg:text-lg "><a href="https://twitter.com/opnDevAditya" rel="noreferrer" target="_blank" className="flex items-center">Let's Connect <FaTwitter className="text-blue-500" /></a></div>
    </div>


    </div>
    
  </div>
  
  )
}

export default MyBio