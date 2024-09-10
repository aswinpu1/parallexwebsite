import './App.css';
import { Parallax } from 'react-parallax';
import city from './assets/city.jpg';
import mountain from './assets/mountain.jpg';
import sunset from './assets/sunset.jpg';
import butterfly from './assets/butterfly.jpg';



const App = () => {
  return (



    <div>
 
      <div className="App">
        <Parallax strength={500} bgImage={city} className='content'>
        </Parallax>
        <Parallax strength={200} blur={{ min: -15, max: 15 }} bgImage={mountain} className='content '>
        </Parallax>
        <Parallax strength={600} bgImage={sunset} className='content '>
        </Parallax>
        <Parallax strength={100} bgImage={butterfly} className='content '>
        </Parallax>
        <Parallax strength={500} bgImage={city} className='content'>
        </Parallax>

      </div>

    </div>
  )
}

export default App