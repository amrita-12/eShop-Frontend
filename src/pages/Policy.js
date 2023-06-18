import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
       
          <h1 className="bg-dark p-2 text-white text-center">PRIVACY POLICY</h1>
          <p> We only process personal information for these “legitimate interests” after considering the potential risks to your privacy and balancing any risks with certain measure.</p>
          <p>We may also process your personal information where you have provided your consent. In particular, where we cannot rely on an alternative legal basis for processing, where you direct us to transfer information to a third party, where we receive your data from a third party is sourced and it already comes with consent or where we are required by law to ask for your consent (including in the context of some of our sales and marketing activities). At any time, you have a right to withdraw your consent by changing your communication choices, opting out from our communications or by contacting us.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
