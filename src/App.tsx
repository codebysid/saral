import './App.css'
import CommissionPanel from './components/CommissionPanel'
import LinksAndCodes from './components/LinksAndCodes'
import ProfilePanel from './components/ProfilePanel'

function App() {
  return (
    <div className=' flex justify-center'>

      <div className=' flex flex-col gap-6 p-6 w-[470px]'>
        <CommissionPanel />
        <LinksAndCodes />
      </div>

      <div className=' flex flex-col gap-6 p-6 w-[500px]'>
        <ProfilePanel />
      </div>

    </div>
  )
}

export default App
