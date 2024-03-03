import { ReactNode } from "react";
import "./Accordion.css";

interface AccordionProps {
  title: string;
  children: ReactNode | string;
  icon: ReactNode | string;
  name?: string;
}

const Accordion = ({ title, children, icon, name }: AccordionProps) => {
  return (
    <>
      <details name={name}>
        <summary>
          {title} <span className="arrow">{icon}</span>{" "}
        </summary>
        <div className="content">{children}</div>
      </details>
    </>
  );
};

export default Accordion;
