import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Und from "./pages/Und";
import NewYork from "./pages/NewYork";
import Photo from "./pages/Photo";
import Iphone from "./pages/Iphone";
import Water from "./pages/Water";
import Film from "./pages/Film";
import Blogs from "./pages/Blogs";
import Travel from "./pages/Travel";
import Corpse from "./pages/Corpse";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

import P5 from "./pages/P5";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="film" element={<Film />} />
          <Route path="Photo" element={<Photo />} />
          <Route path="und" element={<Und />} />
          <Route path="water" element={<Water />} />
          <Route path="newyork" element={<NewYork />} />
          <Route path="travel" element={<Travel />} />
          <Route path="iphone" element={<Iphone />} />
          <Route path="corpse" element={<Corpse />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="P5" element={<P5 />} /> */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);