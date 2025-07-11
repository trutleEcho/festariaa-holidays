import TheNavbar from "@/components/custom/common/the-navbar";
import TheFooter from "@/components/custom/common/the-footer";
import DashboardBanner from "@/components/custom/dashboard/dashboard-banner";
import VehiclesSection from "@/components/custom/dashboard/vehicles-section";
import JourneyFlowVertical from "@/components/custom/dashboard/journey-flow-vertical";
import ContactCornerSoftwares from "@/components/custom/common/contact-corner-softwares";
import FooterCard from "@/components/custom/dashboard/footer-card";

export default function Home() {

    return (
    <>
      <section className="w-screen h-full flex flex-col justify-between overflow-x-hidden">
          <TheNavbar/>
          <DashboardBanner/>
          <VehiclesSection/>
          <JourneyFlowVertical/>
          <FooterCard/>
          <ContactCornerSoftwares/>
          <TheFooter/>
      </section>
    </>
  );
}
