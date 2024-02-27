
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import img6 from "../assets/image 15.png"


const Experience = () => {
  return (
    <section className="container">
      <div>
        <h1>Experience</h1>
        <div className="flex justify-between items-center">
          <div className="flex w-1/2 justify-around">
            <div className="">
              <div className="w-14 h-14 flex justify-center items-center rounded-full bg-sicondary ">
                <i className="text-4xl "><FaHtml5/></i>
              </div>
              <h4 className="text-center">HTML</h4>
            </div>
            <div className="">
              <div className="w-14 h-14 flex justify-center items-center rounded-full bg-sicondary ">
                <i className="text-4xl"><FaCss3Alt/></i>
              </div>
              <h4 className="text-center">CSS</h4>
            </div>
            <div className="">
              <div className="w-14 h-14 flex justify-center items-center rounded-full bg-sicondary ">
                <i className="text-4xl "><FaReact/></i>
              </div>
              <h4 className="text-center">REACT</h4>
            </div>  
          </div>
          <div className="flex justify-center items-center">
            <img src={img6} alt="" className="p-4"/>
            <div>
              <h3 className=" text-bold text-xl space-x-2">Software Engineer, Google</h3>
              <p className=" text-neutral-400">Sept, 2022 - Present</p>
              <ul className=" font-light ml-4 list-disc">
                <li>Worked on Google Maps</li>
                <li>Reduced load times by 50%</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
