import {Router, Route, Routes} from 'react-router-dom'
import {ShopProvider} from '@/context/ShopProvider'
import HomePage from '@/pages/HomePage'
import Error404 from '@/pages/Errors/Error404'
import Navbar from './components/Navbar'


function App() {

  return (
    <div className="App">
      <ShopProvider>
        <Navbar/>
        <div className='mt-20'>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path='*' element={<Error404/>}  />
          </Routes>
        </div>
      </ShopProvider>
    </div>
  )
}

export default App
