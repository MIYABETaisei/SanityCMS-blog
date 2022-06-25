import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="shadow-md shadow-black-500/40">
      <div className="flex justify-between p-5 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Link href="/">
            <a className="pl-5 pr-10">
              <img
                className="w-30 object-contain"
                src="/logo.png"
                alt="otacle"
              />
            </a>
          </Link>
          <div className="hidden md:inline-flex items-center space-x-5">
            <h3>About</h3>
            <h3>Contact</h3>
            <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">
              Follow
            </h3>
          </div>
        </div>
        <div className="flex items-center space-x-5 text-green-600">
          <h3>Sign In</h3>
          <h3 className="border px-4 rounded-full border-green-600 py-1">
            Get Started
          </h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
