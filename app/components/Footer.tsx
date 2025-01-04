import React from "react";

export default function Footer() {
  return (
    //column of two for the UL items and the copyright
    <div className="flex flex-col text-center absolute w-[100%] h-[100%] p-1 bg-black">
      {/*top half of column is a row of columns*/}
      <div className="flex-1 p-1 bg-gray-500">
        <div className="flex flex-row bg-red-300">
          <ul className="flex-1">
            <li className="flex-1 p-1">UL items here</li>
            <li className="flex-1 p-1">UL items here</li>
            <li className="flex-1 p-1">UL items here</li>
          </ul>

          <ul className="flex-1">
            <li className="flex-1 p-1">UL items here</li>
            <li className="flex-1 p-1">UL items here</li>
            <li className="flex-1 p-1">UL items here</li>
          </ul>

          <ul className="flex-1">
            <li className="flex-1 p-1">UL items here</li>
            <li className="flex-1 p-1">UL items here</li>
            <li className="flex-1 p-1">UL items here</li>
          </ul>
        </div>
      </div>

      {/*bottom half of column is the copywrite*/}
      <div className="flex-1 bg-yellow-300">
        <form className="flex flex-col text-left">
          <label>Let's keep in touch!</label>
          <div className="flex border-2">
            <input
              className="flex-[6]"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <input
              className="flex-1"
              type="button"
              id="submit"
              name="submit"
              value="Submit"
            />
          </div>
        </form>
        <h1 className="">&copy; 2025 Stellar App Technologies LLC</h1>

        <div className="flex flex-row bg-gray-200">
          <h3 className="flex-1">Link</h3>
          <h3 className="flex-1">Link</h3>
          <h3 className="flex-1">Link</h3>
        </div>
      </div>
    </div>
  );
}
