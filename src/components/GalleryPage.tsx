import individualYoga from "../assets/imgs/gallery/Client2_IndividualYoga.png";
import groupYoga from "../assets/imgs/gallery//Client2_GroupYoga.png";
import individualPilates from "../assets/imgs/gallery/Client2_IndividualPilates.png";
import groupPilates from "../assets/imgs/gallery/Client2_GroupPilates.png";
import individualKickbox from "../assets/imgs/gallery/Client2_IndividualKickboxing.png";
import groupKickbox from "../assets/imgs/gallery/Client2_GroupKickboxing.png";
import yogaMat from "../assets/imgs/gallery/Client2_YogaMat.png";
import waterBottle from "../assets/imgs/gallery/Client2_WaterBottle.png";
import tShirt from "../assets/imgs/gallery/Client2_TeeShirt.png";
import { ToastContainer, toast } from 'react-toastify';
import { getItem, setItem } from "../util/utilFunctions";
import CartModal from "./CartModal";
import { useState } from "react";

const GalleryPage = () => {
  const [cartOpen, setCartOpen] = useState(false);

  interface CartItem {
    id: number;
    name: string;
    image: string;
  }

  const soldItems = [
    { id: 1, name: "Individual yoga session", image: individualYoga },
    { id: 2, name: "Group yoga session", image: groupYoga },
    { id: 3, name: "Individual Pilates session", image: individualPilates },
    { id: 4, name: "Group Pilates session", image: groupPilates },
    { id: 5, name: "Individual kickboxing session", image: individualKickbox },
    { id: 6, name: "Group kickboxing session", image: groupKickbox },
    { id: 7, name: "Yoga mat", image: yogaMat },
    { id: 8, name: "Water bottle", image: waterBottle },
    { id: 9, name: "Tee shirt", image: tShirt }
  ]

  const CART = "cart";

  const addItemToCart = (item: CartItem) => {
    // get cart items
    let existingCart = getItem(CART);
    // no items in cart
    if (existingCart === null) {
      existingCart = {}
      existingCart[item.name] = 1
    } else {
      // items in cart
      if(existingCart.hasOwnProperty(item.name)) {
        // item already exists
        existingCart[item.name] = existingCart[item.name] + 1
      } else {
        // item doesn't exist
        existingCart[item.name] = 1
      }
    }
    // add item to cart
    setItem(CART, existingCart);
    // notify user of action
    toast(`Added ${item.name} to your cart.`);
  }

  const handleCartOpen = (currentState: boolean) => setCartOpen(!currentState);

  return (
    <main>
      <CartModal handleCartOpen={handleCartOpen} open={cartOpen} cartItems={getItem("cart")} />
      <section>
        <button onClick={() => handleCartOpen(cartOpen)}>View Cart</button>
        <h1 className="text-center second-color">Our Offers</h1>
        <h2 className="text-center">Join Us</h2>
      </section>
      <section className="">
        <ul className="gallery list-style-none">
          {
            soldItems.map((item: CartItem) => {
              return (
                <li key={item.id}>
                  <div><img src={item.image} alt="thing" /></div>
                  <p className="flex-between">{item.name} <button onClick={() => addItemToCart(item)}>Add to Cart</button></p>
                </li>
              )
            })
          }
        </ul>
      </section>
      <ToastContainer />
    </main>
  )
}

export default GalleryPage;