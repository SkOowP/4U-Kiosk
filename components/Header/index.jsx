import style from './header.module.css'
import Image from "next/image";
import {Drawer} from "@material-ui/core";
import CartItems from "./CartItems";
import {useState} from "react";
import {useMainContext} from "../../config/mainContext";

const Header = () => {
    const {state, setActivePage} = useMainContext()
    const [showCart, setShowCart] = useState(false)
    return (
        <div className={style.container}>
            {
                state.activePage > 1 ?
                    <Image className={style.cartIcon} width="30px" height="30px" src={'/icons/back.png'}
                           onClick={() => setActivePage(state.activePage - 1)}/>
                    :
                    <div/>
            }

            <Image className={style.cartIcon} width="50px" height="50px" src={'/icons/cart.png'}
                   onClick={() => setShowCart(true)}/>


            {showCart && <Drawer anchor={"right"} open={true}>
                <div className={style.cartItemsContainer}>
                    <CartItems setShowCart={setShowCart}/>
                </div>

            </Drawer>}
        </div>
    )
}
export default Header