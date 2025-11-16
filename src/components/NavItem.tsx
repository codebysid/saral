import type { IconName } from "@/lib/types"
import Icons from "./Icons"
import { NavLink } from "react-router"

interface INavItems {
    title: string,
    icon: string,
    route: string
}

const NavItem = ({ icon, title, route }: INavItems) => {
    return (
        <NavLink
            to={route}
            className={({ isActive }) =>
                isActive ? " text-primary hover:text-primary" : " text-subdued"
            }
        >
            <div className="flex flex-col items-center gap-1 hover:text-subdued/60 transition-all duration-100">
                <Icons name={icon as IconName} />
                <span className=" hidden lg:inline text-[14px] text-center font-medium">{title}</span>
            </div>
        </NavLink>
    )
}

export default NavItem