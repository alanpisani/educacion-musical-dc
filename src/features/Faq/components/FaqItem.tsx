import { AnimatePresence, motion } from "framer-motion";
import type { faqType } from "../types";
import "./faqItem.css";

interface Props {
  item: faqType;
  isOpen: boolean;
  toggle: () => void;
}

export default function FaqItem({ item, isOpen, toggle }: Props) {
  return (
    <div className="faq-item">
      <button
        className={isOpen ? "clicked" : ""}
        onClick={toggle}
      >
        {item.question}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: "hidden" }}
          >
            <p>{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}