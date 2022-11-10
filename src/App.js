import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [cart, setCart] = useState({});
  const [price, setPrice] = useState(0);

  const updateCart = (uid) => {
    let newCart = cart;
    if (newCart[uid]) {
      newCart[uid] += 1;
    } else {
      newCart[uid] = 1;
    }
    setPrice(price + bakeryData[uid].price)
    setCart({...newCart});
  }
  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => { // TODO: map bakeryData to BakeryItem components
        return (
          <>
            <p>Bakery Item {index}</p>
            <BakeryItem updateCart = {updateCart} item = {item} index = {index}/>
          </>
        )
        })}

      <div>
        <h2>Cart {price}</h2>
        {/* TODO: render a list of items in the cart */}
        {Object.keys(cart).map((idx) => {
          return <div>{bakeryData[idx].name + "x" + cart[idx]}</div>
        })}
      </div>
      </div>
  );
}

export default App;

