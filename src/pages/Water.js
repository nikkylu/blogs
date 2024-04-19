import Bulb from "./components/Bulb"
// import './NewYork.css'
import './Photo.css'
import a from "./components/water/a.jpeg"
import b from "./components/water/b.jpeg"
import c from "./components/water/c.jpeg"
import d from "./components/water/d.jpeg"
import e from "./components/water/e.jpeg"

const Water = () => {
  return(
    <div className='NewYork'>
        <div>
            The proximity to a vast water body has been a defining anchor in my life since childhood. </div>
        <div> </div>
          <div>I almost never photo humans, but I would like to be with water together this time.</div>
        <div className="NewYork-Photo">
          <img className="NewYork-pic" src={a}></img>
          <img className="NewYork-pic" src={b}></img>
        </div>
        <div className="NewYork-Photo">
          <img className="NewYork-pic" src={c}></img>
          <img className="NewYork-pic" src={d}></img>
      </div>
      <div className="NewYork-Photo">
          <img className="NewYork-pic" src={e}></img>
          {/* <img className="NewYork-pic" src={d}></img> */}
      </div>
    </div>
  )
};

export default Water;
