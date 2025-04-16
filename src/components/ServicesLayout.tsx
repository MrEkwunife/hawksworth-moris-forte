import Service from "./Service";
import img1 from "../assets/images/image-2.jpg";
import img2 from "../assets/images/image-3.jpg";

export default function ServicesLayout() {
  return (
    <section className="max-w-[115rem] mx-auto pb-28">
      <h2 className="text-[22vw] text-center">Services</h2>
      <div className="pl-4 mb-8 lg:mb-16">
        <span className="text-red-600 text-sm uppercase whitespace-nowrap inline-block mb-2">
          [SERVICES OF DISTINCTION]
        </span>
        <p className="md:text-2xl md:pr-56 lg:text-5xl lg:pr-[20rem]">
          We leverage the experience of our business to advance the commercial
          and creative interests of our clients.
        </p>
      </div>

      <div className="flex flex-col gap-8 lg:gap-24">
        <Service
          index="01"
          title="Struct Petroleum"
          image={img1}
          leftFeatures={[
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            "Odio sapiente sed voluptate quis quisquam nihil nostrum adipisicing adipisicing",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          ]}
          rightFeatures={[
            "Odio sapiente sed voluptate quis quisquam nihil nostrum adipisicing adipisicing",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            "Odio sapiente sed voluptate quis quisquam nihil nostrum adipisicing adipisicing",
          ]}
        />

        <Service
          index="02"
          title="Oil Production"
          image={img2}
          leftFeatures={[
            "Professional oil extraction services with modern equipment",
            "Environmentally conscious operational standards",
            "Over 20 years of industry experience",
          ]}
          rightFeatures={[
            "24/7 customer support and maintenance",
            "Certified team of petroleum engineers",
            "Cost-effective solutions for all project sizes",
          ]}
        />
      </div>
    </section>
  );
}
