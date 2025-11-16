import CommissionCard from "./CommissionCard"
import Icons from "./Icons"

const CommissionPanel = () => {
    return (
        <div className=" text-white w-[470px] bg-white relative flex flex-col gap-6 justify-center items-center px-6 py-6">
            <div className=" flex items-center justify-between w-full">
                <span className=" font-medium text-[18px] text-[#404040]">My Commission</span>
                <span className=" text-[14px] text-subdued">20% Commission</span>
            </div>

            <CommissionCard />

            <div className="  w-full relative text-[16px] border border-custom-border rounded-[4px] p-2">
                <div className=" absolute flex items-center gap-2 top-1/2 -translate-y-1/2 left-2">
                    <Icons name="emailTIcon" />
                    <span className="text-subdued">
                        Payment Email:
                    </span>
                </div>
                <input className="w-full text-[#212121] pl-[143px] pr-[30px] border-none outline-none " />
                <div className=" absolute right-2 top-1/2 -translate-y-1/2">
                    <Icons name="editPencilIcon" />
                </div>
            </div>
        </div>
    )
}

export default CommissionPanel