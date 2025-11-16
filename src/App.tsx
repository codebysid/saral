import { lazy, Suspense } from 'react'
import './App.css'
import { Loader } from 'lucide-react'
const CommissionPanel = lazy(() => import("./components/CommissionPanel"))
const EarningsPanel = lazy(() => import("./components/EarningsPanel"))
const LinksAndCodes = lazy(() => import("./components/LinksAndCodes"))
const ProfilePanel = lazy(() => import("./components/ProfilePanel"))


function App() {
  return (
    <div>
      <div className='justify-center hidden lg:flex'>

        <div className='flex flex-col gap-5 p-3 w-[470px]'>
          <Suspense fallback={<Loader />}>
            <CommissionPanel />
            <LinksAndCodes />
          </Suspense>
        </div>

        <div className=' flex flex-col gap-5 p-3 w-[500px]'>
          <Suspense fallback={<Loader />}>
            <ProfilePanel />
            <EarningsPanel />
          </Suspense>
        </div>

      </div>

      {/* mobile */}
      <div className=' justify-center items-center flex flex-col lg:hidden pb-4'>

        <div className=' flex flex-col gap-6 pt-2 w-[328px]'>
          <Suspense fallback={<Loader />}>
            <ProfilePanel />
            <CommissionPanel />
          </Suspense>
        </div>

        <div className=' flex flex-col gap-6 pt-2 w-[328px]'>
          <Suspense fallback={<Loader />}>
            <LinksAndCodes />
            <EarningsPanel />
          </Suspense>
        </div>

      </div>
    </div>
  )
}

export default App
