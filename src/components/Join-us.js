import React from "react";
import JoinImg from "../images/join-us.svg";
import { Link } from "react-router-dom";

const JoinUs = () => {
  return (
    <div className="py-20 bg-blue our-philosophy">
      <div className="join-us-container">
        <img
          src={JoinImg}
          alt="to-join-us"
          className="justify-self-center self-center lg:block justify-self-start"
        />
        <div>
          <h1 className="text-4xl md:text-h1 text-dk-gray mb-4">To join us</h1>
          <div>
            <div className="text-dk-gray mb-14 flex">
              <h3 className="join-us-no">1</h3>
              <div>
                <h3 className="text-2xl md:text-h3 mb-4">Request an Invite</h3>
                <p className="text-p">
                  We are a strictly by-invitation community of Muslims
                  <br className="hidden lg:block" /> creating halal wealth
                  through investment.
                </p>
              </div>
            </div>

            <div className="text-dk-gray mb-14 flex">
              <h3 className="join-us-no">2</h3>
              <div>
                <h3 className="text-2xl md:text-h3 mb-4">Fund your account</h3>
                <p className="text-p">
                  Members make monthly contribution to a general pool
                  <br className="hidden lg:block" /> for onward investment.
                </p>
              </div>
            </div>

            <div className="text-dk-gray mb-14 flex">
              <h3 className="join-us-no">3</h3>
              <div>
                <h3 className="text-2xl md:text-h3 mb-4">
                  Enjoy membership benefit
                </h3>
                <p className="text-p">
                  Members benefit from well-managed investments, access to
                  exclusive <br className="hidden lg:block" /> wealth-building
                  opportunities, and membership of a community of professionals.
                </p>
              </div>
            </div>

            <Link
              to="/"
              className="bg-dk-gray rounded text-dk-blue py-3 ml-5 px-4 lg:py-4 lg:px-12 text-h5"
            >
              Learn more about our philosophy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
