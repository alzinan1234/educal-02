import Cards from "@/components/Contact/Cards";
import ContactBanner from "@/components/Contact/ContactBanner";
import ContactFrom from "@/components/Contact/ContactFrom";
import React from "react";

const Contact = () => {
  return (
    <div>
      <ContactBanner />
      <ContactFrom />
      <Cards />
    </div>
  );
};

export default Contact;
