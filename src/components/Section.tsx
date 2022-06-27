import React from "react";

type SectionProps = {
  Icon: React.ElementType;
  title: string;
  color: string;
  selected?: Boolean;
};

const Section: React.FC<SectionProps> = ({ Icon, title, color, selected }) => {
  return (
    <div
      className={`flex items-center border-b-2 p-4 min-w-[200px] cursor-pointer text-gray-600 border-0 hover:bg-gray-300 hover:border-[3px] ${
        selected && "bg-gray-300 rounded"
      }`}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`,
      }}
    >
      <Icon />
      <h4 className="text-sm ml-4">{title}</h4>
    </div>
  );
};
export default Section;
