import React from "react";
import HomepageContactElement from "../ReusableComponents/HomepageContactElement/HomepageContactElement";
import classes from "./Contact.module.css";

const Contact = ({ size }) => {
  const ContactInfo = [
    {
      title: "Email",
      content: "chanhuykhuong@gmail.com",
      href: "mailto:chanhuykhuong@gmail.com",
    },
    {
      title: "LinkedIn",
      content: "Chan Huy Khuong",
      href: "https://www.linkedin.com/in/chan-huy-khuong-414a05241/",
    },
    {
      title: "Resume",
      content: "View",
      href: "https://drive.google.com/file/d/1YJ31U6equmlRNUMi8w_VyV5D4tMb7iMt/view?usp=sharing",
    },
  ];

  return (
    <section id="homepage-contact" className={classes.container}>
      {/* Heading */}
      <h2
        className={`${
          size.width >= 1280
            ? "desktop-heading-medium"
            : "mobile-heading-medium"
        } ${classes.heading}`}
      >
        Contact
      </h2>

      {/* I'm all ears */}
      <p
        className={`${
          size.width >= 1280
            ? "desktop-heading-xlarge"
            : "mobile-heading-xlarge"
        } ${classes.contact_sentence}`}
      >
        I’m all ears.
      </p>

      {ContactInfo.map((element, index) => (
        <div key={index}>
          <HomepageContactElement
            title={element.title}
            content={element.content}
            href={element.href}
            size={size}
          />
          <div className={classes.spacer}></div>
        </div>
      ))}
    </section>
  );
};

export default Contact;
