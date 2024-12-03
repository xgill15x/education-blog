import React from "react";
import ReproductionImage1 from "../images/reproduction1.jpg";

const Reproduction = () => {
  return (
    <section
      id="reproduction"
      className="min-h-screen w-full bg-gray-100 px-6 py-12 text-center md:text-left"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-teal-700 mb-8">
          Social Reproduction
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              placerat est et odio feugiat, ut fringilla sem facilisis. Aliquam
              erat volutpat. Nulla facilisi. Vivamus ac venenatis lectus. Proin
              vehicula risus eget libero pretium, id euismod velit eleifend.
              Curabitur et ipsum id nulla ullamcorper luctus id quis mi.
            </p>
          </div>
          <div>
            <img
              src={ReproductionImage1}
              alt="Reproduction concept"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Second Block: Image on Left, Text on Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-last md:order-first">
            <img
              src={ReproductionImage1}
              alt="Ideas being shared"
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Nulla convallis nisl eget nisi laoreet, ac
              ultricies lectus suscipit. Integer id urna vel mauris posuere
              tempor id sed augue. Cras posuere turpis nec ligula tempor
              malesuada. Fusce suscipit, libero a dignissim consequat, tortor
              metus convallis risus, nec fringilla urna lorem non justo.
            </p>
          </div>
        </div>

        {/* Third Block: Text on Left, Image on Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Sed at turpis ornare, tincidunt lacus ut, viverra nisi. Ut
              eleifend, nulla vel tempus scelerisque, est lacus molestie risus,
              nec ultricies libero turpis vel ligula. Nunc volutpat feugiat
              purus, nec facilisis ante tempus non. Quisque bibendum, arcu a
              elementum viverra, tortor nisl hendrerit est, et pretium orci
              sapien sit amet velit.
            </p>
          </div>
          <div>
            <img
              src={ReproductionImage1}
              alt="Team working together"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reproduction;
