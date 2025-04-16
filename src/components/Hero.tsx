import { IoIosArrowRoundDown } from "react-icons/io";
import bgImage from "../assets/images/hero-bg.jpg";
import Header from "./Header";

const backgroundStyle = {
  backgroundImage: `linear-gradient(rgb(29, 16, 14, 0.75), rgb(29, 16, 14, 0.75)), url("${bgImage}")`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export default function Hero() {
  return (
    <div style={backgroundStyle}>
      {<Header />}
      <section className="relative h-screen flex items-end justify-center text-center text-white">
        <div>
          <div className="absolute top-2/5 flex flex-col gap-6 sm:right-6 sm:text-xl md:w-xl md:right-32 md:text-2xl lg:right-1/4 lg:top-1/5 lg:w-2xl">
            <p>[Local Time: 11:13 PM, Abuja]</p>
            <p className="flex gap-.5">
              <span className="flex items-center">
                [ {<IoIosArrowRoundDown />}]
              </span>
              <span>
                [Some Descriptions moris fort] Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
              </span>
            </p>
          </div>
          <h1 className="w-full text-[18vw] leading-none font-extrabold tracking-tight mb-16 whitespace-nowrap overflow-hidden text-center md:mb-0">
            Moris Forte
          </h1>
        </div>
      </section>
    </div>
  );
}
