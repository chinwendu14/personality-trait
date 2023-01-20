import React from "react";
import "./home.scss";
import { humanImage } from "../../assets";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  //   const router = useRouter;
  const history = useNavigate();
  return (
    <div className="home">
      <div className="home__textContainer">
        <h1>Personality Trait</h1>
        <p>
          Personality traits reflect people’s characteristic patterns of
          thoughts, feelings, and behaviours. Personality traits imply
          consistency and stability someone who scores high on a specific trait
          like Extraversion is expected to be sociable in different situations
          and over time.
        </p>
        <div className="home__btnDiv">
          <Button
            text="Start Personality Test"
            onClick={() => history("/personalit-test")}
            large
          />
        </div>
      </div>
      <div className="home__imgContainer">
        <img src={humanImage} alt="img" />
      </div>
    </div>
  );
};

export default Home;
