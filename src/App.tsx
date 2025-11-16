import './App.css'
import CommissionPanel from './components/CommissionPanel'
import LinksAndCodes from './components/LinksAndCodes'

function App() {
  return (
    <div className=''>

      <div className=' flex flex-col gap-6 p-6 w-[470px]'>
        <CommissionPanel />
        <LinksAndCodes />
      </div>

    </div>
  )
}

export default App
