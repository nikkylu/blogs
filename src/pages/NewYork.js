// import Bulb from "./components/Bulb"
import './NewYork.css'
import './Photo.css'
import a from "./components/ny/ny1.jpeg"
import b from "./components/ny/ny2.jpeg"
import c from "./components/ny/ny3.jpeg"
import d from "./components/ny/ny6.jpeg"
import e from "./components/ny/ny8.jpeg"
import f from "./components/ny/ny16.jpeg"

const NewYork = () => {
  return(
    <div className='NewYork'>
        <div>自从大概3个月之前的12月，在纽约漫长的将近5个月的冬天里就想拍一张喜欢的黑白, </div>
        <div> 从去年光秃的树枝到今年的冰冷的自行车手把。</div>
        <div>纽约的冬天似乎硬生生吸走了我生活的彩色，春天来了也还没能将它们复原，包围我的是接踵而来的雨天。</div>
        <div>黑白的阳光也依旧灼热。它们吸吮着我裸露的肌肤拔干我的嘴唇，在为数不多的树叶上留下痕迹。</div>
        {/* <Bulb></Bulb> */}
        <div className="NewYork-Photo">
          <img className="NewYork-pic" src={e}></img>
          <img className="NewYork-pic" src={f}></img>
        </div>
        <div className="NewYork-Photo">
          <img className="NewYork-pic" src={a}></img>
          <img className="NewYork-pic" src={d}></img>
        </div>
          <div className="NewYork-Photo">
          <img className="NewYork-pic" src={b}></img>
          <img className="NewYork-pic" src={c}></img>
        </div>
    </div>

  )
};

export default NewYork;
