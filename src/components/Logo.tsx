import Icons from "./Icons"

interface ILogo {
    className?: string,
    variant?: "sm" | "lg"
}

const Logo = ({ className, variant = "lg" }: ILogo) => {
    return (
        <div className={`flex items-center cursor-pointer ${className}`}>
            {
                variant === "sm" ? <div>
                    <div className=" hidden lg:block">
                        <Icons name="smallLogo" />
                    </div>
                    <div className=" lg:hidden">
                        <Icons name="logoXtraSmall" />
                    </div>
                </div>
                    : <Icons name="logo" />
            }
            <h1 className=' font-syne font-bold uppercase'>SARAL</h1>
        </div>
    )
}

export default Logo