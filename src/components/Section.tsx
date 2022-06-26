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
      className={`section ${selected && "section--selected"}`}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`,
      }}
    >
      <Icon />
      <h4>{title}</h4>
    </div>
  );
};
export default Section;
