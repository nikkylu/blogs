import Bulb from "./components/Bulb"
import "./Photo.css"
import a from './components/corpse/a.jpeg';
import b from './components/corpse/b.jpeg';
import c from './components/corpse/c.jpeg';
import d from './components/corpse/d.jpeg';
import e from './components/corpse/e.jpeg';
import f from './components/corpse/f.jpeg';
import g from './components/corpse/g.jpeg';
import h from './components/corpse/h.jpeg';
import i from './components/corpse/i.jpeg';
import j from './components/corpse/j.jpeg';
import k from './components/corpse/k.jpeg';
import l from './components/corpse/l.jpeg';
// import m from './components/pic/m.jpeg';
// import n from './components/pic/n.jpeg';
// import o from './components/pic/o.jpeg';
// import p from './components/pic/p.jpeg';
// import q from './components/pic/q.jpeg';
// import h from './components/pic/h.jpeg';
// import i from './components/pic/i.jpeg';
// import j from './components/pic/j.jpeg';
// import b from './pic/b.jpeg';
// import c from './pic/c.jpeg';
// import d from './pic/d.jpeg';
// import e from './pic/e.jpeg';


const Corpse = () => {
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
        <img className="Photo-pic" src={e}></img>
        <img className="Photo-pic" src={f}></img>
      </div>
      <div className="Photo">
        <img className="Photo-pic" src={g}></img>
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
      {/* <div className="Photo">
        <img className="Photo-pic" src={k}></img>
        <img className="Photo-pic" src={n}></img>
      </div>
      <div className="Photo">
        <img className="Photo-pic" src={o}></img>
        <img className="Photo-pic" src={p}></img>
      </div>
       <div className="Photo">
        <img className="Photo-pic" src={q}></img> */}
        {/* <img className="Photo-pic" src={l}></img> */}
      {/* </div> */}
    </div>
  )
};

export default Corpse;
