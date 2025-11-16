import { navItems } from "@/lib/constants"
import NavItem from "./NavItem"

const NavbarMobileBottomPanel = () => {
    return (
        <div className="w-full fixed bottom-0 flex lg:hidden items-center justify-center gap-[32px] bg-white h-[72px]">
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
    )
}

export default NavbarMobileBottomPanel