import React from "react";
import "./about.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/trainer1.jpg";
import VisionImage from "../../images/trainer2.jpg";
import MissionImage from "../../images/trainer3.jpg";

const About = () => {
  return (
    <>
      <Header title="Discover Our Fitness Journey" image={HeaderImage}>
        Explore the path to a healthier, stronger, and more vibrant you with us.
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="OurStoryImage" />
          </div>
          <div className="about__section-content">
            <h1>Our Fitness Story</h1>
            <p>
              Embark on a fitness journey with us, where every step is a stride
              towards a healthier and more active lifestyle.
            </p>
            <p>
              Join us in overcoming challenges, celebrating victories, and
              creating a story of resilience, strength, and personal
              transformation.
            </p>
            <p>
              Our community is built on shared goals, support, and the
              commitment to achieving the best versions of ourselves.
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Fitness Vision</h1>
            <p>
              Envision a future where fitness is a way of life, and well-being
              is a priority. Our vision is to inspire and guide individuals
              towards a balanced and sustainable fitness lifestyle.
            </p>
            <p>
              We aim to create an inclusive community where everyone, regardless
              of fitness level, feels empowered to pursue their fitness goals
              with passion and determination.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="VisionImage" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="MissionImage" />
          </div>
          <div className="about__section-content">
            <h1>Our Fitness Mission</h1>
            <p>
              Our mission is to provide accessible and effective fitness
              programs that cater to individual needs and aspirations. We strive
              to foster a community that is driven by a common purpose – to live
              a healthier, happier life through fitness.
            </p>
            <p>
              We are dedicated to offering guidance, motivation, and a
              supportive environment to help you achieve and sustain your
              fitness objectives. Join us in the pursuit of wellness and
              vitality.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
