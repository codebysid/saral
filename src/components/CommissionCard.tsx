import Icons from "./Icons"
import Logo from "./Logo"

const CommissionCard = () => {
    return (
        <div className=" w-[335px] relative">
            <img
                src="/card-bg.png"
                className=" top-0 left-0 w-full"
                alt="card bg" />

            <div className=" absolute w-full px-6 flex flex-col gap-10 top-6">
                <div className=" flex items-center justify-between">
                    <div className=" flex flex-col">
                        <span className=" text-[14px] text-[#EEEEEE]">Current Balance</span>
                        <span className=" font-bold text-[31.55px]">$28.75</span>
                    </div>
                    <Icons name="chipIcon" />
                </div>

                <div className="flex justify-between items-center">
                    <div className=" flex flex-col">
                        <span className=" text-[9.18px] text-[#EEEEEE]">Card Holder</span>
                        <span className=" text-[14px] font-medium">JEN NELSON</span>
                    </div>
                    <Logo variant="sm" className=" text-white text-[15.42px] self-end" />
                </div>
            </div>
        </div>
    )
}

export default CommissionCard