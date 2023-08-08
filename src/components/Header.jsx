import { BsTwitter } from "react-icons/bs";
import { ImStatsBars } from "react-icons/im";
import { BsQuestionLg } from "react-icons/bs";

function Header() {
  return (
    <header>
      <div className="Header-logo">Fill-M</div>
      <div className="Header-right-items">
        <BsTwitter className="Header-right-items-icon" />
        <ImStatsBars className="Header-right-items-icon" />
        <BsQuestionLg className="Header-right-items-icon" />
      </div>
    </header>
  );
}

export default Header;
