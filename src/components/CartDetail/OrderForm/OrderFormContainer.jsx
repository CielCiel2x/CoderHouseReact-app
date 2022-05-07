import React, { useEffect, useState } from "react";
import { useContext } from "react";
import OrderForm from "./OrderForm";
import {
  collection,
  getFirestore,
  addDoc,
  writeBatch,
  serverTimestamp,
  getDoc,
  doc,
} from "firebase/firestore";
import { CartContext } from "../../../Contexts/CartContext";

function OrderFormContainer(totalPrice) {
  const [isNameValid, setIsNameValid] = useState(false);
  const [isAddressValid, setIsAddressValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isMailValid, setIsMailValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");

  const { setPurchaseId, cart, setCart } = useContext(CartContext);

  const dataBase = getFirestore();
  const soldTickets = collection(dataBase, "soldTickets");

  let buyerTicket = {
    buyer: { name, email, contactPhone, shippingAddress },
    items: [...cart],
    total: { totalPrice },
    date: serverTimestamp(),
  };

  function confirmPurchase() {
    const batch = writeBatch(dataBase);

    cart.forEach((item) => {
      let productDoc = doc(dataBase, "products", String(item.sku));
      let previousStock = 0;

      getDoc(productDoc).then((snapshot) => {
        if (snapshot.exists()) {
          if (snapshot.data().stock) {
            previousStock = Number(snapshot.data().stock);
          }
        }
        let newStock = previousStock - item.amountProduct;
        batch.update(productDoc, { stock: newStock });
      });
    });
    addDoc(soldTickets, buyerTicket).then(({ id }) => {
      batch.commit();
      setPurchaseId(id);
      setCart([]);
    });
  }

  //F O R M 'S   V A L I D A T I O N S

  useEffect(() => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (emailRegex.test(email) || email === "") {
      setIsMailValid(false);
    } else {
      setIsMailValid(true);
    }
  }, [email]);

  useEffect(() => {
    const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$/;
    if (phoneRegex.test(contactPhone) || contactPhone === "") {
      setIsPhoneValid(false);
    } else {
      setIsPhoneValid(true);
    }
  }, [contactPhone]);

  useEffect(() => {
    const addressRegex = /^[A-Za-z0-9  -]*$/;
    if (addressRegex.test(shippingAddress) || shippingAddress === "") {
      setIsAddressValid(false);
    } else {
      setIsAddressValid(true);
    }
  }, [shippingAddress]);

  useEffect(() => {
    const nameRegex = /^[A-Za-z -]*$/;
    if (nameRegex.test(name) || name === "") {
      setIsNameValid(false);
    } else {
      setIsNameValid(true);
    }
  }, [name]);

  useEffect(
    () => {
      if (
        !isNameValid &&
        !isAddressValid &&
        !isPhoneValid &&
        !isMailValid &&
        name !== "" &&
        shippingAddress !== "" &&
        contactPhone !== "" &&
        email !== ""
      ) {
        setIsFormValid(false);
      } else {
        setIsFormValid(true);
      }
    },
    [name, shippingAddress, contactPhone, email]
  );

  return (
    <>
      <OrderForm
        isNameValid={isNameValid}
        isAddressValid={isAddressValid}
        isPhoneValid={isPhoneValid}
        isMailValid={isMailValid}
        setName={setName}
        setEmail={setEmail}
        setContactPhone={setContactPhone}
        setShippingAddress={setShippingAddress}
        isFormValid={isFormValid}
        confirmPurchase={confirmPurchase}
      />
    </>
  );
}

export default OrderFormContainer;
