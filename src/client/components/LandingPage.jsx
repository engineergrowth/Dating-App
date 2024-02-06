import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";
import ".././style.css";

const backgroundImage = "/6.jpg";

const LandingPage = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const veronicaImage = "/Veronica.jpg";
  const albertImage = "/albert.jpg";
  const maryImage = "/mary.jpg";
  const kennyImage = "/Kenny.jpg";

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/matches");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="h-screen w-full flex flex-col justify-center items-center text-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="h-screen w-full flex flex-col justify-center p-8">
          <div className="custom-width">
            <h1 className="title-text">Welcome to Love's Journey!</h1>
            <p className="regular-text">
              <span className="font-bold">Pucker Up</span> for an adventure
              where hearts collide and stories unfold.
            </p>
            <p className="regular-text">
              We're dedicated to creating magical connections. Like, chat, and
              discover your perfect match today.
            </p>
            <div className="mt-6">
              <Link to="/login" className="flex-grow login-button">
                Login
              </Link>
              <Link to="/register" className="flex-grow join-now-button">
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="reviews-section bg-white p-4">
        <h2 className="text-xl font-bold text-center mb-6">User Reviews</h2>
        <div className="flex flex-wrap justify-center">
          <div className="review-card">
            <img src={maryImage} alt="Mary's Review" />
            <div className="rating">4.8 out of 5</div>
            <p className="review-text">
              "Found my match on Pucker Up! The experience was seamless and
              genuine. Highly recommend!"
            </p>
          </div>
          <div className="review-card">
            <img src={albertImage} alt="Albert's Review" />
            <div className="rating">4.9 out of 5</div>
            <p className="review-text">
              "Amazing platform with thoughtful features. Met my soulmate here!"
            </p>
          </div>
          <div className="review-card">
            <img src={veronicaImage} alt="Veronica's Review" />
            <div className="rating">5 out of 5</div>
            <p className="review-text">
              "Pucker Up changed my life! The community is welcoming, and I
              found love. 10/10!"
            </p>
          </div>
          <div className="review-card">
            <img src={kennyImage} alt="Kenny's Review" />
            <div className="rating">5 out of 5</div>
            <p className="review-text">
              "Found my perfect match after just a few weeks! This site has
              changed my life, bringing me love I never knew existed."
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-white">
        <div className="py-4">
          <div className="flex justify-center gap-4 social-icons-container">
            <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
            <FontAwesomeIcon icon={faTwitter} className="text-xl" />
            <FontAwesomeIcon icon={faGoogle} className="text-xl" />
            <FontAwesomeIcon icon={faInstagram} className="text-xl" />
            <FontAwesomeIcon icon={faLinkedinIn} className="text-xl" />
            <FontAwesomeIcon icon={faGithub} className="text-xl" />
          </div>
          <hr className="border-gray-700" />
          <div className="py-6 max-w-6xl mx-auto px-8">
            <div className="landing-footer">
              <div>
                <h6 className="font-semibold">Pucker Up</h6>
                <p>
                  "At Pucker Up, our mission is to connect hearts worldwide,
                  creating meaningful relationships that last. We believe in
                  love without boundaries, offering you a safe, inclusive space
                  to discover your match."
                </p>
              </div>
              <div>
                <h6 className="font-semibold">Legal</h6>
                <ul className="list-none">
                  <li>Privacy</li>
                  <li>Terms</li>
                  <li>Cookie Policy</li>
                </ul>
              </div>
              <div>
                <h6 className="font-semibold">Corporate</h6>
                <ul className="list-none">
                  <li>Careers Portal</li>
                  <li>Tech Blog</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div>
                <h6 className="font-semibold">Contact</h6>
                <p>New York, NY 10012, US</p>
                <p>info@example.com</p>
                <p>+ 01 234 567 88</p>
                <p>+ 01 234 567 89</p>
              </div>
            </div>
          </div>
          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2021 Copyright: PuckerUp.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
