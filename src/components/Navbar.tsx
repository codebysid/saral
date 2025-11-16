import { navItems } from "@/lib/constants"
import NavItem from "./NavItem"
import Logo from "./Logo"
import NotificationPanel from "./NotificationPanel"

const Navbar = () => {
    return (
        <nav className=" flex items-center w-full justify-between px-3 min-h-[90px] border border-custom-border">
            <Logo className=" text-primary text-[25.12px]" />
            <div className=" flex items-center gap-10">
                {
                    navItems.map(({ icon, id, title, link }) => {
                        return <NavItem
                            key={id}
                            icon={icon}
                            title={title}
                            route={link}
                        />
                    })
                }
            </div>

            <NotificationPanel />
        </nav>
    )
}

export default Navbar