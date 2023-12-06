import React from "react";
import { REGULAR_PATHS } from "./paths";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "../pages/home/index";
import OurFirm from "../pages/ourFirm/index";
import PracticeArea from "../pages/practiceArea/index";
import CaseStudies from "../pages/caseStudies/index";
import Contact from "../pages/contact/index";
import Blog from "../pages/blog/index";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

export const AppRouter = () => {
  //paths
  const {
    HOME,
    OUR_FIRM,
    PRACTICE_AREAS,
    CASE_STUDIES,
    CONTACT,
    BLOG,
    // PRACTICE_AREA,
    // CASE_STUDY,
    // BLOG_POST,
  } = REGULAR_PATHS;

  //LAYOUT
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  //routes
  const router = createBrowserRouter([
    {
      path: HOME,
      element: <Layout />,
      children: [
        {
          path: HOME,
          element: <Home />,
        },
        {
          path: OUR_FIRM,
          element: <OurFirm />,
        },
        {
          path: PRACTICE_AREAS,
          element: <PracticeArea />,
        },
        {
          path: CASE_STUDIES,
          element: <CaseStudies />,
        },
        {
          path: CONTACT,
          element: <Contact />,
        },
        {
          path: BLOG,
          element: <Blog />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
