import {Route, Routes} from 'react-router-dom'
import {ShopProvider} from '@/context/ShopProvider'
import HomePage from '@/pages/HomePage'
import Error404 from '@/pages/Errors/Error404'
import Navbar from './components/Navbar'
import Bundlers from './pages/Bundlers'
import News from './pages/News'


function App() {

  return (
    <div className="App">
      <ShopProvider>
        <Navbar/>
        <main  className='mt-20'>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path='/bundlers' element={<Bundlers/>}  />
            <Route path="/news" element={<News/>} />
            <Route path='*' element={<Error404/>}  />
          </Routes>
        </main>
      </ShopProvider>
    </div>
  )
}

export default App
