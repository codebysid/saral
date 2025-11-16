import CalendarDropDown from "./CalendarDropDown"
import Icons from "./Icons"

const NotificationPanel = () => {
    return (
        <div className=" flex items-center gap-[16px] lg:gap-6">
            <div className=" flex items-center gap-[16px] lg:gap-6 flex-row-reverse lg:flex-row">
                <CalendarDropDown />
                <Icons name="notificationBellIcon" />
            </div>
            <img src="/sample-profile-picture.webp"
                className="w-[24px] h-[24px] lg:w-[36px] lg:h-[36px]"
                alt="sample profile pic" />
        </div>
    )
}

export default NotificationPanel