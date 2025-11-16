import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import Icons from "./Icons"

const CalendarDropDown = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger className=" flex items-center gap-2 py-2 px-2.5 border border-custom-border rounded-lg cursor-pointer">
                    <div className=" flex gap-1 items-center">
                        <Icons name="calendarIcon" />
                        <span className=" font-medium text-[14px] text-[#212121]">
                            {date?.toLocaleDateString() || "All Time"}
                        </span>
                    </div>
                    <Icons name="downArrowIcon" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-lg"
                        />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>

    )
}

export default CalendarDropDown