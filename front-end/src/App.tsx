import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Card from './components/selection/Card'
import calendarIcon from '../src/assets/svg/blueCalendar.svg'

function App() {

  return (
    <div className='flex flex-col h-full justify-between'>
      <Header/>
        <Card img={calendarIcon} count="6" content='Modules'/>
      <Footer/>
    </div>
  )
}

export default App
