import React from "react";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

function OrderForm({
  isNameValid,
  setName,
  isAddressValid,
  setShippingAddress,
  isMailValid,
  setEmail,
  isPhoneValid,
  setContactPhone,
  isFormValid,
  confirmPurchase,
}) {
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            m: 1,
            width: { xs: "25ch", sm: "50ch" },
            display: "flex",
            justifyContent: "center",
          },
        }}
        autoComplete="off"
      >
        <TextField
          error={isNameValid}
          id="filled-basic"
          label="name"
          variant="filled"
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
        />
        <TextField
          error={isAddressValid}
          id="filled-basic"
          label="adress"
          variant="filled"
          onChange={(e) => {
            setShippingAddress(e.currentTarget.value);
          }}
        />
        <TextField
          error={isMailValid}
          id="filled-basic"
          label="email"
          variant="filled"
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
        />
        <TextField
          error={isPhoneValid}
          id="filled-basic"
          label="contact number"
          variant="filled"
          onChange={(e) => {
            setContactPhone(e.currentTarget.value);
          }}
        />
      </Box>
      <Link to="/approvedpurchase" className={isFormValid ? "disabledLink" : "#"}>
        <Button
          disabled={isFormValid}
          variant="contained"
          onClick={confirmPurchase}
          sx={{ marginTop: 3 }}
        >
          Create order
        </Button>
      </Link>
      ;
    </>
  );
}

export default OrderForm;
