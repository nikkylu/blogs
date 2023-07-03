import './Home.css'
import pic from "./components/bio/pic.jpg"
const Home = () => {
  return (
  <div className="Home">
    <h2>Bio</h2>
    <div className='Home-div'>
      <div>Nikky is living and working in New York City. </div>
    <div>Born 2003, Hangzhou, China.</div>
    <br></br>
    <div>Hey this is Nikky. I am currently pursuing Computer Science and Philosophy with a Math minor.</div> 
    <div>I am an art photographer, world solo-traveler, barista, podcaster, spotify playlist maker, "food-critic," swimmer, and cyclist -- yet to become an aquabiker! </div>
    <div>I listen to jazz and am interested in playing jazz piano and guitar.</div>
    <div>J'aime les baguettes... und ich liebe techno.</div>
    <div>This Blog records my journey as an observer and an active learner.</div>
    </div>
    <br></br>
    <img src={pic} className='Home-img'></img>
    <div className='fs-small'>the dentist cr. Jo</div>
  </div>
  )
};

export default Home;