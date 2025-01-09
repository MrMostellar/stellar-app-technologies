import React from "react";

export default function SearchModal() {
  return (
    <div className="flex justify-center items-start pt-20 min-w-[100%] min-h-[100%]">
      <search>
        <label>Search</label>
        <input type="search" />
      </search>
    </div>
  );
}
