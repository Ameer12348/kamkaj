import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { RiPinterestLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="container-fluid px-0 pt-5"
      style={{
        background:
          'url("https://www.kamkaj.pk/Content/images/kamkajV2/footer-bg.png") no-repeat center center /cover',
      }}
    >
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-4 gx-5 gy-3 gy-lg-2">
          <div className="ps-5 ps-lg-2">
            <img
              src="https://www.kamkaj.pk/content/images/kamkajV2/logo-light.png"
              className="mb-3"
              alt=""
            />
            <p className="text-light" style={{ fontSize: "14px" }}>
              When it comes to Kam Kaj, the object of the word 'Kam' reflects
              our motive to add value to our customers' lives by providing all
              the essential services in their day-to-day lives. On the other
              hand, the word 'Kaj' highlights our motive to reduce the
              unemployment from Pakistan by hiring in-house staff whom we train
              in any given skills.
            </p>
          </div>
          <div className="ps-5 ps-lg-2">
            <h3 className="text-light fw-bold">Company</h3>
            <ul className="p-0">
              <li className="list-unstyled text-light">Blog</li>
              <li className="list-unstyled text-light">About Us</li>
              <li className="list-unstyled text-light">Careers</li>
              <li className="list-unstyled text-light">Press</li>
              <li className="list-unstyled text-light">Videos</li>
            </ul>
          </div>
          <div className="ps-5 ps-lg-2">
            <h3 className="text-light fw-bold">Customers</h3>
            <ul className="p-0">
              <li className="list-unstyled text-light">How it works</li>
              <li className="list-unstyled text-light">Iphone App</li>
              <li className="list-unstyled text-light">Android App</li>
            </ul>
          </div>
          <div className="ps-5 ps-lg-2">
            <h3 className="text-light fw-bold">Support</h3>
            <ul className="p-0">
              <li className="list-unstyled text-light">Contact Us</li>
              <li className="list-unstyled text-light">0304-111-1526</li>
              <li className="list-unstyled text-light">support@kamkaj.pk</li>
            </ul>
          </div>
        </div>
        <div className="d-flex flex-wrap pb-3 gap-3 justify-content-between align-items-center">
          <div className="d-flex  align-items-center ps-4 ps-lg-1">
            <h5 className="fw-bold text-light py-2 ">Follow us</h5>
            <button
              className=" text-light   text-center border border-light border-1 mx-2 rounded rounded-circle d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: "transparent",
                width: "50px",
                height: "50px",
                fontSize: "30px",
              }}
            >
              <FaFacebook />{" "}
            </button>
            <button
              className=" text-light   text-center border border-light border-1 mx-2 rounded rounded-circle d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: "transparent",
                width: "50px",
                height: "50px",
                fontSize: "30px",
              }}
            >
              <FaInstagram />{" "}
            </button>
            <button
              className=" text-light   text-center border border-light border-1 mx-2 rounded rounded-circle d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: "transparent",
                width: "50px",
                height: "50px",
                fontSize: "30px",
              }}
            >
              <FaYoutube />{" "}
            </button>
            <button
              className=" text-light   text-center border border-light border-1 mx-2 rounded rounded-circle d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: "transparent",
                width: "50px",
                height: "50px",
                fontSize: "30px",
              }}
            >
              <RiPinterestLine />{" "}
            </button>
            <button
              className=" text-light   text-center border border-light border-1 mx-2 rounded rounded-circle d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: "transparent",
                width: "50px",
                height: "50px",
                fontSize: "30px",
              }}
            >
              <CiTwitter />{" "}
            </button>
          </div>
          <div className="d-flex align-items-center ps-4 ps-lg-1">
            <h5 className="fw-bold text-light py-2 ">Mobile App</h5>
            <button
              className=" text-light   text-center border border-light border-1 mx-2 rounded rounded-circle d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: "transparent",
                width: "50px",
                height: "50px",
                fontSize: "30px",
              }}
            >
              <IoLogoAndroid />{" "}
            </button>
            <button
              className=" text-light   text-center border border-light border-1 mx-2 rounded rounded-circle d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: "transparent",
                width: "50px",
                height: "50px",
                fontSize: "30px",
              }}
            >
              <FaApple />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
