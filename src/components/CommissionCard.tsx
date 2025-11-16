import { useSelector } from "react-redux"
import Icons from "./Icons"
import Logo from "./Logo"
import type { RootState } from "@/redux/store"

const CommissionCard = () => {
    const userState = useSelector((state: RootState) => state.user)

    return (
        <div className="w-[284px] lg:w-[335px] relative">
            <img
                src="/card-bg.avif"
                className=" top-0 left-0 w-[335px] h-[197px] object-cover object-center rounded-[16px]"
                alt="card bg"
                fetchPriority="high"
            />

            <div className=" absolute w-full px-6 flex flex-col gap-10 top-1/2 -translate-y-1/2">
                <div className=" flex items-center justify-between">
                    <div className=" flex flex-col">
                        <span className=" text-[14px] text-[#EEEEEE]">Current Balance</span>
                        <span className=" font-bold text-[22px] lg:text-[31.55px] font-lato">${userState.currentBalance}</span>
                    </div>
                    <div className=" hidden lg:block">
                        <Icons name="chipIcon" />
                    </div>
                    <div className="lg:hidden">
                        <Icons name="chipIconSmall" />
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div className=" flex flex-col">
                        <span className=" text-[9.18px] text-[#EEEEEE]">Card Holder</span>
                        <span className=" text-[10px] lg:text-[14px] font-medium uppercase">{userState.name}</span>
                    </div>
                    <Logo variant="sm" className=" text-white text-[10.7px] lg:text-[15.42px] self-end" />
                </div>
            </div>
        </div>
    )
}

export default CommissionCard