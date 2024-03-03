import Accordion from "./Accordion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./App.css";

function App() {
  return (
    <>
      <Accordion
        title="Accordion 1"
        icon={<KeyboardArrowDownIcon />}
        name="accordion-group"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </p>
      </Accordion>
      <Accordion
        title="Accordion 2"
        icon={<KeyboardArrowDownIcon />}
        name="accordion-group"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </p>
      </Accordion>
      <Accordion
        title="Accordion 3"
        icon={<KeyboardArrowDownIcon />}
        name="accordion-group"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </p>
      </Accordion>
    </>
  );
}

export default App;
