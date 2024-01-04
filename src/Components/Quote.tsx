import { ImBaffled2 } from "react-icons/im";

const Quote = () => {
  return (
    <div className=" rounded-lg animate-border  bg-white bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] p-1">
       <div className="flex items-center justify-center py-4 space-x-2 bg-slate-700 rounded-t-lg md:text-lg md:font-medium">
         <p>only one project ?</p>

         <ImBaffled2 className="text-yellow-500 "/>
    
         </div>
    <div style={{backgroundColor:"#191825"}} className="text-white text-lg lg:text-xl xl:text-2xl font-serif p-6 rounded-b-lg">
    "Creating many 'todo' apps might fill the list, but crafting a <span className="font-semibold text-yellow-300"> movie streaming full-stack app </span> paints a quality experience that truly stands out amidst the crowd."
  </div>
  </div>
  
  )
}

export default Quote