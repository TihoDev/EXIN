import BaseIcon from "./icon/BaseIcon";

function Navbar() {
  return (
    <div className="bg-section-background w-full h-[90px] rounded-b-[81px] shadow-2xl flex justify-between items-center px-10">
      <BaseIcon id="Grow" size={21} disableGradient={true} fillColor="#000" />
      <nav className="w-[171px] h-[556px] px-7 bg-gradient-to-bl from-[#FEF1FD] to-[#FFFFFF] flex flex-col space-y-5 absolute top-0 right-0 font-semibold text-[10px] rounded-bl-[50px]">
        {/* <span className="text-left mt-5">+</span> */}
        <BaseIcon className="text-left mt-5" id="Close" disableGradient={true} fillColor="#3E243C" size={50}/>
        <ul className="space-y-4">
          <li>محصولات ما</li>
          <li>صفحه اصلی</li>
          <li>درباره ما</li>
          <li>تماس با ما</li>
        </ul>
      </nav>
      <BaseIcon
        id="ExinIcon2"
        disableGradient={true}
        size={35}
        fillColor="#3E243C"
      />
    </div>
  );
}

export default Navbar;
