import { ReactComponent as SunIcon } from "../assets/sun.svg";

export default function Header(props) {
  return (
    <div className="header">
      <h1 className="text-heading">Board Title</h1>
      <input type="text" className="header--search" placeholder="Search..." />
      <div className="header--btns">
        <button className="btn header--btn">
          <SunIcon className="header--theme-icon" />
        </button>
        <button className="btn header--btn">AC</button>
      </div>
    </div>
  );
}
