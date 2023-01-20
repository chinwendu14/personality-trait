/* eslint-disable no-unused-vars */
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import SpinnerLoader from "../components/spinnerLoader/SpinnerLoader";
const Home = lazy(() => import("../pages/home/Home"));
const PersonalityTest = lazy(() =>
  import("../pages/personalityTest/PersonalityTest")
);
const StartPersonalityTest = lazy(() =>
  import("../pages/startPersonalityTest/StartPersonalityTest")
);
const Introvert = lazy(() => import("../pages/result/introvert/Introvert"));
const Extrovert = lazy(() => import("../pages/result/extrovert/Extrovert"));

const RouterConfig = () => {
  return (
    <Suspense fallback={<SpinnerLoader />}>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/personalit-test" element={<PersonalityTest />} />
        <Route
          path="/start-personalit-test"
          element={<StartPersonalityTest />}
        />
        <Route path="/introvert" element={<Introvert />} />
        <Route path="/extrovert" element={<Extrovert />} />
      </Routes>
    </Suspense>
  );
};

export default RouterConfig;
