import { GoArrowUpRight } from "react-icons/go";

import Courosel from "./Courosel";

export default function About() {
  return (
    <section className="overflow-x-hidden pt-30 pb-12">
      <div className="max-w-[115rem] mx-auto px-4 py-8 md:py-16 flex flex-col gap-6 md:gap-10 lg:gap-16">
        <div className="">
          <span className="text-red-600 text-sm uppercase whitespace-nowrap inline-block mb-2">
            [ABOUT US]
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight lg:pr-80">
            We leverage the experience of our business to advance the commercial
            and creative interests of our clients.
          </h2>
        </div>

        <div className="w-full lg:flex flex-row-reverse gap-8 lg:gap-16">
          <div className="lg:w-1/2 mb-10">
            <Courosel />
          </div>
          <div className="flex flex-col gap-4 md:gap-6 lg:w-1/2 lg:text-xl text-[#555]">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              quasi suscipit nam esse asperiores harum corrupti, laudantium
              deleniti aperiam quod atque sed neque voluptas itaque impedit,
              placeat molestiae, ipsam nisi?
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
              aliquid culpa maxime numquam dolorum cum fugit deleniti voluptatem
              perspiciatis commodi illo tempore beatae minima recusandae
              mollitia debitis, aut corporis accusamus.
            </p>

            <a
              href="#"
              className="border-t-1 border-b-1 mt-12 py-4 flex items-center gap-2"
            >
              <span>Company director</span>
              <GoArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
