import { lazy, Suspense, useState } from "react"
import Icons from "./Icons"

const DropdownMenu = lazy(() =>
    import("@/components/ui/dropdown-menu").then((m) => ({
        default: m.DropdownMenu,
    }))
);

const DropdownMenuTrigger = lazy(() =>
    import("@/components/ui/dropdown-menu").then((m) => ({
        default: m.DropdownMenuTrigger,
    }))
);

const DropdownMenuContent = lazy(() =>
    import("@/components/ui/dropdown-menu").then((m) => ({
        default: m.DropdownMenuContent,
    }))
);

const DropdownMenuItem = lazy(() =>
    import("@/components/ui/dropdown-menu").then((m) => ({
        default: m.DropdownMenuItem,
    }))
)
const Calendar = lazy(() =>
    import("@/components/ui/calendar").then((m) => ({
        default: m.Calendar,
    }))
);

const CalendarDropDown = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
        <div>
            <Suspense fallback={null}>
                <DropdownMenu>
                    <DropdownMenuTrigger className=" flex items-center gap-2 py-2 px-2.5 border border-custom-border rounded-lg cursor-pointer">
                        <div className=" flex gap-1 items-center">
                            <Icons name="calendarIcon" />
                            <span className=" font-medium text-[14px] text-[#212121]">
                                {"All Time"}
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
            </Suspense>
        </div>

    )
}

export default CalendarDropDown