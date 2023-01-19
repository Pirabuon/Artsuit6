import React from "react";

import PostsList from "../components/PostsList";
import { Link } from "react-router-dom";
import slider from "../components/images/slider.png";
import sliderB from "../components/images/sliderB.png";
import bgrest from "../components/images/bgrest.png";
import bgstreet from "../components/images/bgstreet.png";
import BarSection from "../components/BarSection";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function HomePage() {
  return (
    <>
      <div className="heroSection">
        <div className="container-fluid ">
          <div className="row vertical-center-70">
            <div className="col-12 col-lg-7 mainTxt">
              <h1>
                <span>Bringing your vision to life </span>
                with creativity and design expertise.<br></br>
              </h1>
              <br></br>
              <a className="btn1" href="#Explore">
                Explore
              </a>
            </div>
            <div className="col-12 col-lg-5 media">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={false}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false
                }}
                modules={[Autoplay, Pagination, Navigation]}
              >
                <SwiperSlide>
                  <img src={slider} alt="Logo" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={sliderB} alt="Logo" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="container serviceSection" id="Explore">
        <div className="row">
          <div className="col-12 col-md-6 col-xl-3 mb-5">
            <div className="item" data-aos="fade-up">
              <img src={slider} alt="Logo" />
              <h3>Web / Web app</h3>
              <p>
                Unleash your business potential with a visually stunning and
                effective website, we manage every aspect of your online
                presence, leaving you free to focus on your business !
              </p>
              <Link to="/contact">
                <button className="btn2">Build</button>
              </Link>
              <Link to="/web">
                <button className="btn4">Examples</button>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 mb-5">
            <div className="item" data-aos="fade-up">
              <img src={slider} alt="Logo" />
              <h3>Logo / Visual identity </h3>
              <p>
                Let us design a logo that effectively communicates your brand's
                story and includes all essential stationery materials for
                connecting with your customers.
              </p>
              <Link to="/contact">
                <button className="btn2">Lets go...</button>
              </Link>
              <Link to="/print">
                <button className="btn4">Examples</button>
              </Link>
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-3 mb-5">
            <div className="item" data-aos="fade-up">
              <img src={slider} alt="Logo" />
              <h3>Video / Motion</h3>
              <p>
                Make an impact with motion design that grabs attention. We
                create custom designs tailored to your target market, bringing
                your brand to life with dynamic visuals.
              </p>
              <Link to="/contact">
                <button className="btn2">Create</button>
              </Link>
              <Link to="/video">
                <button className="btn4">Examples</button>
              </Link>
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-3 mb-5">
            <div className="item" data-aos="fade-up">
              <img src={slider} alt="Logo" />
              <h3>Social Media marketing</h3>
              <p>
                With almost everyone on social media, it's time to connect with
                them where they are. Let us make a lasting first impression with
                our social media strategies, ready to take your brand to the
                next level?
              </p>
              <Link to="/contact">
                <button className="btn2">Lets talk !</button>
              </Link>
              <Link to="/marketing">
                <button className="btn4">Examples</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container aboutSection">
        <div className="row">
          <div className="col-12 artTxt text-center">
            <h3 className="toper" data-aos="fade-up">
              About us
            </h3>
            <h2 className="title mb-3" data-aos="fade-up">
              Design that makes a difference
            </h2>
            <p data-aos="fade-up">
              We help businesses succeed by managing all aspects of marketing,
              from print to digital to social media, and creating a unique
              brand. Let us bring your vision to life and take your business to
              the next level.
            </p>

            <Link to="/contact">
              <button className="btn2" data-aos="fade-up">
                Chat ?
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="explainSection"
        style={{
          backgroundImage: `url(${bgstreet})`
        }}
      >
        <div className="container">
          <div className="row vertical-center-70">
            <div className="col-12 col-md-6 hsImg">
              <img src={sliderB} alt="Logo" data-aos="fade-up" />
            </div>
            <div className="col-12 col-md-6 artTxt mb-5">
              <h3 className="toper" data-aos="fade-up">
                Product
              </h3>
              <h2 className="title mb-3" data-aos="fade-up">
                Screen Controler
              </h2>
              <p className="mb-4" data-aos="fade-up">
                Unleash the power of convenience and efficiency with our screen
                controller, allowing you to take complete control of your
                store's promotions by yourself, edit and publish them at your
                own pace.
              </p>
              <ul className="lister">
                <li data-aos="fade-up">
                  <img src={slider} alt="Logo" />
                  <p>Edit & publish whenever and wherever you want</p>
                </li>

                <li data-aos="fade-up">
                  <img src={slider} alt="Logo" />
                  <p>Create new promotions on your own within minutes.</p>
                </li>
                <li data-aos="fade-up">
                  <img src={slider} alt="Logo" />
                  <p>Utilize premade templates and seasonal animations.</p>
                </li>
              </ul>
              <Link to="/contact">
                <button className="btn2" data-aos="fade-up">
                  Try this
                </button>
              </Link>

              <Link
                to={{
                  pathname: "/live-demo",
                  state: { url: "https://screen.artsuit.com/screen/shanu/" }
                }}
              >
                <button className="btn3" data-aos="fade-up">
                  live demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="explainSection even"
        style={{
          backgroundImage: `url(${bgrest})`
        }}
      >
        <div className="container">
          <div className="row d-flex flex-md-row-reverse vertical-center-70">
            <div className="col-12 col-md-6 hsImg">
              <img src={slider} alt="Logo" data-aos="fade-up" />
            </div>

            <div className="col-12 col-md-6 artTxt mb-5">
              <h3 className="toper" data-aos="fade-up">
                Solution
              </h3>
              <h2 className="title" data-aos="fade-up">
                Online ordering !
              </h2>
              <p className="mb-4" data-aos="fade-up">
                Transform your business online and tap into the booming
                e-commerce market. Connect with customers and elevate your brand
                with our easy-to-use solution
              </p>
              <ul className="lister">
                <li data-aos="fade-up">
                  <img src={slider} alt="Logo" />
                  <p>No monthly fees !</p>
                </li>

                <li data-aos="fade-up">
                  <img src={slider} alt="Logo" />
                  <p>No comissisons!</p>
                </li>
                <li data-aos="fade-up">
                  <img src={slider} alt="Logo" />
                  <p>Full control</p>
                </li>
              </ul>

              <Link to="/contact">
                <button className="btn2" data-aos="fade-up">
                  Try this
                </button>
              </Link>

              <Link
                to={{
                  pathname: "/live-demo",
                  state: { url: "https://chickenacheres2021.com/" }
                }}
              >
                <button className="btn3" data-aos="fade-up">
                  live demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <BarSection />
      <div className="projectSection">
        <div className="container-fluid">
          <PostsList />
        </div>
      </div>
    </>
  );
}
