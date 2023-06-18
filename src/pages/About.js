import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - eShop"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        
        <div className="col-md-4">
        <h1 className="bg-dark p-2 text-white text-center">ABOUT US</h1>
          <p className="text-justify mt-2">
           We are an ecommerce website selling products all over India. It is a social commerce platform that undertakes retail distribution, enabling small retail merchants to connect and sell their products effectively via social media channels. We aims to create an environment where anyone can start their business with zero investment.We aims to create about 20 million micro-entrepreneurs. There are over two million resellers on the Meesho platform and more than 20,000 manufacturers from more than 500 towns who get distribution through us. It works on approximately 10-15 percent commission and sellers can earn with us by adding a profit margin on every sale.


          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
