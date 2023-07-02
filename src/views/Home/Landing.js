import './styles.css'
import Model from "@/components/Home/3dModel";
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
          <p className="text-right text-base md:text-[2rem] font-semibold">
            {" "}
            By
            <a href="https://sumit-mehra.vercel.app/" target="_blank" className="mx-2">
              Sumit Mehra
            </a>
          </p>
        </div>

        {/* --subhedaing-- */}
        <div className=" text-base md:text-[1.4rem] font-semibold">
          A One stop portal to view my small scale work of UI/UX including
          FrontendMentor challenges , Landing Pages , Single page projects etc.
        </div>
      </div>
      <Model />
    </div>
  );
};

export default Landing;
