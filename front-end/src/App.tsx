import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
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
