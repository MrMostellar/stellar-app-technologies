import ULBlock from "./ULBlock";
import { ULProps } from "../data/CustomizeFooterData";

const linkGenerator = (data: any, Component: any) => {
  const newComponent = [];
  for (let item of data) {
    newComponent.push(<Component key={item.id} {...data[item.id]} />);
  }
  return newComponent;
};

export default function Footer() {
  return (
    //column of two for the UL items and the copyright
    <div className="flex flex-col text-center absolute min-w-[100%] min-h-[100%] py-1 bg-black">
      {/*top half of column is a row of columns*/}
      <div className="flex flex-1 flex-row p-1 bg-red-300">
        {linkGenerator(ULProps, ULBlock)}
      </div>

      {/*bottom half of column is the copywrite*/}
      <div className="flex flex-1 flex-col p-1 bg-yellow-300">
        {/*form to get an email list going */}
        <form className="flex flex-col text-left">
          <label>Let's keep in touch!</label>

          {/*div to style the text field*/}
          <div className="flex p-1 border-[0.0625rem] border-black rounded-[0.6rem] bg-white">
            <input
              className="flex-[6] p-1 outline-none"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <input
              className="flex-1 bg-blue-500 border-[0.0625rem] border-black rounded-[0.6rem]"
              type="button"
              id="submit"
              name="submit"
              value="Submit"
            />
          </div>
        </form>

        {/*spacer for separating the elements*/}
        <span className="border-[0.1rem] mt-2 border-black m-1"></span>

        {/*copyright line*/}
        <h1>&copy; 2024-2025 Stellar App Technologies LLC</h1>

        {/*privacy policy and etc. links*/}
        <div className="flex flex-row bg-gray-200">
          <h3 className="flex-1">Link</h3>
          <h3 className="flex-1">Link</h3>
          <h3 className="flex-1">Link</h3>
        </div>
      </div>
    </div>
  );
}
