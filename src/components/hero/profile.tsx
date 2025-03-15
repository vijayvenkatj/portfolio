import IntroComponent from "../intro";
import ProfileImage from "./profile-image";

export default function ProfileSection() {
    return (
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center text-center lg:text-left">
        {/* Profile Image */}
        <div className="w-3/5 lg:w-1/3 xl:w-2/5 flex justify-center">
          <ProfileImage />
        </div>
        
        {/* Intro Section */}
        <div className="w-full lg:w-2/3 xl:w-3/5 flex justify-center">
          <IntroComponent />
        </div>
      </div>
    );
}
