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
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Load Google Fonts asynchronously */}
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>

        {/* Basic SEO */}
        <title>Mariusz Gruszczynski • Software Developer</title>
        <meta
          name="description"
          content="Software developer based in Madrid, crafting scalable websites, apps, and modern software solutions. Specializing in bridging design and functionality."
        />

        {/* Open Graph for social media */}
        <meta
          property="og:title"
          content="Mariusz Gruszczynski • Software Developer"
        />
        <meta
          property="og:description"
          content="Explore scalable web solutions that combine cutting-edge design and functionality. Specializing in React, TypeScript, and Node.js."
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
          content="Discover the expertise of a full-stack developer, combining design and development in modern technologies like React, Node.js, and TypeScript."
        />
        <meta
          name="twitter:image"
          content="https://www.mariuszgruszczynski.com/thumbnail.png"
        />
        <meta name="google" content="notranslate" />
        <link rel="canonical" href="https://mariuszgruszczynski.com" />

        {/* Schema.org for Google */}
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Person",
              "name": "Mariusz Gruszczynski",
              "jobTitle": "Software Developer",
              "description": "Experienced in developing modern, scalable web applications and software solutions with a focus on design and functionality.",
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

        {/* Google Tag Manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-STH3BH5TKQ"
          rel="preload"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-STH3BH5TKQ');
          `}
        </script>
      </Helmet>

      <Suspense>
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
