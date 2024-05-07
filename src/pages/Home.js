import './Home.css'
// import pic from "./components/bio/pic.jpeg"
import pic4 from "./components/bio/pic4.JPG"
import pic5 from "./components/bio/pic5.jpeg"
import pic6 from "./components/bio/pic6.jpeg"

const Home = () => {
  return (
  <div className="Home">
    <h2>Bio</h2>
    <div className='Home-div'>
      <div>Nikky is living and working in New York City. </div>
    <div>Born 2003, Hangzhou, China.</div>
    <br></br>
    <div>Hey this is Nikky. I am currently pursuing Computer Science and Philosophy with a Math minor.</div> 
    <div>In my free time, I take photos, explore contemporary art, and enjoy cycling. I travel during longer holidays.</div>
    <div>This Blog records my journey as an observer and an active learner.</div>
    </div>
    <br></br>
    <img src={pic4} className='Home-img'></img>
    <img src={pic5} className='Home-img'></img>
    <div className='Home-cap'>cr. Fuan @ Eastbourne, England, UK</div>
    <img src={pic6} className='Home-img'></img>
    <div className='Home-cap'>cr. Kevin @ New Jersey, US</div>
    {/* <div className='fs-small'>the dentist cr. Jo</div> */}
  </div>
  )
};

export default Home;