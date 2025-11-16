import { Outlet } from "react-router";
import Navbar from "@/components/Navbar";
import { Bounce, ToastContainer } from "react-toastify"
import NavbarMobileBottomPanel from "@/components/NavbarMobileBottomPanel";

export default function RootLayout() {
    return (
        <div className="max-w-[1500px] m-auto font-poppins bg-[#FAFAFA] min-h-screen">
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
            <main className="h-[192vh] lg:h-[calc(100vh-90px)]">
                <Outlet />
            </main>
            <NavbarMobileBottomPanel />
        </div>
    );
}
