import type { AppDispatch, RootState } from "@/redux/store"
import { useDispatch, useSelector } from "react-redux"
import Icons from "./Icons"
import { useState, type ChangeEvent } from "react"
import { useAutoFocus } from "@/hooks/useAutoFocus"
import { updateEmail } from "@/redux/userSlice"

const Profile = () => {
    const user = useSelector((state: RootState) => state.user)
    const [editEmail, setEditEmail] = useState<boolean>(true)
    const inputRef = useAutoFocus(editEmail === false)
    const dispatch = useDispatch<AppDispatch>()

    const handleEdit = () => setEditEmail(false)

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(updateEmail({
            email: e.target.value
        }))
    }

    return (
        <div className=" flex flex-col justify-center items-center gap-[8px]">
            <img src="/avatar.webp" alt="sample avatar" />
            <h1
                className=" text-[20px] font-medium text-[#1B2559]">
                {user.name}
            </h1>

            <div className=" flex items-center gap-[8px]">
                <Icons name="emailIcon" />
                <input
                    ref={inputRef}
                    type="text"
                    value={user.email}
                    onChange={handleEmailChange}
                    className="subHeadline text-[16px] outline-0 min-w-[205px] max-w-[300px] text-ellipsis"
                    readOnly={editEmail}
                />
                <div
                    onClick={handleEdit}
                    className=" text-subdued cursor-pointer">
                    <Icons name="editPencilIcon" />
                </div>
            </div>
        </div>
    )
}

export default Profile