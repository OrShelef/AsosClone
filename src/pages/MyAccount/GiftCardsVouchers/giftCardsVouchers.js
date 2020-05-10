import React, { useState } from 'react'
import MyAccountHeader from '../Header/MyAccountHeader'
import { LinkRaisedButton } from '../../../Components/buttons'
import classes from './giftCardsVouchers.module.css'
import { Link } from 'react-router-dom'

const GiftCardsVouchers = props => {
    return (
        <div>
            <MyAccountHeader header={props.name} icon={props.icon}/>
            <VoucherList icon={props.icon}/>
            <Help/>
        </div>
    )
}


const VoucherList = props => {

    return (
        <div className={classes.VoucherList}>
            <i className={props.icon}></i>
            <h1>You Have No Voucher Yet</h1>
            <p>You currently have no vouchers linked to your account. Get started by redeeming or buying one now. </p>
            <LinkRaisedButton width='55%' >Add Giftcard Voucher</LinkRaisedButton>
            <LinkRaisedButton width='55%'>But Gify Voucher</LinkRaisedButton>

        </div>
    )
}


const Help = props => {
    return (
        <div className={classes.help}>
            <h1>NEED HELP WITH THESE OPTIONS?</h1>
            <div>
                <span><Link>Gift card/Voucher</Link><i className="far fa-clone"></i></span>
                <Expander header="What is a gift card?">
                    <div className={classes.expanderContent}>
                        <p>An ASOS gift card is a physical card that you can buy at major retailers.

                        The shop will activate it, but you'll then need to redeem it in your ASOS account.
                        Just click 'Redeem voucher' when placing your order.
                        Once your gift card has been added to your account, 
                        you'll see the amount ready to spend at the checkout.
                        </p>
                   
                        <a>Terms & Conditions</a>
                        <a>Gift card FAQ</a>
                    
                   
                    </div>
                </Expander>
                <Expander header="What is a gift voucher?">
                    <div className={classes.expanderContent}>
                        <p>An ASOS gift card is a physical card that you can buy at major retailers.

                        The shop will activate it, but you'll then need to redeem it in your ASOS account.
                        Just click 'Redeem voucher' when placing your order.
                        Once your gift card has been added to your account, 
                        you'll see the amount ready to spend at the checkout.
                        </p>
                   
                        <a>Terms & Conditions</a>
                        <a>Gift card FAQ</a>
                    
                   
                    </div>
                </Expander>
            </div>
        </div>
    )
}

const Expander = props => 
{
    const [isOpen, setIsOpen] = useState(false);
   
    
    return (
        <div className={`${classes.Expander} ${isOpen?classes.Open:classes.Close}`}>
            <button onClick={()=>setIsOpen(!isOpen)} className={isOpen?classes.Open:classes.Close}>{props.header}<span/></button>
            
            <div className={isOpen?classes.Open:classes.Close}>
               { props.children }
            </div> 
            

        </div>
    )
}

export default GiftCardsVouchers
