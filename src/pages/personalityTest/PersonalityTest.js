import React from "react";
import Button from "../../components/button/Button";
import "./personalityTest.scss";
import { useNavigate } from "react-router-dom";

const PersonalityTest = () => {
  const history = useNavigate();

  return (
    <div className="personalityTest">
      <div className="personalityTest__bannerDiv">
        <h1> Personality Trait</h1>
      </div>

      <div className="personalityTest__textDiv">
        <p>
          Personality traits reflect people’s characteristic patterns of
          thoughts, feelings, and behaviours. Personality traits imply
          consistency and stability—someone who scores high on a specific trait
          like Extraversion is expected to be sociable in different situations
          and over time. Thus, trait psychology rests on the idea that people
          differ from one another in terms of where they stand on a set of basic
          trait dimensions that persist over time and across situations. The
          most widely used system of traits is called the Five-Factor Model.
          This system includes five broad traits that can be remembered with the
          acronym OCEAN: Openness, Conscientiousness, Extraversion,
          Agreeableness, and Neuroticism. Each of the major traits from the Big
          Five can be divided into facets to give a more fine-grained analysis
          of someone’s personality. In addition, some trait theorists argue that
          there are other traits that cannot be completely captured by the
          Five-Factor Model. Critics of the trait concept argue that people do
          not act consistently from one situation to the next and that people
          are very influenced by situational forces. Thus, one major debate in
          the field concerns the relative power of people’s traits versus the
          situations in which they find themselves as predictors of their
          behaviour.
        </p>
        <div className="personalityTest__btnDiv">
          <Button
            text="Take Personality Test"
            onClick={() => history("/start-personalit-test")}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalityTest;
