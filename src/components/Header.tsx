import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="flex justify-between fixed top-0 left-0 w-full px-6 pt-6 text-white z-30">
      <h1 className="font-extrabold text-xl lg:text-2xl text-[#777]">
        MORIS FORTE
      </h1>
      <Navigation />
    </header>
  );
}
