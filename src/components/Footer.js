import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue text-white py-20 footer relative">
      <div className="container">
        <div className="mb-16">
          <h3 className="text-2xl md:text-h3 mb-3">Who We Are</h3>
          <p className="text-p">
            Rizq is an investment cooperative registered under the name The
            Sustenance Group Multipurpose Cooperative Society Limited with Lagos
            State. Members make monthly contribution which is pooled for
            investment <br className="hidden lg:block" /> in various investment
            vehicles for the benefit of our members. Our investment philosophy
            is to deepen the financial capacity of Muslims, particularly the
            youth. Our funds are well managed by a team of
            <br className="hidden lg:block" /> professionals and in line with
            best practices.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl md:text-h3 mb-3">Disclaimer</h3>
          <p className="text-p">
            Risk is inherent to all investing, and this risk includes the
            possibility of losing your money. We do not and cannot guarantee
            future performance, and historical performance is shared mainly as a
            guide not as a <br className="hidden lg:block" /> guarantee. While
            we will take reasonable precautions to minimise risk, we do not
            assume responsibility for liability for investment results.
          </p>
        </div>

        <p className="text-p">
          ©2020 The Sustenance Group. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
