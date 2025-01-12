import React from "react";

const Footer = () => {
  return (
    <footer className="main bg-red-600 text-white border-t-2 border-red-600">
      <div className="container flex items-center justify-between py-8">
        <div className="font-semibold text-lg">
          <div className="flex items-center pb-2">
            {/* <Image src="/logo.png" alt="footer logo" height={80} width={80} /> */}
            <p className="underline decoration-yellow-400 text-2xl font-semibold underline-offset-4">Braintree & Distric Athletic Club</p>
          </div>
          <p className="">
            Braintree Leisure Centre
            <br /> Panfield Lane <br />
            Braintree
            <br /> Essex <br />
            CM7 1FF
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
