import "./App.css";
import { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { projectsDetailsData } from "./components/ProjectDetails/projectsData";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
import { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import { Helmet } from "react-helmet";
import ScrollIndicator from "./components/ScrollIndicator";
import ReactGA from "react-ga4";

const trackingId = import.meta.env.VITE_TRACKING_ID;

const MainPage = lazy(() => import("./pages/MainPage"));
const ProjectDetails = lazy(() => import("./components/ProjectDetails"));
const PageNotFound = lazy(() => import("./components/NotFound"));

const App = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    ReactGA.initialize(trackingId);
    const pagePath = window.location.pathname;
    ReactGA.send({
      hitType: "pageview",
      page: pagePath,
      title: "Portfolio Page",
    });
  }, []);

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
      title: document.title,
    });
  }, [location]);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        setIsInitialLoad(false);
      }, 2600);
    })();
  }, [isInitialLoad]);

  if (isLoading) {
    return (
      <section>
        <Preloader />
      </section>
    );
  }

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>Mariusz Gruszczynski • Software Developer</title>
        <meta
          name="description"
          content="Bridging design and functionality with full-stack web development. Based in Madrid, Spain."
        />

        {/* Open Graph for social media */}
        <meta
          property="og:title"
          content="Mariusz Gruszczynski • Software Developer"
        />
        <meta
          property="og:description"
          content="Discover my skills in combining design and functionality in full-stack web development using modern technologies like Typescript, React, and Node."
        />
        <meta
          property="og:image"
          content="https://www.mariuszgruszczynski.com/thumbnail.png"
        />
        <meta
          property="og:site_name"
          content="Mariusz Gruszczynski • Software Developer"
        />
        <meta property="og:locale" content="en" />
        <meta property="og:type" content="website" />

        {/* Twitter Card for better Twitter sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mariusz Gruszczynski • Software Developer"
        />
        <meta
          name="twitter:description"
          content="Explore my portfolio to see my skills in React, Node.js, and full-stack development."
        />
        <meta
          name="twitter:image"
          content="https://www.mariuszgruszczynski.com/thumbnail.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="google" content="notranslate" />
        <meta property="og:locale" content="en" />
        <link rel="canonical" href="https://mariuszgruszczynski.com" />

        <script type="application/ld+json"></script>

        {/* Schema.org for Google */}
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Person",
              "name": "Mariusz Gruszczynski",
              "jobTitle": "Software Developer",
              "description": "Software Developer with expertise in React, Node.js, and web development.",
              "url": "https://www.mariuszgruszczynski.com",
              "sameAs": [
                "https://www.linkedin.com/in/mariusz-gruszczynski",
                "https://github.com/MarioGrusz"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "mario.gruszczynski@gmail.com"
              }
            }
          `}
        </script>
      </Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <AnimatePresence mode="wait" initial={false}>
          <ScrollIndicator />
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <MainPage />
                </PageTransition>
              }
            />
            <Route
              path="/hable-mas"
              element={
                <PageTransition>
                  <ProjectDetails data={projectsDetailsData[0]} />
                </PageTransition>
              }
            />
            <Route
              path="/bean-bazaar"
              element={
                <PageTransition>
                  <ProjectDetails data={projectsDetailsData[1]} />
                </PageTransition>
              }
            />
            <Route
              path="/task-ease"
              element={
                <PageTransition>
                  <ProjectDetails data={projectsDetailsData[2]} />
                </PageTransition>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  );
};

export default App;
