import React, { useState } from "react";
import { faqData } from "../data/FaqData";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

const Faq = () => {
  const [showFaq, setShowFaq] = useState(false);

  const toggle = (index) => {
    if (showFaq === index) {
      return setShowFaq(null);
    }

    setShowFaq(index);
  };

  return (
    <div className="pt-64 pb-20 bg-gray text-blue relative faq">
      <div className="container">
        <h3 className="text-2xl md:text-h3 text-center mb-24">
          Frequently Asked Question
        </h3>

        <div>
          {faqData.map((item, index) => {
            return (
              <div>
                <div
                  key={index}
                  onClick={() => toggle(index)}
                  className={
                    (showFaq === index ? "border-none" : "border-b") +
                    " flex items-center gap-4 py-7  border-blue"
                  }
                >
                  <h3
                    onClick={() => toggle(index)}
                    className="text-xl sm:text-2xl md:text-h3"
                  >
                    {item.title}
                  </h3>
                  <span className="cursor-pointer">
                    {showFaq === index ? (
                      <MdOutlineArrowDropUp className="w-6 h-6" />
                    ) : (
                      <MdOutlineArrowDropDown className="w-6 h-6" />
                    )}
                  </span>
                </div>

                {showFaq === index ? (
                  <div>
                    <h4 className="text-xl md:text-h4 mb-12 w-9/12">
                      {item.desc}
                    </h4>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
