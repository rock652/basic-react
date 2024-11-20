import { useState } from "react";

import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function () {
  const [selectedButton, setSelectedButton] = useState("");

  function handleSelect(selectedButton) {
    //selectedButton => 'components, 'jsx', 'props', 'state'
    setSelectedButton(selectedButton);
    console.log(selectedButton);
  }

  let tabContent = <p>Please select a topic...</p>;

  if (selectedButton) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedButton].title}</h3>
        <p>{EXAMPLES[selectedButton].description}</p>
        <pre>
          <code>{EXAMPLES[selectedButton].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedButton === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedButton === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              Jsx
            </TabButton>
            <TabButton
              isSelected={selectedButton === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedButton === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      ></Tabs>
      {tabContent}
    </Section>
  );
}
