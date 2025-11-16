import { Outlet } from "react-router";
import Navbar from "@/components/Navbar";

export default function RootLayout() {
    return (
        <div className="max-w-[1500px] m-auto font-poppins">
            <Navbar />
            <main className=" bg-[#FAFAFA] h-[calc(100vh-90px)]">
                <Outlet />
            </main>
        </div>
    );
}
