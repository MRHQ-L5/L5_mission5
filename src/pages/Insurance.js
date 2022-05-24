import React from "react";
import InsuranceContent from "../components/InsuranceContent";
import NavbarSmall from "../components/NavbarSmall";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";

export default function Insurance() {
  return (
    <>
      <NavbarSmall />
      <ChatBot />
      <InsuranceContent />
      <Footer />
    </>
  );
}
