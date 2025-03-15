import PortfolioBackground from '@/components/background';
import ProfileSection from '@/components/hero/profile';
import Skills from '../skills/skills';

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-auto">
      {/* Fixed Background */}
      <div className="fixed inset-0 z-0">
        <PortfolioBackground />
      </div>
        
      {/* Main Content */}
      <div className="relative z-20">
        <div className="container mx-auto px-4">
          <ProfileSection />
          <Skills />
          <ProfileSection />
          <ProfileSection />
          <ProfileSection />
        </div>
      </div>
    </div>
  );
}