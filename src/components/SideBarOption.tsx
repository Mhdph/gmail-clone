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
    <div className={`sidebaroption ${selected && "sidebaroption--active"}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
};
export default SideBarOption;
