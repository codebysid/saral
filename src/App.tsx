import { lazy, Suspense } from 'react'
import './App.css'
import { Loader } from 'lucide-react'
const CommissionPanel = lazy(() => import("./components/CommissionPanel"))
const EarningsPanel = lazy(() => import("./components/EarningsPanel"))
const LinksAndCodes = lazy(() => import("./components/LinksAndCodes"))
const ProfilePanel = lazy(() => import("./components/ProfilePanel"))


function App() {
  return (
    <div className=' flex justify-center'>

      <div className=' flex flex-col gap-6 p-6 w-[470px]'>
        <Suspense fallback={<Loader />}>
          <CommissionPanel />
          <LinksAndCodes />
        </Suspense>
      </div>

      <div className=' flex flex-col gap-6 p-6 w-[500px]'>
        <Suspense fallback={<Loader />}>
          <ProfilePanel />
          <EarningsPanel />
        </Suspense>
      </div>

    </div>
  )
}

export default App
