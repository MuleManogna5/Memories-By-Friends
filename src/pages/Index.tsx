import WelcomeSection from "@/components/sections/WelcomeSection";
import MemoryCards from "@/components/sections/MemoryCards";
import PhotoGallery from "@/components/sections/PhotoGallery";
import VideoSection from "@/components/sections/VideoSection";
import FriendsNote from "@/components/sections/FriendsNote";
import FinalScene from "@/components/sections/FinalScene";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <WelcomeSection />
      <MemoryCards />
      <PhotoGallery />
      <VideoSection />
      <FriendsNote />
      <FinalScene />
    </div>
  );
};

export default Index;