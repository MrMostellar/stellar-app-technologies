export default function SingleTextForm() {
  return (
    <>
      {/*form to get an email list going */}
      <form className="flex flex-col text-left min-w-[50%]">
        <label className="p-1 pb-3">Let&#39;s keep in touch!</label>
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
    </>
  );
}
