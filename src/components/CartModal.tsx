import type { CartModalProps } from "../util/customTypes"
import { removeItem } from "../util/utilFunctions";
import { ToastContainer, toast } from 'react-toastify';

const CartModal: React.FC<CartModalProps> = ({ cartItems, open, handleCartOpen }) => {
    const handleRemoveItems = () => {
        removeItem("cart");
        handleCartOpen(open);
    }

    const handleProcessOrder = () => {
        toast("Thank you for your order.");
        handleCartOpen(open)
    }

    return (
        <dialog open={open}>
            <h1>Cart Items</h1>
                {
                    cartItems !== null ? Object.entries(cartItems).map((item: any, i) => {
                        return (
                            <div key={i}>
                                <p>You have {item[1]} {item[0]}'s</p>
                            </div>
                        )
                    }) : null
                }
                <button onClick={() => handleProcessOrder()}>Process Order</button>
                <button onClick={() => handleRemoveItems()}>Clear Cart</button>
                <ToastContainer />
        </dialog>
    )
}

export default CartModal;