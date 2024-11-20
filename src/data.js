import componentImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

export const CORE_CONCEPT = [
  {
    image: componentImg,
    title: "component",
    description: "The core UI building Block-compose the user interface by  ME",
  },
  {
    image: jsxImg,
    title: "JSX",
    description: "The core UI building Block-compose the user interface by  ME",
  },
  {
    image: propsImg,
    title: "propsimg",
    description: "The core UI building Block-compose the user interface by  ME",
  },
  {
    image: stateImg,
    title: "StateImg",
    description: "The core UI building Block-compose the user interface by  ME",
  },
];

export const EXAMPLES = {
  components: {
    title: "Components",
    description: "Components are in the building of react applications.",
    code: `function welcome() {
    return <h1>hello world</h1>}`,
  },

  jsx: {
    title: "Jsx",
    description: "jSX  are in the building of react applications.",
    code: `function welcome() {
    return <h1>hello IN THE JSX  WORLD</h1>}`,
  },

  props: {
    title: "Props",
    description: "props  are in the building of react applications.",
    code: `function welcome() {
    return <h1>hello IN THE props  WORLD</h1>}`,
  },
  state: {
    title: "State",
    description: "state  are in the building of react applications.",
    code: `function welcome() {
    return <h1>hello IN THE state  WORLD</h1>}`,
  },
};
