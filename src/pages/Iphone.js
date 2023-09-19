import Bulb from "./components/Bulb"
import './NewYork.css'
import './Photo.css'
import a from "./components/house/a.jpeg"
import b from "./components/house/b.jpeg"
import c from "./components/house/c.jpeg"
import d from "./components/house/d.jpeg"

const Photo = () => {
  return(
    <div className='NewYork'>
        <div>Been abroad for 5 years and constantly traveling around the globe, 
          the concept of HOME seems to wander. </div>
        <div>Thus, I went back to the house I lived in 12 years ago, 
          where everything from my childhood was kept and preserved. That was where I learned to walk, 
          and where I first got nurtured by all those environmental influences to eventually become current self. </div>
          <div>While photographing the objects, fading memories reemerge and subside onto the physical particles.</div>
        <div className="NewYork-Photo">
          <img className="NewYork-pic" src={a}></img>
          <img className="NewYork-pic" src={b}></img>
        </div>
        <div className="NewYork-Photo">
          <img className="NewYork-pic" src={c}></img>
          <img className="NewYork-pic" src={d}></img>
      </div>
    </div>
  )
};

export default Photo;
