import { Link } from "react-router-dom";
import useScrollPosition from "../../hooks/useScrollPosition";
import classes from "./Navigation.module.css";

const Navigation = ({ size }) => {
  const scrollPostion = useScrollPosition();

  // 60 => 48
  return (
    <header
      className={`${scrollPostion !== 0 && `${classes.scrolling}`} ${
        classes.header
      }`}
    >
      <Link to="/">
        <img
          hidden={size.width >= 1280 && true}
          className={classes.logo}
          src="/Logo.png"
          alt="nav-logo"
          width={17.94}
          height={24}
        />
      </Link>

      {/* Mobile Nav */}
      <nav hidden={size.width >= 1280 && true} className={classes.nav}>
        <ul>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#work">work</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </nav>

      {/* Desktop Nav */}
      <nav hidden={size.width < 1280 && true} className={classes.desktop_nav}>
        <ul>
          <li>
            <a href="#about">about</a>
          </li>

          {/* Desktop logo */}
          <Link to="/">
            <img
              className={classes.logo}
              src="/Logo.png"
              alt="nav-logo"
              width={23.92}
              height={32}
            />
          </Link>

          <div className={classes.desktop_work_contact_group}>
            <li>
              <a href="#work">work</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
