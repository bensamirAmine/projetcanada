import Head from 'next/head'
import Image from "next/image";
import ServicesCardLayout from "../components/cards/ServicesCardLayout";
import WhyProjetCanada from "../layouts/sections/WhyProjetCanada";
import AboutUs from "../layouts/sections/AboutUs";
import VisibilitySensor from "react-visibility-sensor";
import NewsSection from "../layouts/sections/NewsSection";
import ConsultationSection from "../layouts/sections/ConsultationSection";
import VideoHeader from "../components/Header/VideoHeader";
export default function Home() {
  return (
    <div>
      <VideoHeader />
      <div className="shadow p-3 bg-white rounded w-100">
        <div className="container">
          <ServicesCardLayout />
        </div>
      </div>
      {/* 
      <div className="news-section-container py-5">
        <NewsSection />
      </div>
      <AboutUs />
      <div className="consultation-section-container py-5">
        <ConsultationSection />
      </div> */}
    </div>
  );
}
