import { Footer } from "@/components/footer";
import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";

const AuthLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="h-full bg-[#111827]">
      <LandingNavbar />
      <main className="h-full flex items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>    
  );
}
 
export default AuthLayout;