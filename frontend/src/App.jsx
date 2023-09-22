import HomeMain from "./Component/Home/HomeMain";
import Navbar from "./Component/Navbar";
import Layout from "./dashboard/Layout";
import { Routes, Route, useLocation } from "react-router-dom";
import Register from "./Component/Auth/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Component/Auth/Login";
import About from "./Component/Aboutus/Aboutus";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import ServicesPage from "./Pages/Services";
import Otp from "./Component/Auth/Otp";
import Phone from "./Component/Phone/Phone";
import Quotes from "./Pages/Quotes";
import Career from "./Pages/Career";
import PPortfolio from "./Pages/PPortfolio";
import { Helmet } from "react-helmet";
import TermNconditions from "./Pages/termNconditions";
import Privacy from "./Pages/privacy";
import Message from "./Pages/message";
import WebDesign from "./Pages/Development/WebDesign";
import LogoDev from "./Pages/Development/LogoDev";
import WebDev from "./Pages/Development/WebDev";
import Software from "./Pages/Development/Software";
import AppDev from "./Pages/Development/AppDev";
import Crm from "./Pages/Development/Crm";
import MetaAds from "./Pages/DigitalMarketing/MetaAds";
import EmailMarketing from "./Pages/DigitalMarketing/EmailMarketing";
import ContentMarketing from "./Pages/DigitalMarketing/ContentMarketing";
import SeoSmo from "./Pages/DigitalMarketing/SeoSmo";
import GoogleAds from "./Pages/DigitalMarketing/GoogleAds";
import Ppc from "./Pages/DigitalMarketing/Ppc";
import Brand from "./Pages/brand/Brand";
import DigitalMarketing from "./Pages/brand/DigitalMarketing";
import Fluence from "./Pages/brand/Fluence";
import ScrollToTop from "./Component/ScrollToTop";
import Orm from "./Pages/brand/Orm";
import SocialMedia from "./Pages/brand/SocialMedia";
import PublicRelation from "./Pages/brand/PublicRelation";
import { useSelector, useDispatch } from "react-redux";
import Loader from "./Component/Home/Loader.jsx";
import { useEffect } from "react";
import { verifyUserLogin } from "./utils/api";
import { addUser } from "./features/userSlice";

function App() {
  const isAtAdmin = useLocation().pathname.includes("admin");
  const Load = useSelector((st) => st.loading.show);
  const dispatch = useDispatch();
  let count = 0
  const verifyLogin = async () => {
    const token = localStorage.getItem("token");
    if (token && count==0) {
      try {
        const res = await verifyUserLogin();
        if (res.success) {
          dispatch(addUser(res.user));
          count=1
          return;
        } else {
          toast.info("Your login session is expired. Please Login again !");
          localStorage.removeItem("token");
          window.location.reload();
        }
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    verifyLogin();
  }, []);

  return (
    <>
      <ToastContainer />
      {Load && <Loader />}
      <Navbar />

      <Helmet>
        <title>
          Best Website Design Company Faridabad || Best Web Development Company
          Faridabad || Best Brand Building Company Faridabad
        </title>
        <meta
          name="description"
          content="Empowering Brands with Exceptional Website Design and Web Development Services in Faridabad and Delhi NCR. Choose the Best Company to Elevate Your Online Presence"
        />
        <meta
          name="keywords"
          content="Website Design,  Web Development, Brand Building, Digital Marketing, Faridabad & Delhi NCR, Best Company"
        />
      </Helmet>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/servicePage" element={<ServicesPage />} />
        <Route path="/signup" element={<Otp />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/career" element={<Career />} />
        <Route path="/portfolio/*" element={<PPortfolio />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/admin/*" element={<Layout />} />
        <Route path="/policy" element={<Privacy />} />
        <Route path="/terms" element={<TermNconditions />} />
        <Route path="/webdesigns" element={<WebDesign />} />
        <Route path="/logodevelopment" element={<LogoDev />} />
        <Route path="/webdevelopment" element={<WebDev />} />
        <Route path="/message" element={<Message />} />
        <Route path="/software" element={<Software />} />
        <Route path="/appdev" element={<AppDev />} />
        <Route path="/crmdev" element={<Crm />} />
        <Route path="/metaads" element={<MetaAds />} />
        <Route path="/emailMarketing" element={<EmailMarketing />} />
        <Route path="/ContentMarketing" element={<ContentMarketing />} />
        <Route path="/SeoSmo" element={<SeoSmo />} />
        <Route path="/googleAds" element={<GoogleAds />} />
        <Route path="/ppc" element={<Ppc />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/digitalmarketing" element={<DigitalMarketing />} />
        <Route path="/influence" element={<Fluence />} />
        <Route path="/orm" element={<Orm />} />
        <Route path="/socialmedia" element={<SocialMedia />} />
        <Route path="/publicrelation" element={<PublicRelation />} />
      </Routes>

      <hr />
      {!isAtAdmin && <Footer />}
    </>
  );
}

export default App;
