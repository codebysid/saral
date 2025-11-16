import CalendarDropDown from "./CalendarDropDown"
import Icons from "./Icons"

const NotificationPanel = () => {
    return (
        <div className=" flex items-center gap-6">
            <CalendarDropDown />
            <Icons name="notificationBellIcon" />
            <img src="/sample-profile-picture.webp" alt="sample profile pic" />
        </div>
    )
}

export default NotificationPanel