import React from "react";
import { REGULAR_PATHS } from "./paths";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Home from "../pages/home/Home";
import OurFirm from "../pages/ourFirm/index";
import PracticeAreas from "../pages/practiceAreas/index";
import PracticeArea from "../pages/practiceArea/PracticeArea";
import CaseStudies from "../pages/caseStudies/CaseStudies";
import CaseStudy from "../pages/caseStudy/CaseStudy";
import Contact from "../pages/contact/Contact";
import Blog from "../pages/blog/Blog";
import NotFound from "../pages/notFound/index";
import BlogPost from "../pages/blogPost/BlogPost";
import StratagemAdmin from "../pages/backend/stratagemAdmin/index";
import RegisterPage from "../pages/backend/register/index";
import LoginPage from "../pages/backend/login/index";
import BackendNavBar from "../components/backend/BackendNavBar";
import BlogContent from "../pages/backend/blogContent/index";
import CaseStudiesPost from "../pages/backend/caseStudiesPost/index";

export const AppRouter = () => {
  //paths
  const {
    HOME,
    OUR_FIRM,
    PRACTICE_AREAS,
    CASE_STUDIES,
    CONTACT,
    BLOG,
    PRACTICE_AREA,
    CASE_STUDY,
    BLOG_POST,
    REGISTER,
    LOGIN,
    STRATAGEM_ADMIN,
    BLOG_CONTENT,
    CASE_STUDIES_POST,
  } = REGULAR_PATHS;

  //LAYOUT FOR FRONT-END
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  //LAYOUT FOR FRONT-END
  const BackendLayout = () => {
    return (
      <div>
        <BackendNavBar />
        <Outlet />
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
          element: <PracticeAreas />,
        },
        {
          path: PRACTICE_AREA,
          element: <PracticeArea />,
        },
        {
          path: CASE_STUDIES,
          element: <CaseStudies />,
        },
        {
          path: CASE_STUDY,
          element: <CaseStudy />,
        },
        {
          path: CONTACT,
          element: <Contact />,
        },
        {
          path: BLOG,
          element: <Blog />,
        },
        {
          path: BLOG_POST,
          element: <BlogPost />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
    {
      path: STRATAGEM_ADMIN,
      element: <BackendLayout />,
      children: [
        {
          path: STRATAGEM_ADMIN,
          element: <StratagemAdmin />,
        },
        {
          path: REGISTER,
          element: <RegisterPage />,
        },
        {
          path: LOGIN,
          element: <LoginPage />,
        },
        {
          path: BLOG_CONTENT,
          element: <BlogContent />,
        },
        {
          path: CASE_STUDIES_POST,
          element: <CaseStudiesPost />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
