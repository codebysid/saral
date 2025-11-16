import Metrics from "./Metrics"
import Profile from "./Profile"

const ProfilePanel = () => {
    return (
        <div className=" w-full bg-white rounded-[8px] flex flex-col gap-[32px] p-6">
            <Profile />
            <Metrics />
        </div>
    )
}

export default ProfilePanel