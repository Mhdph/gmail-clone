import React from "react";

type SideBarOptionProps = {
  Icon: React.ElementType;
  title: string;
  number?: number;
  selected?: Boolean;
};

const SideBarOption: React.FC<SideBarOptionProps> = ({
  Icon,
  title,
  number,
  selected,
}) => {
  return (
    <div
      className={`flex items-center h-10 px-2.5 cursor-pointer text-gray-600 rounded-r-3xl hover:bg-[#e7e7e7] hover:text-[#c04b37] ${
        selected && "bg-[#fcecec] text-[#c04b37]"
      }`}
    >
      <Icon />
      <h3 className=" flex-1 ml-2.5 text-sm font-normal text-gray-600 hover:bg-[#e7e7e7] hover:text-[#c04b37]">
        {title}
      </h3>
      <p className="hidden font-light hover:bg-[#e7e7e7] hover:text-[#c04b37] hover:inline">
        {number}
      </p>
    </div>
  );
};
export default SideBarOption;
