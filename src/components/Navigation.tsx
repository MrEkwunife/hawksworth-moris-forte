export default function Navigation() {
  return (
    <nav className="flex flex-col w-[8.5rem] justify-center gap-2 text-white text-sm lg:w-[12rem] lg:text-xl lg:gap-3">
      <button className="bg-[#777] flex justify-between gap-2 p-2 rounded-lg cursor-pointer">
        <span>About</span>
        <span className="text-sm">[01]</span>
      </button>
      <button className="bg-[#777] flex justify-between gap-2 p-2 rounded-lg cursor-pointer">
        <span>Services</span>
        <span className="text-sm">[02]</span>
      </button>
      <button className="bg-[#777] flex justify-between gap-2 p-2 rounded-lg cursor-pointer">
        <span>Profile</span>
        <span className="text-sm">[03]</span>
      </button>
      <button className="bg-[#777] flex justify-between gap-2 p-2 rounded-lg cursor-pointer">
        <span>Contact</span>
        <span className="text-sm">[04]</span>
      </button>
    </nav>
  );
}
