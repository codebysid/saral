import type { IconName } from "@/lib/types"
import Icons from "./Icons"

interface IMetricCard {
    count: number,
    name: string
}

const iconMap: Record<string, { sicon: string, icon: string, style: string }> = {
    visitors: {
        icon: "metricVisitorIcon",
        sicon: "metricVisitorIconSmall",
        style: "bg-[#FEF2F2]"
    },
    posts: {
        icon: "metricPostsIcon",
        sicon: "metricPostsIconSmall",
        style: "bg-[#EFF6FF]"
    },
    revenue: {
        icon: "metricRevenueIcon",
        sicon: "metricRevenueIconSmall",
        style: "bg-[#FFF7ED]"
    },
    orders: {
        icon: "metricOrdersIcon",
        sicon: "metricOrdersIconSmall",
        style: "bg-[#FEFCE8]"
    }
}

const MetricCard = ({ count, name: title }: IMetricCard) => {
    const currentIcon = iconMap[title.toLowerCase()]

    return (
        <div className=" flex gap-2 p-[16px] border border-custom-border rounded-[8px]">
            <div className={`${currentIcon.style} w-[37.5px] h-[37.5px] lg:h-[54px] lg:w-[54px] rounded-full flex justify-center items-center`}>
                <div className="hidden lg:block">
                    <Icons name={currentIcon.icon as IconName} />
                </div>

                <div className="lg:hidden">
                    <Icons name={currentIcon.sicon as IconName} />
                </div>
            </div>

            <div className=" flex flex-col">
                <span className="text-[16px] lg:text-[22px] font-medium text-[#202224]">
                    {count}
                </span>
                <span className="subHeadline text-[14px] lg:text-[16px]">{title}</span>
            </div>
        </div>
    )
}

export default MetricCard