import TheNavbar from "@/components/custom/common/the-navbar";
import TheFooter from "@/components/custom/common/the-footer";
import DashboardBanner from "@/components/custom/dashboard/dashboard-banner";
import JourneyFlowVertical from "@/components/custom/dashboard/journey-flow-vertical";
import FooterCard from "@/components/custom/dashboard/footer-card";
import TestimonialSection from "@/components/custom/dashboard/testimonial-section";
import PlansSection from "@/components/custom/dashboard/plans-section";
import ContactSection from "@/components/custom/dashboard/contact-section";
import PackagesSection from "@/components/custom/dashboard/packages-section";

export default function Home() {

    return (
    <>
      <section className="w-screen h-full flex flex-col justify-between overflow-x-hidden">
          <DashboardBanner/>
          <div className="relative">
              <TheNavbar/>
              <PackagesSection/>
              <PlansSection/>
              <ContactSection/>
              <TestimonialSection/>
              <JourneyFlowVertical/>
              <FooterCard/>
              {/*<ContactCornerSoftwares/>*/}
              <TheFooter/>
          </div>
      </section>
    </>
  );
}
