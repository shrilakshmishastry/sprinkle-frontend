import { Link, useLocation } from "react-router-dom";
import { btnStyle } from "../../../config/BtnConfig/btnStyle";
import classNames from "classnames";

const DropDownGenerator = ({pathName,name}) => {
    const  active = btnStyle.activeDropDown;
    const inActive = btnStyle.inactiveDropDown;
    const location = useLocation();

    let dropDown = classNames({
        [`${active}`]: location === pathName,
        [`${inActive}`] : location !== pathName
    });

    return (
        <li>
            <Link to={pathName} className={dropDown}>
                {name}
            </Link>
        </li>
    );
}
export default DropDownGenerator;