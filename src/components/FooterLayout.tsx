import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white py-20">
      <div className="max-w-[115rem] mx-auto pl-4 md:flex md:justify-between md:pr-4">
        <div className="mb-18">
          <span className="text-sm uppercase whitespace-nowrap inline-block mb-4">
            [Contact us]
          </span>
          <h3 className="text-5xl mb-4 lg:text-6xl lg:mb-8">
            Materilize <br />
            your vision
          </h3>
          <a
            href="#"
            className="flex items-center gap-1 text-xl border-b max-w-fit pb-0.5 lg:text-2xl lg:gap-1.5"
          >
            <MdOutlineSubdirectoryArrowRight />
            <span>contact@morisforte.com</span>
          </a>
        </div>

        <div className="lg:mt-12">
          <span className="mb-4 block text-[#888] capitalize text-md lg:text-xl">
            ADDRESS
          </span>
          <div className="flex flex-col gap-6 text-md lg:text-xl">
            <p className="flex flex-col gap-1 ">
              <span>
                Melbourne <br /> 80 Market Street, South Melbourne, 3205
              </span>{" "}
              <span>Tel: 03 9125 8522</span>
            </p>

            <p className="flex flex-col gap-1">
              <span>
                Melbourne <br /> 80 Market Street, South Melbourne, 3205
              </span>{" "}
              <span>Tel: 03 9125 8522</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
