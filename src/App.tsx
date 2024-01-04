import MyBio from "./Components/MyBio"
import NavBar from "./Components/NavBar"
import Project from "./Components/Project"
import Quote from "./Components/Quote"
import TechStack from "./Components/TechStack"
import dancing from "../src/images/ui-shigure-shigure-ui.gif"




const App = () => {
  return (
<div className="bg-black min-h-screen text-white">

<NavBar />

<div className="grid gap-y-9 px-5 pt-8 pb-10 md:grid-cols-2 md:gap-x-5 md:pb-0 md:pt-9 lg:gap-x-8 xl:gap-x-12">

  <MyBio />

  <TechStack />

  <div className="md:flex md:flex-col md:col-span-2 md:items-center lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-12">
    <div className="md:flex md:justify-center">
      <Quote />
    </div>

    <div className=" mt-10 md:flex md:justify-center">
      <Project />
    </div>
  </div>

</div>

<div className="hidden md:flex md:justify-center">
  <img src={dancing} alt="dancing" />
</div>

</div>


  )
}

export default App