import React from "react";
import { Helmet } from "react-helmet";
import FirstProcessCard from "../components/Ecovani/FirstProcessCard";
import Process from "../components/Ecovani/Process";
import SecondProcessCard from "../components/Ecovani/SecondProcessCard";
import TakeAways from "../components/Ecovani/Takeaways";
import IntroSection from "../components/ReusableComponents/ProjectDetailPage/IntroSection";
import Overview from "../components/ReusableComponents/ProjectDetailPage/Overview";
import ProjectDetail from "../components/ReusableComponents/ProjectDetailPage/ProjectDetail";
import WantMore from "../components/ReusableComponents/ProjectDetailPage/WantMore";
import { useWindowSize } from "../hooks/useWindowSize";

const Ecovani = () => {
  const size = useWindowSize();

  return (
    <React.Fragment>
      <Helmet>
        <title>Junius Khuong- Ecovani</title>
      </Helmet>

      <IntroSection
        imageURL="/Ecovani2.png"
        imageName="ecovani"
        project_name="Ecovani Ecommerce Site"
        height={size.width >= 1280 ? 517.84 : 190.32}
        width={size.width >= 1280 ? 818.94 : 253.76}
      />

      {/* Project Detail and Overview wrapper */}
      <div className="project_detail_overview_wrapper">
        {/* Project Detail Wrapper */}
        <section className="project_detail_wrapper" id="project-detail-wrapper">
          <ProjectDetail
            title="Duration"
            description="4 and a half months"
            size={size}
          />
          <ProjectDetail
            title="Technologies"
            description="HTML, CSS, Javascript, JQuery, NodeJS, ExpressJS, MongoDB, Heroku"
            size={size}
          />
          <ProjectDetail
            title="Market/Audience"
            description="Ecommerce/Final Year Project."
            size={size}
          />
        </section>

        {/* Overview */}
        <section id="overview">
          <Overview
            primary_content="This is an interesting one, this project was the one that took away my healthy daily schedule and nutritious meals."
            secondary_content="This ecommerce web app was made for my final year project and a little bit about why I chose this topic is that everyone loves shopping, right? Despite knowing that this is not a so called “special” topic, however, I think it is important that the final product is quality and it is something that you are confident that you can perform well enough “wink”."
          />
        </section>
      </div>

      {/* Process */}
      <section id="process">
        <Process>
          <FirstProcessCard
            content="This was my very first big project ever and at first I was so overwhelmed since I did know what I had to do. Even having scoped the topic to e-commerce, I spent quite a lot of time deciding what my website will be about. One thing that I knew was I kind of fancy fashion so I inclined in that direction. I began looking up on the Internet for similar websites to gather inspiration. Luckily, I was able to come up with my own design for my website and began developing fairly soon."
            imageURL="/Ecovani.png"
          />
          <SecondProcessCard
            content1="Because I had to do everything on my own for the project, I was not able to allocate much of my time on either front-end or back-end so the user interfaces were quite simple. But fellow full-stack developers, you know that it’s hard to balance out UI and back-end when time is not on your side right? Essentially, my website includes a home page, a products listing page, a cart review page and a whole lot of other pages for admin roles."
            content2="The idea I had in mind was that I wanted the website to be covered in cold colors (black, white, maybe with a touch of gray). I wanted it to be simple, effective and easy for visitors to navigate."
            imageURL1="/Ecovani3.png"
            imageURL2="/Ecovani4.png"
          />
        </Process>
      </section>

      <section>
        <TakeAways />
      </section>

      <section id="want-more">
        <WantMore href="/antru" />
      </section>
    </React.Fragment>
  );
};

export default Ecovani;
