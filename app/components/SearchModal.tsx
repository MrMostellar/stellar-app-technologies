"use client";
import SingleTextForm from "./SingleTextForm";
import { FaXmark } from "react-icons/fa6";
import React, { KeyboardEvent } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchModal() {
  const [isModalActive, setIsModalActive] = React.useState(false);

  const handleClick = () => {
    setIsModalActive(true);
  };

  const escapeHandle = () => {
    setIsModalActive(false);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === "Escape") {
      escapeHandle();
    }
  };

  return (
    <>
      {isModalActive ? (
        <section
          onKeyDown={handleKeyDown}
          className="absolute overflow-hidden content-top lg:translate-x-[-75%] translate-x-[-80%] p-10 bg-transparent/90 min-w-[102%] min-h-[100vh]"
        >
          <div className="flex justify-end">
            <button onClick={escapeHandle}>
              <FaXmark />
            </button>
          </div>
          <SingleTextForm
            autofocus={true}
            label={"Search"}
            formType={"text"}
            placeholder={"Search this website"}
          />
        </section>
      ) : (
        <button
          onClick={handleClick}
          className="justify-center items-center flex xs:flex-1 lg:flex-[0.5]"
        >
          <FaSearch size="1.25rem" color="var(--text)" />
        </button>
      )}
    </>
  );
}
