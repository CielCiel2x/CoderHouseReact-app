import React from "react";
import CartWidget from "./CartWidget";
import UserButton from './UserButton';


export default function SessionBuy() {
    return(
        <>
            <div className="session__container">
                <CartWidget/>
                <UserButton/>
            </div>
        </>
    );

}



