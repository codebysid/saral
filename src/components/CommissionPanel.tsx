import { useState, type ChangeEvent } from "react"
import CommissionCard from "./CommissionCard"
import Icons from "./Icons"
import { useAutoFocus } from "@/hooks/useAutoFocus"
import { useSelector } from "react-redux"
import type { RootState } from "@/redux/store"

const CommissionPanel = () => {
    const [editEmail, setEditEmail] = useState<boolean>(true)
    const inputRef = useAutoFocus(editEmail === false);
    const userState = useSelector((state: RootState) => state.user)
    const [paymentEmail, setPaymentEmail] = useState<string>(userState.paymentEmail || "N/A")
    const handleEdit = () => setEditEmail(false)

    const handlePaymentEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPaymentEmail(e.target.value)
    }

    return (
        <div className=" text-white bg-white relative flex flex-col gap-6 justify-center items-center p-6 rounded-[8px]">
            <div className=" flex items-center justify-between w-full">
                <span className="headline">My Commission</span>
                <span className=" subHeadline">20% Commission</span>
            </div>

            <CommissionCard />

            <div className="  w-full relative text-[16px] border border-custom-border rounded-[4px] p-2">
                <div className=" absolute flex items-center gap-2 top-1/2 -translate-y-1/2 left-2">
                    <Icons name="emailTIcon" />
                    <span className="text-subdued">
                        Payment Email:
                    </span>
                </div>
                <input
                    ref={inputRef}
                    value={paymentEmail}
                    onChange={handlePaymentEmailChange}
                    className="w-full text-[#212121] pl-[143px] pr-[30px] border-none outline-none "
                    readOnly={editEmail}
                />
                <div
                    className=" absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-primary"
                    onClick={handleEdit}
                >
                    <Icons name="editPencilIcon" />
                </div>
            </div>
        </div>
    )
}

export default CommissionPanel