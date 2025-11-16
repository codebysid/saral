import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"
import Icons from "./Icons"

const EarningsPanel = () => {
    return (
        <div className=" w-full bg-white rounded-[8px] flex flex-col gap-[32px] p-6">

            <div className=" flex items-start justify-between">
                <div>
                    <p className="headline flex items-center gap-1">
                        <span>
                            Potential Earnings
                        </span>
                        <Icons name="infoIcon" />
                    </p>
                    <span className=" subHeadline">How much you might earn wih more posts!</span>
                </div>

                <div className=" border-b border-custom-border w-[10%]">
                    <span className=" font-medium text-[22px] text-custom-disabled flex items-center justify-center gap-1">
                        <span>$</span>
                        <span>0</span>
                    </span>
                </div>
            </div>

            <div className=" w-full space-y-2">
                <div className=" flex items-center justify-between text-[14px] font-medium text-subdued">
                    <span>1 Post</span>
                    <span>15 Posts</span>
                </div>
                <Slider
                    defaultValue={[50]}
                    max={100}
                    step={1}
                    className={cn("w-[100%]")}
                />
            </div>
        </div>
    )
}

export default EarningsPanel