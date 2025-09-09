import AIInsights from "@/component/home/AIInsights";
import Banner from "@/component/home/Banner";
import CallToAction from "@/component/home/CallToAction";
import CategoriesSection from "@/component/home/CategoriesSection";
import FeaturedArticles from "@/component/home/FeaturedArticles";
import Newsletter from "@/component/home/Newsletter";
import Testimonials from "@/component/home/Testimonials";


import Image from "next/image";

export default function Home() {
  return (
    <div>
    <Banner></Banner>
    <FeaturedArticles></FeaturedArticles>
  <CategoriesSection></CategoriesSection>
  <AIInsights></AIInsights>
  <Testimonials></Testimonials>
  <Newsletter></Newsletter>
  <CallToAction></CallToAction>
    </div>
  );
}
