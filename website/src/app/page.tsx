import HeroSection from "@/components/home/HeroSection";
import MissionOverview from "@/components/home/MissionOverview";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import TeachingsPreview from "@/components/home/TeachingsPreview";
import DonationCTA from "@/components/home/DonationCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionOverview />
      <UpcomingEvents />
      <TeachingsPreview />
      <DonationCTA />
    </>
  );
}
