import React from "react";
import "./plans.css";
import { plans } from "../../data";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_4.jpg";
import Card from "../../UI/Card";

const Plans = () => {
  return (
    <>
      <Header title="Membership Plans" image={HeaderImage}>
        Elevate your fitness journey with our premium gym plans. Whether you're
        a beginner or a seasoned pro, our tailored plans offer the guidance and
        support you need to achieve your fitness goals. Select the plan that
        suits your lifestyle and embark on a path to a healthier, stronger you.
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {plans.map(({ id, name, desc, price, features }) => {
            return (
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$ ${price}`}</h1>
                <h2>/mo</h2>
                <h4>Features</h4>
                {features.map(({ feature, available, index }) => {
                  return (
                    <p key={index} className={available ? "" : "disabled"}>
                      {feature}
                    </p>
                  );
                })}
                <button className="btn lg">Choose Plan</button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Plans;
