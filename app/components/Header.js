import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-center">
        <ul className="flex gap-4 text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/profile/logout">Logout</Link>
          </li>
          <li>
            <Link href="/profile/settings">Settings</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
