import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import UploadFooter from './components/upload/Footer'


function App() {

  return (
    <div className='flex flex-col h-full justify-between'>
      <Header/>
        <UploadFooter/>
      <Footer/>
    </div>
  )
}

export default App
