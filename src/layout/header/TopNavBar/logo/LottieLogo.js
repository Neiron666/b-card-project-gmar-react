import React from "react";
import Lottie from "lottie-react";
import animationData from "./LottieLogo.json";

const LottieLogo = () => {
  return (
    <Lottie
      animationData={animationData}
      autoplay
      loop
      style={{
        width: "100px",
        height: "80%",
        border: "1px solid #ccc",
        backgroundColor: "lightcyan",
        borderRadius: "10%",
      }}
    />
  );
};

export default LottieLogo;
