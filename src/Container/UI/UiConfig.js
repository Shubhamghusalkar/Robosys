import { UiRoutes } from "../../Routes/UiRoutes";
import Courses from "./Courses/Courses";
import CourseView from "./Courses/CourseView";
import AboutUs from "./Home/AboutUs";
import Contact from "./Home/Contact";
import HomeAbout from "./Home/HomeAbout";
import HomeBanner from "./Home/HomeBanner";
import HomeBestSeller from "./Home/HomeBestSeller";
import HomeChooseUs from "./Home/HomeChooseUs";
import HomeOffer from "./Home/HomeOffer";
import HomePage from "./Home/HomePage";
import HomeTestimonials from "./Home/HomeTestimonials";
import Profile from "./Home/Profile";
import Kits from "./Kits/Kits";
import ProductCart from "./Product/ProductCart";
import Products from "./Product/Products";
import ProductView from "./Product/ProductView";


export const UiConfig = [
    
    {
        path: UiRoutes.website.home,
        element: <HomePage/>
    },
    {
        path: UiRoutes.website.home,
        element: <HomeBanner/>
    },
    {
        path: UiRoutes.website.home,
        element: <HomeAbout/>
    },
    {
        path: UiRoutes.website.home,
        element: <HomeBestSeller />
    },
    {
        path: UiRoutes.website.home,
        element: <HomeChooseUs />
    },
    {
        path: UiRoutes.website.home,
        element: <HomeOffer />
    },
    {
        path: UiRoutes.website.home,
        element: <HomeTestimonials />
    },
    {
        path: UiRoutes.website.home,
        element: <HomeTestimonials />
    },
    {
        path: UiRoutes.website.products,
        element: <Products />
    },
    {
        path: UiRoutes.website.productView,
        element: <ProductView />
    },
    {
        path: UiRoutes.website.productCart,
        element: <ProductCart />
    },
    {
        path: UiRoutes.website.profile,
        element: <Profile />
    },
    {
        path: UiRoutes.website.contact,
        element: <Contact />
    },
    {
        path: UiRoutes.website.about,
        element: <AboutUs />
    },
    {
        path: UiRoutes.website.kits,
        element: <Kits />
    },
    {
        path: UiRoutes.website.courses,
        element: <Courses />
    },
    {
        path: UiRoutes.website.coursesView,
        element: <CourseView />
    },



   
]