import img2 from "../assets/24325547_2022_ani_cartoon_28-removebg-preview 1.png"
import img3 from "../assets/image 2.png"
import img4 from "../assets/image 3.png"
import img5 from "../assets/image 4.png"


export default function About() {
  return (
    <div className="container relative bg-none">
      <div className=" bg-black rounded-xl">
        <div className="flex justify-center items-center">
          <div>
            <h2 className=" text-3xl font-bold p-10">About</h2>
            <img  src={img2} alt="" className=""/>
          </div>
          <div>
            <div className="flex justify-center items-center p-2">
              <div className="p-2 ">
                <img src={img3} alt="" />
              </div>
              <div className="">
                <h1 className=" font-bold">Frontend Developer</h1>
                <p>I’m a front-end developer with experience
                in building responsive and optimized sites</p>
              </div>
            </div>
            <div className="flex justify-center items-center p-2">
              <div className="p-2">
                <img src={img4} alt="" />
              </div>
              <div>
                <h1 className=" font-bold">Backend Developer</h1>
                <p>I have experience developing fast and
                optimised back-end systems and APIs</p>
              </div>
            </div>
            <div className="flex justify-center items-center p-2 ">
              <div className="p-2">
                <img src={img5} alt="" />
              </div>
              <div>
                <h1 className=" font-bold">UI Designer</h1>
                <p>I have designed multiple landing pages and
                have created design systems as well</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
