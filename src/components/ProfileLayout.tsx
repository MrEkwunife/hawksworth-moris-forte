import Profile from "./Profile";

export default function ProfileLayout() {
  return (
    <section
      className="py-20 px-4 md:px-8 lg:px-16 lg:py-50"
      style={{ backgroundColor: "#eae7db" }}
    >
      <div className="max-w-[115rem] mx-auto mb-12">
        <span className="text-red-400 text-lg md:text-xl font-medium block mb-2">
          [Profile]
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Meet The Team
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mx-auto">
        <Profile
          name="Rich Boma"
          about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fuga facilis repudiandae corrupti quisquam amet"
          tag="CEO"
          className="h-full"
        />

        <Profile
          name="Ugo Modum"
          about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fuga facilis repudiandae corrupti quisquam amet"
          tag="Brainiac"
          className="h-full"
        />

        <Profile
          name="Chidinmma Modum"
          about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fuga facilis repudiandae corrupti quisquam amet"
          tag="Staff"
          className="h-full"
        />

        <Profile
          name="TK"
          about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fuga facilis repudiandae corrupti quisquam amet"
          tag="Intern"
          className="h-full"
        />
      </div>
    </section>
  );
}
