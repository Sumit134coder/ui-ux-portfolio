import './styles.css'
import Model from "@/components/Home/3dModel";
import { BsShieldLockFill , BsGithub , BsLinkedin } from "react-icons/bs";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});

const Landing = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen text-white">
      <div className="flex justify-center items-center flex-col p-4 md:p-[3rem] gap-[2rem]">
        {/* ---heading--- */}
        <div>
          <h1
            className={`font-black text-[3rem] lg:text-[6rem] ${pacifico.className} gradient-text`}
          >
            Collective UI
          </h1>
          <p className="text-right text-base md:text-[2rem] font-semibold relative flex gap-2 justify-end">
            {" "}
            <span>By</span>
            <a href="https://sumit-mehra.vercel.app/" target="_blank" className="mx-2 portfolio-link relative gradient-text hover:scale-125 transition">
              Sumit Mehra
            </a>
          </p>
        </div>

        {/* --subhedaing-- */}
        <div className=" text-base md:text-[1.4rem] font-semibold">
          A One stop portal to view my small scale work of UI/UX including
          FrontendMentor challenges , Landing Pages , Single page projects etc.
        </div>

        <div className='flex items-center gap-4 justify-end text-[2rem] w-full px-[2rem]'>
        <a href='https://github.com/Sumit134coder' target="_blank" title='GitHub' className='hover:scale-125 transition'><BsGithub /></a>
            <a href='https://www.linkedin.com/in/sumit-mehra-6579171b4/' target="_blank"  className='hover:scale-125 transition' title='LinkedIn'><BsLinkedin /></a>
        </div>
      </div>
      <Model />
    </div>
  );
};

export default Landing;
