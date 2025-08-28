import TheNavbar from "@/components/custom/common/the-navbar";
import TheFooter from "@/components/custom/common/the-footer";
import DashboardBanner from "@/components/custom/dashboard/dashboard-banner";
import JourneyFlowVertical from "@/components/custom/dashboard/journey-flow-vertical";
import FooterCard from "@/components/custom/dashboard/footer-card";
import TestimonialSection from "@/components/custom/dashboard/testimonial-section";

export default function Home() {

    return (
    <>
      <section className="w-screen h-full flex flex-col justify-between overflow-x-hidden">
          <TheNavbar/>
          <DashboardBanner/>
          {/*<VehiclesSection/>*/}
          <TestimonialSection/>
          <JourneyFlowVertical/>
          <FooterCard/>
          {/*<ContactCornerSoftwares/>*/}
          <TheFooter/>
      </section>
    </>
  );
}
