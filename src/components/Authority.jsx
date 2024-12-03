import React from "react";
import AuthorityImage1 from "../images/authority1.jpg";

const Authority = () => {
  return (
    <section
      id="authority"
      className="min-h-screen w-full bg-gray-100 px-6 py-12 text-center md:text-left"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-teal-700 mb-8">Authority</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Suspendisse potenti. Praesent sit amet risus non elit
              vehicula tincidunt ut in lectus. Ut fermentum dui nec dolor
              ultricies, at interdum velit eleifend. Integer non nibh ac ligula
              hendrerit posuere. Curabitur pellentesque, arcu a hendrerit
              gravida, nisl eros fringilla ligula, ut feugiat lorem eros nec
              nisi. Morbi suscipit, eros quis egestas pellentesque, metus lorem
              dictum quam, ac pulvinar nunc nunc non nulla.
            </p>
          </div>
          <div>
            <img
              src={AuthorityImage1}
              alt="Authority illustration"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-last md:order-first">
            <img
              src={AuthorityImage1}
              alt="Leadership example"
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Proin sit amet nisi ac odio
              vehicula eleifend sit amet a enim. Phasellus scelerisque dapibus
              nunc, id feugiat lorem tincidunt vel. Ut id neque non elit
              fringilla tincidunt a ut elit. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Cras nec
              mauris non nulla fermentum faucibus.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Sed lacinia tincidunt eros, nec aliquam orci efficitur non. Etiam
              vehicula malesuada sapien, sit amet rhoncus odio scelerisque non.
              Nam mollis magna vitae augue condimentum, et pretium arcu
              bibendum. Suspendisse finibus libero at arcu ullamcorper, eget
              egestas metus luctus. Duis dignissim nunc a libero scelerisque, ac
              porttitor elit pulvinar.
            </p>
          </div>
          <div>
            <img
              src={AuthorityImage1}
              alt="Community leadership"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
