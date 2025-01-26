export default function SingleTextForm({ ...props }) {
  return (
    <>
      {/*form to get an email list going */}
      <form className="flex flex-col text-left min-w-[50%]">
        <label className="navText p-1 pb-3">{props.label}</label>
        {/*div to style the text field*/}
        <div className="flex p-1 border-[0.0625rem] rounded-[0.6rem] bg-[var(--text)]">
          <input
            className="navText flex-[6] p-1 bg-[var(--text)] text-[var(--secondary)] outline-none"
            autoFocus={props.autofocus}
            type={props.formType}
            id={props.formType}
            name={props.formType}
            placeholder={props.placeholder}
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
