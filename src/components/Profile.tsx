import type { AppDispatch, RootState } from "@/redux/store"
import { useDispatch, useSelector } from "react-redux"
import Icons from "./Icons"
import { useState, type ChangeEvent } from "react"
import { useAutoFocus } from "@/hooks/useAutoFocus"
import { updateEmail } from "@/redux/userSlice"
import { useDebounce } from "@/hooks/useDebounce"

const Profile = () => {
    const user = useSelector((state: RootState) => state.user)
    const [editEmail, setEditEmail] = useState<boolean>(true)
    const inputRef = useAutoFocus(editEmail === false)
    const dispatch = useDispatch<AppDispatch>()
    const debounce = useDebounce(() => setEditEmail(true), 3000)
    const handleEdit = () => setEditEmail(false)

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(updateEmail({
            email: e.target.value
        }))
        debounce()
    }

    return (
        <div className=" flex flex-col justify-center items-center gap-[8px] relative">
            <img src="/circles.webp" className=" absolute -top-5 z-0" alt="sample avatar" />

            <img src="/avatar.webp" className=" w-[92px] lg:w-[130px] h-[92px] lg:h-[130px] rounded-full z-10" alt="sample avatar" />
            <h1
                className="text-[16px] lg:text-[20px] font-medium text-[#101013]">
                {user.name}
            </h1>

            <div className=" flex items-center gap-[8px]">
                <Icons name="emailIcon" />
                <input
                    ref={inputRef}
                    type="text"
                    value={user.email}
                    onChange={handleEmailChange}
                    className="subHeadline text-[14px] lg:text-[16px] outline-0 w-[201px] lg:w-[230px] max-w-[300px]"
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