import "../../src/Footer.css";

const Footer = () => {
  return (
    <footer className="w-full bg-[#141B24] p-2">
      <main className="w-full ">
        <div className="min-w-full flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start md:px-40 md:p-5 sm:grid sm:grid-cols-2 md:flex">
          <div className="flex flex-col justify-center items-center  ">
            <h2>Get to know us</h2>
            <ul className="flex flex-col justify-center items-center">
              <li>
                <a href="\">Careers</a>
              </li>
              <li>
                <a href="\">Blog</a>
              </li>
              <li>
                <a href="\">About Amazon</a>
              </li>
              <li>
                <a href="\">Investor relations</a>
              </li>
              <li>
                <a href="\">Amazon Devices</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <h2>Make Money with us</h2>
            <ul className="flex flex-col justify-center items-center">
              <li>
                <a href="\">Sell products on Amazon</a>
              </li>
              <li>
                <a href="\">Sell on Amazon Business</a>
              </li>
              <li>
                <a href="\">Sell Apps on Amazon</a>
              </li>
              <li>
                <a href="\">Become Affiliate</a>
              </li>
              <li>
                <a href="\">Advertise Your products</a>
              </li>
              <li>
                <a href="\">Self-Publish with us</a>
              </li>
              <li>
                <a href="\">Host an Amazon HUb</a>
              </li>
              <li>
                <a href="\">See more</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <h2>Amazon Payment Products</h2>
            <ul className="flex flex-col justify-center items-center">
              <li>
                <a href="\">Amazon Business card</a>
              </li>
              <li>
                <a href="\">Shop with Points</a>
              </li>
              <li>
                <a href="\">Reload you balance</a>
              </li>
              <li>
                <a href="\">Amazon Currency Converter</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <h2>Let us help you</h2>
            <ul className="flex flex-col justify-center items-center">
              <li>
                <a href="\">Amazon COVID 19</a>
              </li>
              <li>
                <a href="\">Your account</a>
              </li>
              <li>
                <a href="\">Your Orders</a>
              </li>
              <li>
                <a href="\">Shipping rates</a>
              </li>
              <li>
                <a href="\">see more</a>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <div className="flex gap-3 justify-center p-3 md:gap-16 border-t border-gray-500">
        <div>
          <figure className="flex items-center">
            <img src="Amazon1.jpg" alt="logo" className="h-8 " />
            <figcaption className="font-bold ">Amazon </figcaption>
          </figure>
        </div>

        <button className="p-1 text-[.7rem] border rounded-sm md:w-[10%]">
          ⨁English
        </button>
        <button className="p-1 text-[.7rem] border rounded-sm md:w-[10%]">
          $ USD-Dollar
        </button>
        <button className="p-1 text-[.7rem] border rounded-sm md:w-[10%]">
          United states
        </button>
      </div>
    </footer>
  );
};

export default Footer;
