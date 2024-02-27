import img1 from "../assets/Frame 1 (1).png"

const Hero = () => {
  return (
    <div className="relative">
      {/* <div className=" w-96 h-96 bg-primary absolute top-[-18] -left- z-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
      <div className="w-96 h-96 bg-primary absolute bottom-0 right-0 z-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div> */}
      <div className="container ">
        <div className="md:flex md:flex-row-reverse    md:mt-16">
          <div className="md:w-5/12 flex items-center justify-center">
            <img className=" md:ml-10 " src={img1} alt="" />
          </div>
          <div className=" md:w-7/12">
            <h1 className="text-center md:text-left   text-7xl space-x-3 mb-8">Hi, I’m Ada</h1>
            <p className="text-center md:text-left text-2xl mb-10" >I’m a full-stack developer with 5 years
            of experience using React and NodeJS.
            Reach out if you’d like to learn more!
            </p>
            <div className=" sm:justify-between ">
            <button className=" py-1 px-4 md:py-3 md:px-8 bg-primary rounded-full text-xl mr-3">Download CV</button>
            <button className=" py-1 px-4 md:py-3 md:px-8 bg-primary rounded-full text-xl ">Contact Me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero