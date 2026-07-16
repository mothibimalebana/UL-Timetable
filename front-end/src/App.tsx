import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import UploadHeader from './components/upload/Header'
import Upload from './components/upload/Upload'

function App() {

  return (
    <div className='flex flex-col h-full justify-between'>
      <Header/>
      <Upload/>
      <Footer/>
    </div>
  )
}

export default App
