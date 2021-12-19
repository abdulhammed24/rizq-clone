import React from "react";
import { Link } from "react-router-dom";
import CtaImg from "../images/cta.svg";

const Cta = () => {
  return (
    <div className="bg-yellow pt-20 pb-28 cta relative">
      <div className="w-container-mobile md:w-container-lg grid gap-6 sm:grid-cols-2 items-center my-0 mx-auto">
        <div className="text-blue flex flex-col gap-24">
          <h3 className="text-2xl md:text-h3">
            We are committed to helping Muslims build long-term
            <br className="hidden lg:block" /> wealth without compromising their
            faith.
          </h3>

          <Link to="" className="text-2xl md:text-h3 underline">
            Stay in touch
          </Link>
        </div>

        <img
          src={CtaImg}
          alt="cta-img"
          className="order-first justify-self-center self-center sm:order-last md:justify-self-end relative"
        />
      </div>
    </div>
  );
};

export default Cta;
