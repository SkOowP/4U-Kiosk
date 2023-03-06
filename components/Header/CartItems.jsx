import {useMainContext} from "../../config/mainContext";
import style from './header.module.css'
import Image from "next/image";
import {Button, Modal} from "@material-ui/core";
import Card from "../../commons/Card";
import {useState} from "react";

const CartItems = ({setShowCart}) => {
    const {state} = useMainContext()

    const [checkoutOpened, setCheckoutModal] = useState(false);
    const sum = 0
    state.orders.map(
        (e) => {
            sum = sum + (e.price * e.count)
        }
    )
    return (
        <div className={style.menuMainContainer}>
            <Image width="40px" height="40px" src={'/icons/close.png'} onClick={() => setShowCart(false)}/>
            <div className={style.ietmsContainer}>
                {
                    state.orders.length < 1 ?
                        <span className={style.itemsName}> You have no selected any items yet</span>
                        :
                        <>
                            <ul>
                                {
                                    state.orders.map(
                                        e => (

                                            <li key={'order-' + e.name} className={style.item}>
                                                <span className={style.itemsName}>{e.name} * {e.count}</span>
                                                <span className={style.itemsName}>{e.price * e.count} DH</span>
                                            </li>
                                        )
                                    )
                                }
                            </ul>
                            <div className={style.totalContainer}>
                                <span className={style.itemsName}>Total</span>
                                <span className={style.itemsName}>{sum} DH</span>
                            </div>

                            <div className={style.buttonContainer}>
                                <Button variant="contained" color="primary" onClick={() => setCheckoutModal(true)}>
                                    Checkout
                                </Button>
                            </div>
                        </>
                }
            </div>
            <Modal open={checkoutOpened}>
                <div className={style.modalContainer}>

                    <div className={style.modalInnerContainer}>
                        <div className={style.closeIcon}>
                            <Image width="30px" height="30px" src={'/icons/close.png'}
                                   onClick={() => setCheckoutModal(false)}/>
                        </div>

                        <div className={style.methodsContainer}>
                            <Card key={"bank"} index={'bank'} title={"pay by card"} image={"/icons/payByCard.png"}
                                  onClick={() => {
                                  }}/>
                            <Card key={"bank"} index={'bank'} title={"pay by cash"} image={"/icons/cash.png"}
                                  onClick={() => {
                                  }}/>
                        </div>


                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default CartItems