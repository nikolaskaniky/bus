import React from "react";
import classes from "./client-benefits.module.scss";
import Image from "next/image";
import first from "../../../assets/images/home-page/client-benefits/first@3x.png";
import second from "../../../assets/images/home-page/client-benefits/second@3x.png";
import third from "../../../assets/images/home-page/client-benefits/third@3x.png";
import forth from "../../../assets/images/home-page/client-benefits/forth@3x.png";

const ClientBenefits = () => {
  return (
    <section className={classes["clients-benefits"]}>
      <div className={classes.box}>
        <div className={classes["image-wrapper"]}>
          <Image src={first} layout="fill" alt="img" />
        </div>

        <div className={classes.presentation}>
          <h1>Cum se simt clientii nostrii</h1>
          <p>
            Calatoriile noastre sunt mereu in siguranta si la timp, asa ca nu
            trebuie sa va faceti, griji , ne luam orice fel de precautie pentru,
            ca clientu noastru sa fie relaxat si confortabil.
          </p>
          <h4>1</h4>
        </div>
      </div>

      <div className={`${classes.box} ${classes.reverse}`}>
        <div className={classes.presentation}>
          <h1>Cum se simt clientii nostrii</h1>
          <p>
            Calatoriile noastre sunt mereu in siguranta si la timp, asa ca nu
            trebuie sa va faceti, griji , ne luam orice fel de precautie pentru,
            ca clientu noastru sa fie relaxat si confortabil.
          </p>
          <h4>2</h4>
        </div>

        <div className={classes["image-wrapper"]}>
          <Image src={second} layout="fill" alt="img" />
        </div>
      </div>

      <div className={classes.box}>
        <div className={classes["image-wrapper"]}>
          <Image src={third} layout="fill" alt="img" />
        </div>

        <div className={classes.presentation}>
          <h1>Cum se simt clientii nostrii</h1>
          <p>
            Calatoriile noastre sunt mereu in siguranta si la timp, asa ca nu
            trebuie sa va faceti, griji , ne luam orice fel de precautie pentru,
            ca clientu noastru sa fie relaxat si confortabil.
          </p>
          <h4>3</h4>
        </div>
      </div>

      <div className={`${classes.box} ${classes.reverse}`}>
        <div className={classes.presentation}>
          <h1>Cum se simt clientii nostrii</h1>
          <p>
            Calatoriile noastre sunt mereu in siguranta si la timp, asa ca nu
            trebuie sa va faceti, griji , ne luam orice fel de precautie pentru,
            ca clientu noastru sa fie relaxat si confortabil.
          </p>
          <h4>4</h4>
        </div>

        <div className={classes["image-wrapper"]}>
          <Image src={forth} layout="fill" alt="img" />
        </div>
      </div>
    </section>
  );
};

export default ClientBenefits;
