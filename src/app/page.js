import Image from "next/image";
import {Landing , Explore} from "@/views/Home";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400' , '500' , '600' , '700' , '800']
})

export const metadata = {
  title: "Collective UI - A UI/UX portfolio by Sumit Mehra",
  description: "A one stop portfolio to check by small ui/ux based projects",
};

export default function Home() {
  return (
    <section className={`bg-[#f3b9ae] pb-[1rem] ${poppins.className}`}>
      <Landing />
      <Explore/>
    </section>
  );
}
