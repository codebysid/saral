import Icons from "./Icons"

interface ILogo {
    className?: string,
    variant?: "sm" | "lg"
}

const Logo = ({ className, variant = "lg" }: ILogo) => {
    return (
        <div className={`flex items-center cursor-pointer ${className}`}>
            {
                variant === "sm" ? <Icons name="smallLogo" />
                    : <Icons name="logo" />
            }
            <h1 className=' font-syne font-bold uppercase'>SARAL</h1>
        </div>
    )
}

export default Logo