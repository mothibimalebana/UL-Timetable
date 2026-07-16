import './App.css'
import Footer from './components/UploadFooter'
import Header from './components/UploadHeader'

import UploadPage from './pages/UploadPage'


function App() {

  return (
    <div className='flex flex-col h-full justify-between'>
      <Header/>
        <UploadPage/>
      <Footer/>
    </div>
  )
}

export default App
