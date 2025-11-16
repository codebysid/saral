import type { RootState } from "@/redux/store"
import { useSelector } from "react-redux"
import Icons from "./Icons"

const Profile = () => {
    const user = useSelector((state: RootState) => state.user)
    return (
        <div className=" flex flex-col justify-center items-center gap-[8px]">
            <img src="/avatar.webp" alt="sample avatar" />
            <h1
                className=" text-[20px] font-medium text-[#1B2559]">
                {user.name}
            </h1>

            <div className=" flex items-center gap-[8px]">
                <Icons name="emailIcon" />
                <p className=" subHeadline text-[16px]">{user.email}</p>
                <div className=" text-subdued">
                    <Icons name="editPencilIcon" />
                </div>
            </div>
        </div>
    )
}

export default Profile