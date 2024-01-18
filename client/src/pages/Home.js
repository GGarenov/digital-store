import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-3">
                <img src="images/main-banner-1.jpg" className="img-fluid rounded-3" alt="main-banner" />
                <div className="main-banner-content position-absolute">
                  <h4>NQKAV TEXT</h4>
                  <h5>iPhone 15 Pro</h5>
                  <p>From $2999 or $199.99/mo.</p>
                  <Link className="button">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img src="images/catbanner-01.jpg" className="img-fluid rounded-3" alt="main-banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>BEST OFFER</h4>
                    <h5>Gaming Laptops</h5>
                    <p>
                      From $1999 <br /> or $99.99/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="images/catbanner-02.jpg" className="img-fluid rounded-3" alt="main-banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>New Arrivals</h4>
                    <h5>Buy IPad Air</h5>
                    <p>
                      From $999 <br /> or $49.99/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="images/catbanner-03.jpg" className="img-fluid rounded-3" alt="main-banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>30% OFF</h4>
                    <h5>Smartwatch 7</h5>
                    <p>
                      Kupi si geiski chasovnik <br /> za da izglejdash na 20
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="images/catbanner-04.jpg" className="img-fluid rounded-3" alt="main-banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>FREE DELIVERY</h4>
                    <h5>AirPods Max</h5>
                    <p>
                      High quality sound <br /> & ultra-low distortion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
