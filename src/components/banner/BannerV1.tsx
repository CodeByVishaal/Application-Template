import illustration5 from "/assets/img/illustration/5.png";
import illustration8 from "/assets/img/illustration/8.png";
import { Link } from "react-router-dom";
import SplitText from "../animation/SplitText.jsx";
import Animate from "../animation/Animate.js";

const BannerV1 = () => {
  return (
    <>
      <div className="banner-style-one-area bg-cover">
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        >
          <source src="/assets/video/LogoAnimation.m4v" type="video/mp4" />
        </video>

        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="banner-style-one-heading">
                <div className="banner-title">
                  <h2 className="title-left split-text"></h2>

                  <h2 className="title-right split-text"></h2>
                </div>
                {/* <Animate className="animate__animated animate__fadeInRight">
                  <div className="thumb">
                    <img
                      className="regular-img"
                      src={illustration5}
                      alt="Image Not Found"
                    />
                    <img
                      className="light-img"
                      src={illustration8}
                      alt="Image Not Found"
                    />
                  </div>
                </Animate> */}
              </div>
            </div>
            {/* <div className="col-xl-4 offset-xl-1">
                            <Animate className='animate__animated animate__fadeInUp' delay="1s" duration="0.6s">
                                <div className="banner-style-one-info">
                                    <div className="top-info">
                                        <h4>Based On Australia</h4>
                                        <p>
                                            Uburb, State Abbreviation, Postcode
                                        </p>
                                    </div>
                                    <div className="bottom">
                                        <p>
                                            Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic.
                                        </p>
                                        <Link to="/project" className="btn-style-two mt-30"><i className="fas fa-long-arrow-right" /> Our <br /> Projects</Link>
                                    </div>
                                </div>
                            </Animate>
                        </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerV1;
