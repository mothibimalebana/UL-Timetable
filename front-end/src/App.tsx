import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import UploadHeader from './components/upload/Header'

function App() {

  return (
    <div className='flex flex-col h-full justify-between'>
      <Header/>
        <UploadHeader/>
      <Footer/>
    </div>
  )
}

export default App
