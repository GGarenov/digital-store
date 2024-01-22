import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact"} />
      <BreadCrumb title="Contact" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.7056380691297!2d23.393225074156792!3d42.64639997116771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa86efecd65cf9%3A0x228909e10a694483!2sCapital%20Fort%2C%20Boulevard%20%22Tsarigradsko%20shose%22%2C%201784%207-Mi%20Kilometar%2C%20Sofia!5e0!3m2!1sen!2sbg!4v1705834448077!5m2!1sen!2sbg"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input type="text" className="form-control" placeholder="name" />
                    </div>
                    <div>
                      <input type="email" className="form-control" placeholder="email" />
                    </div>
                    <div>
                      <input type="tel" className="form-control" placeholder="mobile number" />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="comments"
                      ></textarea>
                    </div>
                    <div>
                      <button type="submit" className="button border-0">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>

                <div>
                  <h3 className="contact-title mb-4">Get in touch</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5" />
                        <address>Sofia, Bulgaria Tsarigrdsko Shose 90</address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <FaPhoneAlt className="fs-5" />
                        <a href="tel:+359 888 888 888">+359 888 888 888</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto:g_garenov@outlook.com"> g_garenov@outlook.com</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiInfoCircle className="fs-5" />
                        <p className="mb-0">Monday - Friday 9 AM - 5 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
