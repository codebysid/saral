import { Outlet } from "react-router";
import Navbar from "@/components/Navbar";
import { Bounce, ToastContainer } from "react-toastify"

export default function RootLayout() {
    return (
        <div className="max-w-[1500px] m-auto font-poppins bg-[#FAFAFA]">
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <Navbar />
            <main className=" h-[calc(100vh-90px)]">
                <Outlet />
            </main>
        </div>
    );
}
