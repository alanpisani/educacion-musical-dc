import "./Faq.css";

import { faqData } from "./data";
import FaqItem from "./components/FaqItem";
import { useState } from "react";

export default function Faq() {
  const [isActive, setActive] = useState<string | null>(null);

  return (
    <section className="faq-section" id="faq">
      <div className="faq">
        <h2>Preguntas frecuentes</h2>
        <div className="faqs-container">
          {faqData.map((item) => (
            <FaqItem
              key={item.id}
              item={item}
              isOpen={isActive === item.id}
              toggle={() => setActive(isActive === item.id ? null : item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
