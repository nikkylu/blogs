import Bulb from "./components/Bulb"
import "./Photo.css"
import a from './components/travel/a.jpeg';
import b from './components/travel/b.jpeg';
import c from './components/travel/c.jpeg';
import d from './components/travel/d.jpeg';
import e from './components/travel/e.jpeg';
import f from './components/travel/f.jpeg';
import g from './components/travel/g.jpeg';
import h from './components/travel/h.jpeg';
import i from './components/travel/i.jpeg';
import j from './components/travel/j.jpeg';
import k from './components/travel/k.jpeg';
import l from './components/travel/l.jpeg';
import m from './components/travel/m.jpeg';
import n from './components/travel/n.jpeg';
import o from './components/travel/o.jpeg';
import p from './components/travel/p.jpeg';
// import q from './components/travel/q.jpeg';
// import h from './components/pic/h.jpeg';
// import i from './components/pic/i.jpeg';
// import j from './components/pic/j.jpeg';
// import b from './pic/b.jpeg';
// import c from './pic/c.jpeg';
// import d from './pic/d.jpeg';
// import e from './pic/e.jpeg';


const Travel = () => {
  return(
    <div>
      <div className="Photo">
          {/* <h2>Photo Projects</h2> */}
          {/* <Bulb></Bulb> */}
        <img className="Photo-pic" src={a}></img>
        <img className="Photo-pic" src={b}></img>
      </div>
      <div className="Photo">
        <img className="Photo-pic" src={c}></img>
        <img className="Photo-pic" src={d}></img>
      </div>
      <div className="Photo">
        <img className="Photo-pic" src={g}></img>
        <img className="Photo-pic" src={f}></img>
      </div>
      <div className="Photo">
        <img className="Photo-pic" src={e}></img>
        <img className="Photo-pic" src={h}></img>
      </div>
      <div className="Photo">
        <img className="Photo-pic" src={i}></img>
        <img className="Photo-pic" src={j}></img>
      </div>
      <div className="Photo">
        <img className="Photo-pic" src={k}></img>
        <img className="Photo-pic" src={l}></img>
      </div>
      <div className="Photo">
        <img className="Photo-pic" src={o}></img>
        <img className="Photo-pic" src={n}></img>
      </div>
      <div className="Photo">
        {/* <img className="Photo-pic" src={o}></img> */}
        {/* <img className="Photo-pic" src={p}></img> */}
      </div>
       <div className="Photo">
        <img className="Photo-pic" src={m}></img>
        </div>
        {/* <img className="Photo-pic" src={l}></img> */}
      {/* </div> */}
    </div>
  )
};

export default Travel;
