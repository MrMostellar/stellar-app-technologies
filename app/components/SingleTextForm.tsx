export default function SingleTextForm() {
  return (
    <>
      {/*form to get an email list going */}
      <form className="flex flex-col text-left min-w-[50%]">
        <label className="navText p-1 pb-3">Let&#39;s keep in touch!</label>
        {/*div to style the text field*/}
        <div className="flex p-1 border-[0.0625rem] rounded-[0.6rem] bg-[var(--text)]">
          <input
            className="navText flex-[6] p-1 bg-[var(--text)]"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
          <input
            className="navText flex-1 button border-[0.0625rem] rounded-[0.6rem]"
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
