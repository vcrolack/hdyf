import { Link } from "react-router-dom";
import { logo } from "../../assets";
import { IconWrapper } from "../../common/components";
import { menu } from "./menu";
import { useAuth } from "../../common/hooks/auth.hook";

export const Header = () => {
  const { logout } = useAuth();
  return (
    <header className="flex justify-center items-center ">
      <div className=" px-11 flex gap-x-16 bg-color-primary items-center rounded-br-lg rounded-bl-lg shadow-lg">
        <div id="header-logo" className="h-28 w-28">
          <IconWrapper src={logo} alt="Company logo" />
        </div>
        <nav>
          <ul>
            <li className="space-x-6">
              {menu.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="font-bold text-text hover:text-color-secondary"
                >
                  {item.name}
                </Link>
              ))}
            </li>
          </ul>
        </nav>
        <div>
          <button
            className="p-4 rounded-lg hover:bg-color-secondary"
            onClick={logout}
          >
            Log out
          </button>
        </div>
      </div>
    </header>
  );
};
