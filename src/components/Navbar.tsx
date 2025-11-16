import { navItems } from "@/lib/constants"
import NavItem from "./NavItem"
import Logo from "./Logo"
import NotificationPanel from "./NotificationPanel"

const Navbar = () => {
    return (
        <>
            <nav className=" items-center w-full justify-between px-3 min-h-[90px] border border-custom-border bg-white hidden lg:flex">
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

            <nav className="flex items-center w-full justify-between px-3 h-[62px]  bg-white lg:hidden">
                <h1 className=" font-medium text-[20px] text-black">Home</h1>
                <NotificationPanel />
            </nav>
        </>
    )
}

export default Navbar