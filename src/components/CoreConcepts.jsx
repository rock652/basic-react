import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPT } from "../data.js";

export default function () {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPT.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
        {/* <CoreConcept
            title={CORE_CONCEPT[0].title}
            description={CORE_CONCEPT[0].description}
            image={CORE_CONCEPT[0].image}
          />
          <CoreConcept {...CORE_CONCEPT[1]} />
          <CoreConcept {...CORE_CONCEPT[2]} />
          <CoreConcept {...CORE_CONCEPT[3]} /> */}
      </ul>
    </section>
  );
}
