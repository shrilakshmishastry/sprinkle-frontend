import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { btnStyle } from "../../../config/BtnConfig/btnStyle";

const LinkGenerator = ({path,name,handleClick}) => {
    let location = useLocation().pathname;
    let active = btnStyle.activeStyle;
    let inActive = btnStyle.inactiveStyle;

    var btnClass = classNames({
        [`${active}`]: location === path,
        [`${inActive}`]: location !== path
    });

    return (
        <li key={path} className="nav-item" onClick={handleClick}>
            <Link to={path} className={btnClass}>
                {name}
            </Link>
        </li>
    );
}
export default LinkGenerator;