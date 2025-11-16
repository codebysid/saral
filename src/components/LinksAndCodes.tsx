import { useAutoFocus } from "@/hooks/useAutoFocus"
import Icons from "./Icons"
import { useState, type ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { type AppDispatch, type RootState } from "@/redux/store"
import { updateCode } from "@/redux/linksAndCodeSlice"
import { copyToClipboard } from "@/lib/helper"
import { toast } from "react-toastify"

const LinksAndCodes = () => {
    const [editCouponCode, setEditCouponCode] = useState<boolean>(true)
    const inputRef = useAutoFocus(editCouponCode === false)
    const linkAndCode = useSelector((state: RootState) => state.linksAndCode)
    const dispatch = useDispatch<AppDispatch>()

    const handleEdit = () => setEditCouponCode(false)

    const handleCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(updateCode({
            code: e.target.value
        }))
    }

    const handleCopy = async (data: string) => {
        const ok = await copyToClipboard(data)
        if (ok) toast.success("Copied")
        else toast.error("Try again")
    }

    return (
        <div className=" w-full bg-white rounded-[8px]">
            <p className=" headline border-b border-custom-border w-full p-3 lg:p-5">My Links & Codes</p>

            <div className=" flex flex-col gap-[8px] border-b border-custom-border p-3 lg:p-5">
                <span className=" subHeadline">Tracking Link:</span>

                <div className=" flex items-center justify-between p-2 w-full border border-dashed border-primary/20 rounded-[4px]">
                    <span
                        className=" text-primary underline font-firacode font-medium text-[14px] lg:text-[16px]">{linkAndCode.link}
                    </span>

                    <div className=" cursor-pointer" onClick={() => handleCopy(linkAndCode.link)}>
                        <Icons name="copyIcon" />
                    </div>

                </div>
            </div>

            <div className=" flex flex-col gap-[8px] p-3 lg:p-5">
                <span className="subHeadline">Coupon Code</span>

                <div className=" flex items-center gap-2">
                    <div className="flex items-center gap-2 justify-between p-2 w-max border border-dashed border-primary/20 rounded-[4px]">
                        <input
                            ref={inputRef}
                            className="text-primary underline border-none outline-none w-20 uppercase font-firacode font-medium text-[14px] lg:text-[16px]"
                            value={linkAndCode.code}
                            onChange={handleCodeChange}
                            readOnly={editCouponCode}
                        />
                        <div className=" cursor-pointer" onClick={() => handleCopy(linkAndCode.code)}>
                            <Icons name="copyIcon" />
                        </div>
                    </div>
                    <div
                        onClick={handleEdit}
                        className="text-[#424242] cursor-pointer">
                        <Icons name="editPencilIcon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LinksAndCodes