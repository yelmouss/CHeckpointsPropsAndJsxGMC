import logo from "./logo.svg";
import "./App.css";
import ProfileCard from "./componnents/ProfileCard";
import ProfileImage from "./Geek.png";
import Name from "./componnents/Name";
import Image from "./componnents/Image";
import Description from "./componnents/Description";
import Price from "./componnents/Price";
import { Product } from "./product";
function App() {
  let MyName = 'Yassine ELMOUSS';

  return (
    <div className="App">
      <ProfileCard
        source={Product.imagePath}
        name={<Name />}
        description={<Description />}
        Price={<Price />}
      />
      <hr />
      <h2>Hello , {MyName} </h2>
      { MyName ? <img src={logo} alt="MyImage" className="img-fluid col-2" /> : "No Name"}
    </div>
  );
}

export default App;
